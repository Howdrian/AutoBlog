import { getBlogPosts } from "@/lib/sanity";
import type { SanityPost } from "@/types";
import { getCollection } from "astro:content";
import type { Image, PortableTextBlock } from "@sanity/types";

// Describes the raw data fetched from Sanity
interface RawSanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  publishDate: string;
  updatedDate?: string;
  category?: "post" | "note";
  tags: string[];
  featured: boolean;
  draft: boolean;
  pinned: boolean;
  coverImage?: Image & { alt?: string };
  content: PortableTextBlock[];
}

/** Fetches posts from Sanity and transforms them to match the Astro Content Collection shape */
export async function getAllPosts(): Promise<SanityPost[]> {
  const sanityPosts = await getBlogPosts();

  if (!sanityPosts || sanityPosts.length === 0) {
    return [];
  }

  const transformedPosts: SanityPost[] = sanityPosts.map((post: RawSanityPost) => {
    return {
      id: post.slug.current,
      slug: post.slug.current,
      body: post.content,
      collection: "post",
      data: {
        title: post.title,
        description: post.description,
        publishDate: new Date(post.publishDate),
        updatedDate: post.updatedDate ? new Date(post.updatedDate) : undefined,
        category: post.category ?? "post",
        tags: post.tags || [],
        featured: post.featured ?? false,
        draft: post.draft ?? false,
        pinned: post.pinned ?? false,
        ogImage: undefined,
        coverImage: post.coverImage,
      },
    };
  });

	return transformedPosts.filter((post) => (post.data.category ?? "post") === "post");
}


/** Get tag metadata by tag name */
export async function getTagMeta(tag: string) {
	const tagEntries = await getCollection("tag", (entry) => {
		return entry.id === tag;
	});
	return tagEntries[0];
}

/** groups posts by year (based on option siteConfig.sortPostsByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByYear(posts: SanityPost[]) {
	return posts.reduce<Record<string, SanityPost[]>>((acc, post) => {
		const year = post.data.publishDate.getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(post);
		return acc;
	}, {});
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(posts: SanityPost[]) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(posts: SanityPost[]) {
	return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(posts: SanityPost[]): [string, number][] {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}

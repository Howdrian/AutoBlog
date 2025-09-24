import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-09-20";

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {	return builder.image(source);
}

// 获取所有博客文章
export async function getBlogPosts() {
	const query = `*[_type == "blog" && !draft] | order(publishDate desc) {
    _id,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    category,
    tags,
    featured,
    coverImage{
      ...,
      asset->
    },
    content[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }`;

	return await sanityClient.fetch(query);
}

// 根据slug获取单篇文章
export async function getBlogPost(slug: string) {
	const query = `*[_type == "blog" && slug.current == $slug && !draft][0] {
    _id,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    category,
    tags,
    featured,
    coverImage{
      ...,
      asset->
    },
    content[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }`;

	return await sanityClient.fetch(query, { slug });
}

// 获取所有标签
export async function getAllTags() {
	const query = `*[_type == "blog" && !draft].tags[]`;
	const tags = await sanityClient.fetch(query);

	// 去重并统计
	const tagCounts = tags.reduce((acc: Record<string, number>, tag: string) => {
		acc[tag] = (acc[tag] || 0) + 1;
		return acc;
	}, {});

	return Object.entries(tagCounts).map(([tag, count]) => ({
		tag,
		count,
	}));
}

import { defineField, defineType } from "sanity";

export const blog = defineType({
	name: "blog",
	title: "博客文章",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "标题",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "URL路径",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "描述",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "publishDate",
			title: "发布日期",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "分类",
			type: "string",
			options: {
				list: [
					{ title: "博客", value: "post" },
					{ title: "笔记", value: "note" },
				],
				layout: "radio",
			},
			initialValue: "post",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "updatedDate",
			title: "更新日期",
			type: "datetime",
		}),
		defineField({
			name: "tags",
			title: "标签",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		}),
		defineField({
			name: "draft",
			title: "草稿",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "featured",
			title: "特色文章",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "coverImage",
			title: "封面图片",
			type: "image",
			options: {
				hotspot: true, // 开启智能裁剪
			},
		}),
		defineField({
			name: "content",
			title: "内容",
			type: "array",
			of: [
				{
					type: "block", // 富文本块
				},
				{
					type: "image", // 允许在内容中插入图片
					options: { hotspot: true },
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "coverImage", // 更新预览以使用新的图片对象
		},
	},
});

export const schemaTypes = [blog];

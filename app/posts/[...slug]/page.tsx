import { notFound } from "next/navigation";

import { Metadata } from "next";

const allPosts = [
	{
		slugAsParams: "post-1",
		title: "Post 1",
		description: "This is the first post",
		body: {
			code: "console.log('Hello, World!');",
		},
	},
	{
		slugAsParams: "post-2",
		title: "Post 2",
		description: "This is the second post",
		body: {
			code: "console.log('Welcome to the blog!');",
		},
	},
	{
		slugAsParams: "post-3",
		title: "Post 3",
		description: "This is the third post",
		body: {
			code: "console.log('Welcome to the blog!');",
		},
	},
	{
		slugAsParams: "post-4",
		title: "Post 4",
		description: "This is the fourth post",
		body: {
			code: "console.log('Welcome to the blog!');",
		},
	},
];

interface PostProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParams(params: any) {
	const slug = params?.slug?.join("/");
	const post = allPosts.find((post) => post.slugAsParams === slug);

	if (!post) {
		null;
	}

	return post;
}

export async function generateMetadata({ params }: any): Promise<any> {
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	return {
		title: post.title,
		description: post.description,
	};
}

export async function generateStaticParams(): Promise<any> {
	return allPosts.map((post) => ({
		slug: post.slugAsParams.split("/"),
	}));
}

export default async function PostPage({ params }: any) {
	const post = await getPostFromParams(params);

	if (!post) {
		notFound();
	}

	return (
		<article className="py-6 prose dark:prose-invert">
			<h1 className="mb-2">{post.title}</h1>
			{post.description && (
				<p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
					{post.description}
				</p>
			)}
			<hr className="my-4" />
			<p>{post.body.code}</p>
			{/* <Mdx code={post.body.code} /> */}
		</article>
	);
}

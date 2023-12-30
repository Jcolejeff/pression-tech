import Link from "next/link";

const allPosts = [
	{
		_id: 1,
		slug: "posts/post-1",
		title: "Post 1",
		description: "This is the first post",
	},
	{
		_id: 2,
		slug: "posts/post-2",
		title: "Post 2",
		description: "This is the second post",
	},
	{
		_id: 3,
		slug: "posts/post-3",
		title: "Post 3",
		description: "This is the third post",
	},
];

export default function Home() {
	return (
		<div className="prose dark:prose-invert">
			{allPosts.map((post) => (
				<article key={post._id}>
					<Link href={post.slug}>
						<h2>{post.title}</h2>
					</Link>
					{post.description && <p>{post.description}</p>}
				</article>
			))}
		</div>
	);
}

import Author from "./Author";
import type { BlogPreview } from "./BlogPreviewType.ts";
import blogImage from "./assets/images/illustration-article.svg";

export default function BlogPreviewCard({
	blogPreview,
}: {
	blogPreview: BlogPreview;
}) {
	return (
		<div className="">
			<img src={blogImage} alt="blog image," />
			<p>{blogPreview.tag}</p>
			<p>Published {blogPreview.date}</p>
			<h1>{blogPreview.title}</h1>
			<p>{blogPreview.description}</p>
			<Author imgURL={blogPreview.photoURL} name={blogPreview.author} />
		</div>
	);
}

import Author from "./Author";
import type { BlogPreview } from "./BlogPreviewType.ts";
import blogImage from "./assets/images/illustration-article.svg";

export default function BlogPreviewCard({
	blogPreview,
}: {
	blogPreview: BlogPreview;
}) {
	return (
		<div className="bg-white rounded-[1.25rem] shadow-lg p-6 w-96 mx-6 flex flex-col gap-6 drop-shadow-[8px_8px_0px_#111111] border border-solid border-gray-950">
			<img className="rounded-[0.625rem]" src={blogImage} alt="blog image" />
			<div className="flex flex-col gap-3">
				<div className="py-1 px-3 w-fit rounded-sm bg-background-color">
					<p className="text-preset-3-bold text-gray-950">{blogPreview.tag}</p>
				</div>
				<p className="text-preset-3 text-gray-950">
					Published {blogPreview.date}
				</p>
				<h1 className="text-preset-1 text-gray-950">{blogPreview.title}</h1>
				<p className="text-preset-2 text-gray-500">{blogPreview.description}</p>
			</div>
			<Author imgURL={blogPreview.photoURL} name={blogPreview.author} />
		</div>
	);
}

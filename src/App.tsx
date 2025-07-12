import "./App.css";
import BlogPreviewCard from "./BlogPreviewCard";
import type { BlogPreview } from "./BlogPreviewType.ts";
import photoURL from "./assets/images/image-avatar.webp";

function App() {
	const blogPreview: BlogPreview = {
		title: "HTML & CSS foundations",
		author: "Greg Hooper",
		photoURL: photoURL,
		description:
			"These languages are the backbone of every website, defining structure, content, and presentation.",
		tag: "Learning",
		date: "21 Dec 2023",
	};

	return (
		<div className="bg-background-color h-screen flex justify-center items-center">
			<BlogPreviewCard blogPreview={blogPreview} />
		</div>
	);
}

export default App;

export default function Author({
	imgURL,
	name,
}: {
	imgURL: string;
	name: string;
}) {
	return (
		<div className="flex items-center gap-3">
			<img className="w-8 h-8" src={imgURL} alt="Author avatar" />
			<p className="text-preset-3-bold text-gray-950">{name}</p>
		</div>
	);
}

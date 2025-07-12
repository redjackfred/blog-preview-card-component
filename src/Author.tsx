export default function Author({
	imgURL,
	name,
}: {
	imgURL: string;
	name: string;
}) {
	return (
		<>
			<img src={imgURL} alt="Author avatar" />
			<p>{name}</p>
		</>
	);
}

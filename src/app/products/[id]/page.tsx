export async function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }]; // Pre-render pages for products
}


export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params;

	return (
		<h1>Product {id} details rendered at {new Date().toLocaleTimeString()}</h1>
	);
}

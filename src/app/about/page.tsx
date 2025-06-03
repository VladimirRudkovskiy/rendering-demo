import { cookies } from "next/headers"

// in Next.js dynamic functions are: cookies(), headers(), connection(), draftMode(), searchParams prop, after()

export default async function AboutPage() {

	const cookieStore = await cookies();
	const theme = cookieStore.get('theme');
	console.log(theme);
	return <h1>About page {new Date().toLocaleTimeString()}</h1>
}

import { serverSideFunction } from "@/utils/server-utils"
import { ImageSlider } from "../components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";


export default function ServerRoutePage() {
	// const clientResult = clientSideFunction(); //will not work in server route

	const result = serverSideFunction();
	return (
		<>
			<h1>Server Route {result}</h1>
			{/* <h1>{clientResult}</h1> */}
			<ImageSlider />
		</>
	)
}

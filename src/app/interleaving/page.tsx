import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeavingPage() {
	return (
		<>
			<h1>Interleaving page</h1>
			<ClientComponentOne>
				<ServerComponentOne />
			</ClientComponentOne>
			
		</>
	)
}
 

//you can nest all the client/server components in each other
//you cant nest server components inside client components because all components will automatically become client components. Instead of nesting server in client compomnnent, pass it through the props

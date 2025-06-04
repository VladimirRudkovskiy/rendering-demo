import fs from 'fs'; 
import { ClientComponentOne } from './client-component-one';



export const ServerComponentOne = () => {
	fs.readFileSync('src/components/server-component-One.tsx', 'utf8');

	return (
		<>
			<h1>Server component one</h1>
		</>
	)
};


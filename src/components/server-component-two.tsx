import fs from 'fs'; 

export const ServerComponentTwo = () => {
	fs.readFileSync('src/components/server-component-two.tsx', 'utf8');

	return (
		<h1>Server component Two</h1>
	)
};


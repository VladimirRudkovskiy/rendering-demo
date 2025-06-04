'use client'

import { useState } from "react";

export const ClientComponentTwo = () => {
	const [name, setName] = useState('Batman')

	return (
		<h1>Client component two</h1>
	);
}

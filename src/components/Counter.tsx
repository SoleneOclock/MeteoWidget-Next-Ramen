"use client";

import { useState } from "react";

export default function Counter() {
	const [nbClick, setNbClicks] = useState(0);
	// ce console.log va etre affiché dans la console du navigateur car on est dans un Client component -> car on a ajouté en haut du fichier la ligne : "use client";
	// (à l'inverse des Server components qui eux sont rendus coté serveur)
	// dès qu'on veut gerer une interaction client on fait un client component
	console.log("render de Counter");

	return (
		<button
			type="button"
			onClick={() => {
				setNbClicks(nbClick + 1);
			}}
		>
			❤️ {nbClick}
		</button>
	);
}

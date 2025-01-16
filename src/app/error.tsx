"use client";

// ce composant sera automatiquement renvoyé au client si y'a une erreur qui est envoyée n'importe ou dans le code executé coté server
// l'erreur ça peut etre plein d'erreus possible, une erreur de fetch, une erreur ....

export default function MyError({ error }: { error: unknown }) {
	console.log(error);
	return (
		<div>
			<h2>Something went wrong!</h2>
		</div>
	);
}

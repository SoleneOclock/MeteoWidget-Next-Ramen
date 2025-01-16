// ce composant est rendu coté server (c'est un server component), c'est a dire qu'il est executé sur le serveur pour fabriquer la page html et ensuite la page html non vide est envoyé au client : SSR

// cette page sera rendu si l'URL c'est "/"

import MeteoWidget from "@/components/MeteoWidget";

export default function Home() {
	// attention ce console.log sera lisible dans le terminal coté serveur et non pas dans la console du navigateur comme pour un client component
	console.log("render du composant Home");

	return (
		// p-4 = padding de 1rem
		<div className="flex gap-4 justify-center flex-wrap">
			<MeteoWidget city="Paris" />
			<MeteoWidget city="Nancy" />
			<MeteoWidget city="Dijon" />
			<MeteoWidget city="Caen" />
			<MeteoWidget city="La Rochelle" />
			<MeteoWidget city="Gap" />
		</div>
	);
}

export default function Title({
	level,
	children,
}: {
	level: number;
	// children contiendra ce qui se trouve entre la balise ouvrante et fermante
	// pour <Title>Meteo</Title> -> ici children vaut Meteo
	// mais ça peut etre un element, un tableau d'elements
	// react nous fournit un type pour Children
	children: React.ReactNode;
}) {
	return (
		<h1
			className={`text-sky-100 font-bold text-3xl mb-4 text-center ${level === 1 ? "text-2xl" : "text-xl"}`}
		>
			{children}
		</h1>
	);
}

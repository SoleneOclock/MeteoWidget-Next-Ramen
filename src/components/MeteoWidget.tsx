import Link from "next/link";
import Counter from "./Counter";
import Title from "./Title";

interface MeteoWidgetProps {
	city: string;
}

// un server component peut etre asynchrone : il peut attendre le resultat d'un fetch
export default async function MeteoWidget({ city }: MeteoWidgetProps) {
	// on veut fetch l'API :
	// https://api.openweathermap.org/data/2.5/weather?q=paris&appid=47840f4f526d9cc69b4b575c52495860&units=metric
	// pour recup la temperature de la city reçue en props
	// ici on peut fetch direct les données et s'en servir dans le render
	// on est coté serveur on fetch les données on les attend et dès qu'on les as on les utilisent dans l'unique render coté serveur et ensuite le code est envoyé au client

	// on recupere la clé depuis le fichier env.local qui n'est pas commité comme ça ma clé ne traine pas sur github
	const apiKeyFromEnvFile = process.env.KEY_API;

	// on va chercher l'url de l'API dans le fichier env qui correspond à notre nevironnement
	// - si on est en dev on va chercher dans .env.developpement
	// - si on est en prod on va chercher dans .env.production
	const apiUrl = process.env.API_URL;

	const response = await fetch(
		`${apiUrl}/weather?q=${city}&appid=${apiKeyFromEnvFile}&units=metric&lang=fr`,
	);
	const data = await response.json();
	console.log(data.main.temp);

	return (
		<Link
			href={`/meteo/${city}`}
			className="border p-4 rounded-lg bg-gray-50/30 w-2/3 md:w-1/3 hover:bg-gray-50/50 flex items-center"
		>
			<img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].main}
			/>
			<div>
				<Title level={2}>{city}</Title>
				<div className="text-2xl font-bold">{data.main.temp} °C</div>
			</div>
			<Counter />
		</Link>
	);
}

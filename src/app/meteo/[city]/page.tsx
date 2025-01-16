// cette page va etre rendue si l'url c'est /meteo/nimportequelleville
// /meteo/paris comment je recupere Paris pour savoir quelle ville afficher
// avec React router on avait le hook params
// la valeur du segment dynamique est automatiquement envoyée dans une props qui s'apelle params qui est une promesse donc on doit await pour avoir les params

import type { WeatherResponse } from "@/@types/weather";
import Title from "@/components/Title";

export default async function City({
	params,
}: { params: Promise<{ city: string }> }) {
	const { city } = await params;

	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47840f4f526d9cc69b4b575c52495860&units=metric&lang=fr`,
	);
	const data = (await response.json()) as WeatherResponse;
	console.log(data.main.temp);

	return (
		<div>
			<Title level={2}>{city}</Title>
			<div className="text-2xl font-bold">{data.main.temp} °C</div>
			<img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].main}
			/>
			<div>
				{data.weather[0].main} {data.weather[0].description}
			</div>
		</div>
	);
}

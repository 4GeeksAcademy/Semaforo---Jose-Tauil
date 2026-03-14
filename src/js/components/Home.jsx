import React, { useState } from "react";
export function Home() {

	const [color, setColor] = useState(null);

	return (
		<div className="box">
			<div className={"red " + (color === "red" ? "glow" : "")}
				onClick={() => setColor("red")}
			></div>

			<div className={"yellow " + (color === "yellow" ? "glow" : "")}
				onClick={() => setColor("yellow")}
			></div>


			<div className={"green " + (color === "green" ? "glow" : "")}
				onClick={() => setColor("green")}
			></div>
		</div >
	);
}
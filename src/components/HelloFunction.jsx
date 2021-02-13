import React, {useState} from "react";

export const FeedF = () => {
	const [name, setName] = useState("pege");
	return (
		<div>
			<p>Hello {name}!</p>
			<button onClick={() => setName("bambang")}>
				Ganti nama jadi bambang
			</button>
		</div>
	);
};

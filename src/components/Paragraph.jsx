import React from "react";

const Paragraph = ({ title, content }) => {
	return (
		<>
			<h1>{title}</h1>
			<p>{content}</p>
		</>
	);
};

export default Paragraph;

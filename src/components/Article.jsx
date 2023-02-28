import React from "react";

const Article = ({ title, description, img }) => {
	return (
		<article className="article-item">
			<h2>{title}</h2>
			<p>
				<img src={img} alt="" />
				{description}
			</p>
		</article>
	);
};

export default Article;

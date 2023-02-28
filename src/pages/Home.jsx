import React, { useRef } from "react";
import Article from "../components/Article";
import Footer from "./../components/Footer";
import Paragraph from "./../components/Paragraph";

const intro = {
	title: "Lorem ipsum dolor sit asmet?",
	content:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.",
};

const products = {
	title: "Lorem ipsum dolor sit amet",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
};

const Home = () => {
	return (
		<>
			<div className="container-logo">
				<img src="./logoNCC.png" alt="" />
			</div>
			<section className="container container-paragraph">
				<Paragraph title={intro.title} content={intro.content} />
			</section>

			<section className="container container-article">
				<Article
					title={products.title}
					description={products.description}
					img={"./css-icon.png"}
				/>
				<Article
					title={products.title}
					description={products.description}
					img={"./html-icon.png"}
				/>
				<Article
					title={products.title}
					description={products.description}
					img={"./url-icon.png"}
				/>
			</section>
			<Footer />
		</>
	);
};

export default Home;

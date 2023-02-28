import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavLeft from "./../components/NavLeft";

const MainLayout = () => {
	const [isNav, setIsNav] = React.useState(true);
	const navRef = React.useRef();
	const handleNavLeft = () => {
		setIsNav(!isNav);
	};

	React.useEffect(() => {
		if (window.screen.width < 769) {
			setIsNav(false);
		}
		const handleClickOutSide = (e) => {
			if (
				navRef.current &&
				!navRef.current.contains(e.target) &&
				!e.target.matches(".fa-bars")
			) {
				setIsNav(false);
			}
		};
		if (window.screen.width < 769) {
			document.addEventListener("click", handleClickOutSide);
		}
		return () => {
			document.removeEventListener("click", handleClickOutSide);
		};
	}, []);

	return (
		<div className="main-layout">
			<nav onClick={handleNavLeft} className="nav-logo">
				<i className="fa-solid fa-bars"></i>
			</nav>
			<NavLeft isNav={isNav} ref={navRef} />
			<div className="nav-fake"></div>
			<div className="container-content">
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;

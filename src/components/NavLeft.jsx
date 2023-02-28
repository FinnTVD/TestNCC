import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const NavLeft = forwardRef((props, ref) => {
	return (
		<div
			className="nav-left"
			style={{ display: props.isNav ? "block" : "none" }}
			ref={ref}
		>
			<ul>
				<NavLink
					style={({ isActive }) => ({
						backgroundColor: isActive ? "#5c5c5c" : "#191718",
					})}
					to="/"
				>
					<li>Home</li>
				</NavLink>
				<NavLink
					to="/services"
					style={({ isActive }) => ({
						backgroundColor: isActive ? "#5c5c5c" : "#191718",
					})}
				>
					<li>Services</li>
				</NavLink>
				<NavLink
					to="/news"
					style={({ isActive }) => ({
						backgroundColor: isActive ? "#5c5c5c" : "#191718",
					})}
				>
					<li>News</li>
				</NavLink>
				<NavLink
					to="/blog"
					style={({ isActive }) => ({
						backgroundColor: isActive ? "#5c5c5c" : "#191718",
					})}
				>
					<li>Blog</li>
				</NavLink>
				<NavLink
					to="/contact"
					style={({ isActive }) => ({
						backgroundColor: isActive ? "#5c5c5c" : "#191718",
					})}
				>
					<li>Contact</li>
				</NavLink>
			</ul>
		</div>
	);
});

export default NavLeft;

import React from "react";
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
	FaGithubSquare,
} from "react-icons/fa";
import "./styles.css";

function Footer() {
	return (
		<div className="footer">
			<a href="https://twitter.com/Sdanisjb" target="_blank">
				<FaTwitterSquare className="footer-icon" />
			</a>{" "}
			<a
				href="https://www.facebook.com/sandrodaniel.caceresolave"
				target="_blank"
			>
				<FaFacebookSquare className="footer-icon" />
			</a>{" "}
			<a href="https://www.instagram.com/sdani_sjb/?hl=es" target="_blank">
				<FaInstagramSquare className="footer-icon" />
			</a>{" "}
			<a href="https://github.com/Sdanisjb" target="_blank">
				<FaGithubSquare className="footer-icon" />
			</a>
		</div>
	);
}

export default Footer;

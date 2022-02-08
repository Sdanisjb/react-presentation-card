import React from "react";
import me from "./images/me.jpeg";
import "./styles.css";
import { HiMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";

function Info() {
	return (
		<>
			<img className="profile-picture" src={me} alt="Sandro Caceres" />
			<div className="info">
				<p className="info-name">Sandro Cáceres</p>
				<p className="info-job">Frontend Developer</p>
				<p className="info-email">sandro.caceres.olave@gmail.com</p>
			</div>
			<div className="contact-buttons">
				<button className="email-btn">
					<HiMail />
					<p>Email</p>
				</button>
				<button className="linkedin-btn">
					<BsLinkedin />
					<p>LinkedIn</p>
				</button>
			</div>
		</>
	);
}

export default Info;

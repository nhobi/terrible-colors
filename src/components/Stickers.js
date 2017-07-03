import React, { Component } from "react";
import { Link } from "react-router-dom";
import images from "../config/images";

class Stickers extends Component {
	render() {
		return (
			<div
				style={{
					backgroundImage: `url(${images.stickers})`,
					height: "100vh",
					padding: "0 2em",
					backgroundPosition: "center center",
					boxSixing: "border-box",
					position: "relative",
					backgroundSize: "cover"
				}}
			>
				<div id="mc_embed_signup">
					<form
						action="//natehobi.us12.list-manage.com/subscribe/post?u=4c14fe8aea708ebfb457be2c2&amp;id=8c80303457"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						className="validate"
						target="_blank"
						noValidate
					>
						<div id="mc_embed_signup_scroll">
							<label
								htmlFor="mce-EMAIL"
								style={{ lineHeight: 1.5 }}
							>
								get notified when stickers are avalible
							</label>
							<input
								type="email"
								name="EMAIL"
								className="email"
								id="mce-EMAIL"
								placeholder="email address"
								required
							/>
							<div
								style={{
									position: "absolute",
									left: "-5000px"
								}}
								aria-hidden="true"
							>
								<input
									type="text"
									name="b_4c14fe8aea708ebfb457be2c2_8c80303457"
									value=""
									tabIndex="-1"
								/>
							</div>
							<div className="clear">
								<input
									type="submit"
									value="Subscribe"
									name="subscribe"
									id="mc-embedded-subscribe"
									className="button"
								/>
							</div>
						</div>
					</form>
				</div>
				<div
					style={{
						position: "absolute",
						bottom: 20,
						right: 0,
						left: 0,
						textAlign: "center"
					}}
				>
					<Link to="/">
						back to terrible colors
					</Link>
				</div>

			</div>
		);
	}
}

export default Stickers;

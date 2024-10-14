import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { div } from "three/webgpu";

const Clients = () => {
	return (
		<div className="py-20" id="testimonials">
			<h1 className="heading">
				Kind Words From Satisfied Clients
				<span className="text-purple"> Satisfied Clients</span>
			</h1>
			<div className="flex flex-col items-center max-lg:mt-10 ">
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 ">
					{companies.map(({ id, name, img, nameImg }) => (
						<div
							key={id}
							className="flex md:max-w-60 max-w-32 gap-2"
						>
							<img src={img} alt={name} className="md:w-10 w-5" />
							<img
								src={nameImg}
								alt={name}
								className="md:w-24 w-20"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;

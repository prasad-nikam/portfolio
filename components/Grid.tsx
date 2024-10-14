import react from "react";
import { gridItems } from "../data/index";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
const Grid = () => {
	return (
		<section id="about" className="mb-4">
			<BentoGrid>
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						imgClassName,
						img,
						titleClassName,
						spareImg,
					}) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							img={img}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};
export default Grid;

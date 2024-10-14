import react from "react";

const MagicButton = ({
	title,
	icon,
	position,
	handleclick,
	otherclasses,
}: {
	title: String;
	icon: react.ReactNode;
	position?: String;
	handleclick?: () => void;
	otherclasses?: String;
}) => {
	return (
		<div>
			<button
				className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-1 mt-2"
				onClick={handleclick}
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span
					className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherclasses}`}
				>
					{title} {icon}
				</span>
			</button>
		</div>
	);
};

export default MagicButton;

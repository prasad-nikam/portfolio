"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { pass } from "three/webgpu";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[9rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	img,
	imgClassName,
	titleClassName,
	spareImg,
	id,
}: {
	id?: Number;
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const copyEmailToClipboard = () => {
		if (navigator.clipboard) {
			// Try using the clipboard API
			navigator.clipboard
				.writeText("nikamprasad52@gmail.com")
				.then(() => {
					setCopied(true);
				})
				.catch((err: Error) => {
					console.error("Clipboard API failed: ", err);
					fallbackCopyTextToClipboard("nikamprasad52@gmail.com");
				});
		} else {
			// Fallback if the Clipboard API is not available
			fallbackCopyTextToClipboard("nikamprasad52@gmail.com");
		}
	};

	const fallbackCopyTextToClipboard = (text: string) => {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed"; // Avoid scrolling to bottom
		textArea.style.left = "-9999px"; // Hide the text area off-screen
		document.body.appendChild(textArea);
		textArea.select();

		try {
			document.execCommand("copy");
			setCopied(true);
		} catch (err) {
			console.error("Fallback: Could not copy text: ", err);
		}
		document.body.removeChild(textArea);
	};
	// ========================================================================
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		copyEmailToClipboard();
	};
	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:border-white/[0.1] border border-transparent justify-between flex flex-col space-y-4 z-10",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<div
				className={`${
					id === 6 && "flex justify-center items-center"
				} h-full relative`}
			>
				{/* ============================================================== */}
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(
								imgClassName,
								"object-cover, object-center"
							)}
						/>
					)}
				</div>
				{/* ============================================================== */}
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					}`}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className={
								"object-cover, object-center w-full h-full"
							}
						/>
					)}
				</div>
				{/* ============================================================== */}
				{id === 6 && (
					<BackgroundGradientAnimation>
						<div className="absolute z-50 flex items-center justify-center text-white font-bold" />
					</BackgroundGradientAnimation>
				)}
				{/* ============================================================== */}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight text-sm text-[#c1c2d3]md:text-xs lg:text-base z-99">
						{description}
					</div>
					<div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
						{title}
					</div>
					{/* ============================================================== */}
					{id === 2 && (
						<>
							<GlobeDemo />
						</>
					)}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							<div className="flex flex-col gap-3 lg:gap-6">
								{["NextJS", "FastAPI", "PostgreSQL"].map(
									(item) => (
										<span
											key={item}
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
										>
											{item}
										</span>
									)
								)}
								<span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
							</div>

							<div className="flex flex-col gap-3 lg:gap-6">
								<span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
								{["Frappe", "Typescript", "MERN"].map(
									(item) => (
										<span
											key={item}
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
										>
											{item}
										</span>
									)
								)}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-2 relative">
							<div className="absolute -bottom-5 right-0">
								<Lottie
									options={{
										loop: copied,
										autoplay: copied,
										animationData,
										rendererSettings: {
											preserveAspectRatio:
												"xMidYmid slice",
										},
									}}
								/>
							</div>
							<MagicButton
								title={
									copied ? "Email copied" : "copy my email"
								}
								icon={<IoCopyOutline />}
								position="left"
								otherclasses="!bg-[#161a31]"
								handleclick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export const SomethingWentWrong = () => {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				backgroundColor: "#F45E5E",
				fontFamily: "Inter",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					fontSize: 32,
				}}
			>
				No valid delegate address provided.
			</div>
		</div>
	);
};
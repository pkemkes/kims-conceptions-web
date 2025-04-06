import { Box } from "@mui/material";
import Logo from "../assets/Logo.png";

export const LandingPage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh", // Full viewport height
			}}
		>
			<img
				src={Logo}
				width={500}
				style={{
					maxWidth: "90%", // Ensures responsiveness
				}}
				alt="Kim S. Conceptions Logo"
			/>
		</Box>
	);
};

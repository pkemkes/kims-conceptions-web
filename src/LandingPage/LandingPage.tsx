import { Box, Typography, Link } from "@mui/material";
import Logo from "../assets/Logo.png";

export const LandingPage = () => {
	return (
		<>
			{/* Banner */}
			<Box
				sx={{
					backgroundColor: "#582895",
					color: "white",
					textAlign: "center",
					padding: "16px",
					marginTop: "50px",
					zIndex: 10,
					position: "relative",
				}}
			>
				<Typography
					variant="h5"
					sx={{
						fontFamily: "Roboto, sans-serif",
						fontFeatureSettings: '"liga" 1, "clig" 1',
						fontSize: "1.75rem", // Between h4 (2.125rem) and h5 (1.5rem)
					}}
				>
					Diese Seite befindet sich gerade im Aufbau
				</Typography>
			</Box>
			
			{/* Main content */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "calc(100vh - 200px)", // Adjusted height to account for banner
					gap: "32px",
				}}
			>
				<img
					src={Logo}
					width={370}
					style={{
						maxWidth: "90%", // Ensures responsiveness
					}}
					alt="Kim S. Conceptions Logo"
				/>
				
				{/* Text below image */}
				<Box
					sx={{
						textAlign: "center",
						color: "#582895",
					}}
				>
					<Typography
						variant="h6"
						sx={{
							fontFamily: "Roboto, sans-serif",
							fontFeatureSettings: '"liga" 1, "clig" 1',
							marginBottom: "8px",
							fontSize: "1.5rem", 
						}}
					>
						<Box component="span" sx={{ fontWeight: "bold" }}>
							Kim&nbsp;S.&nbsp;Conceptions
						</Box>
						<Box component="span" sx={{ fontWeight: "bold" }}>
							&nbsp;• Grafikdesign&nbsp;und Gestaltungskonzepte
						</Box>
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontFamily: "Roboto, sans-serif",
							fontFeatureSettings: '"liga" 1, "clig" 1',
							fontSize: "1.5rem", 
						}}
					>
						Kontakt&nbsp;an&nbsp;Kim&nbsp;S.&nbsp;Kemkes: <Link 
							href="mailto:kim@kims-conceptions.de" 
							sx={{ 
								color: "#582895", 
								"&:hover": {
									textDecoration: "underline"
								}
							}}
						>
							kim@kims‑conceptions.de
						</Link>
					</Typography>
				</Box>
			</Box>
		</>
	);
};

import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { theme } from "./theme";
import { LandingPage } from "./LandingPage/LandingPage";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

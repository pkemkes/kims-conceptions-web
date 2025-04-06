import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

export const theme = createTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: lightBlue,
				secondary: {
					main: "#000000",
				},
			},
		},
	},
});

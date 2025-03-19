import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: { mode: darkMode ? "dark" : "light" },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box position="absolute" top={10} right={20} zIndex={1000}>
                    <IconButton
                        onClick={() => setDarkMode((prev) => !prev)}
                        sx={{
                            backgroundColor: darkMode ? "grey.800" : "grey.200",
                            color: darkMode ? "yellow" : "black",
                            "&:hover": { backgroundColor: darkMode ? "grey.700" : "grey.300" },
                        }}
                    >
                        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Box>

                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

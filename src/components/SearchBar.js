import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
                width: "100%",
                maxWidth: 500,
                margin: "auto",
                mb: 4
            }}
        >
            <TextField
                label="Search Mentor by Username"
                variant="outlined"
                size="small"
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ height: "40px" }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    );
}

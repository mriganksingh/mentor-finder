import { MenuItem, Select, Button, Box } from "@mui/material";

export default function Pagination({ page, setPage, perPage, setPerPage }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 4 }}>
            <Select
                value={perPage}
                onChange={(e) => setPerPage(e.target.value)}
                displayEmpty
                size="small"
                sx={{ minWidth: 120 }}
            >
                {[5, 10, 20].map((size) => (
                    <MenuItem key={size} value={size}>
                        {size} per page
                    </MenuItem>
                ))}
            </Select>

            <Button
                variant="outlined"
                size="small"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
            >
                Previous
            </Button>

            <Button
                variant="contained"
                size="small"
                onClick={() => setPage((prev) => prev + 1)}
            >
                Next
            </Button>
        </Box>
    );
}

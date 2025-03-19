import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function MentorCard({ mentor }) {
    const router = useRouter();

    return (
        <Card sx={{ maxWidth: 350, m: 2, textAlign: "center" }}>
            <CardMedia
                component="img"
                height="140"
                image={mentor.avatar_url}
                alt={mentor.login}
            />
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                    }}
                >
                    {mentor.login}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 1,
                        fontSize: "0.75rem",
                        padding: { xs: "5px 10px", sm: "6px 12px" },
                    }}
                    onClick={() => router.push(`/mentor/${mentor.login}`)}
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}

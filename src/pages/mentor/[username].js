import { useRouter } from "next/router";
import { Container, Typography, Avatar, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MentorDetails({ mentor }) {
    const router = useRouter();
    if (!mentor) return <Typography color="error">Mentor not found</Typography>;
    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Button
                startIcon={<ArrowBackIcon />}
                sx={{ position: "absolute", top: 20, left: 20 }}
                onClick={() => router.back()}
            >
                Back
            </Button>
            <Avatar src={mentor.avatar_url} sx={{ width: 100, height: 100, mx: "auto", mt: 5 }} />
            <Typography variant="h4" sx={{ mt: 2 }}>{mentor.login}</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>Followers: {mentor.followers}</Typography>
            <Typography variant="body1">Repositories: {mentor.public_repos}</Typography>
            <Box sx={{ mt: 3, p: 2, border: "1px solid gray", borderRadius: 2 }}>
                <Typography variant="h6">Available Slots</Typography>
                <Typography>Monday: 10 AM - 12 PM</Typography>
                <Typography>Wednesday: 2 PM - 4 PM</Typography>
                <Typography>Friday: 5 PM - 7 PM</Typography>
            </Box>
        </Container>
    );
}

export async function getServerSideProps(context) {
    const { username } = context.params;
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("Failed to fetch mentor data");
        const mentor = await res.json();
        return { props: { mentor } };
    } catch (error) {
        console.error(error);
        return { props: { mentor: null } };
    }
}

import { CircularProgress, Grid, Typography } from "@mui/material";
import MentorCard from "./MentorCard";

export default function MentorList({ mentors, isLoading, isError }) {
    if (isLoading) return <CircularProgress />;
    if (isError || !mentors.length) return <Typography>No mentors found</Typography>;

    return (
        <Grid container justifyContent="center">
            {mentors.map((mentor) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={mentor.id} display="flex" justifyContent="center">
                    <MentorCard mentor={mentor} />
                </Grid>
            ))}
        </Grid>
    );
}

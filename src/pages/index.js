import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Typography, Box } from "@mui/material";
import MentorList from "../components/MentorList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

async function fetchMentors({ queryKey }) {
    const [, page, perPage, search] = queryKey;
    const url = search
        ? `https://api.github.com/users/${search}`
        : `https://api.github.com/users?since=${(page - 1) * perPage}&per_page=${perPage}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch mentors");
    return search ? [await res.json()] : await res.json();
}

export default function Home({ initialMentors }) {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [search, setSearch] = useState("");

    const { data: mentors = [], isLoading, isError } = useQuery({
        queryKey: ["mentors", page, perPage, search],
        queryFn: fetchMentors,
        initialData: initialMentors,
    });

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
                    Mentor Finder
                </Typography>
                <SearchBar onSearch={setSearch} />
            </Box>

            <MentorList mentors={mentors} isLoading={isLoading} isError={isError} />
            <Pagination page={page} setPage={setPage} perPage={perPage} setPerPage={setPerPage} />
        </Container>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://api.github.com/users?per_page=10");
    const initialMentors = await res.json();
    return {
        props: { initialMentors },
        revalidate: 86400,
    };
}

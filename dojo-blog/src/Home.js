import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"Blog List "} />}
            {blogs && Object.keys(blogs).length == 0 && (
                <h2 className="no-blogs">Nothing to see here :(</h2>
            )}
        </div>
    );
};

export default Home;

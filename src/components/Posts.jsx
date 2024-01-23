import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../redux/actions";
import { Modal, Button } from "react-bootstrap";
import PostsRandom from "./PostsRandom";


const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.FetchPosts);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNDk1MTYwMGJlMTAwMTgzYTg2YTUiLCJpYXQiOjE3MDU5MjA4NDksImV4cCI6MTcwNzEzMDQ0OX0.lWpP-DosTePIjyhJO-aug1d5RJPA-hzq5ehW8RJ5Kt4";
        dispatch(fetchPosts(token));
    }, [dispatch]);

    if (loading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    return (

        <div>
            <h1>POSTS:</h1>
            <form>
                {/* Menu a tendina per la selezione della frutta */}
                <label htmlFor="fruits">Seleziona una frutta:</label>
                <select id="fruits" name="fruits" >
                    <option value="Friends">Friends</option>
                    <option value="Esplora">Esplora</option>
                    <option value="Personal">I tuoi posts</option>
                </select>

                {/* Pulsante di invio del modulo */}
                <button type="submit">Invia</button>
            </form>
            <PostsRandom posts={posts} />
        </div>
    );
};

export default Posts;
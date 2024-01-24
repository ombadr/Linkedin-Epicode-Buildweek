const PostsRandom = ({ posts }) => {
    const renderRandomPost = (postsNumber) => {
        const randomPosts = [];
        if (posts && posts.length >= postsNumber) {
            const availableIndices = Array.from({ length: posts.length }, (_, index) => index);

            for (let i = 0; i < postsNumber; i++) {
                const randomIndex = Math.floor(Math.random() * availableIndices.length);
                const selectedIndex = availableIndices[randomIndex];
                const randomPost = posts[selectedIndex];

                if (randomPost.text !== "") {
                    const formattedDate = new Date(randomPost.updatedAt).toLocaleDateString();
                    randomPosts.push(
                        <div key={i} className="Suggestedposts d-flex p-4 m-3 border-bottom border-secondary">
                            <div>
                                <h4 className="fw-bold mb-4">{randomPost.user.username}</h4>
                                <p className="">{randomPost.text}</p>
                                <p className="">{formattedDate} </p>
                            </div>
                        </div>
                    );
                    availableIndices.splice(randomIndex, 1);
                } else {
                    i--;
                }
            }
        }
        return randomPosts;
    };

    return (
        <div>
            {renderRandomPost(10)} {/* Change the number as needed */}
        </div>
    );
};

export default PostsRandom;

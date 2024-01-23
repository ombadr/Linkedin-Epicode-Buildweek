import { GrLike } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { RiRepeatLine } from "react-icons/ri";
import './PostsRandom.css';

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
                        <div key={i} className="Suggestedposts d-flex flex-column p-4 m-3 border-bottom border-secondary">
                            <div>
                                <h4 className="fw-bold mb-4">{randomPost.user.username}</h4>
                                <p className="">{randomPost.text}</p>
                                <p className="">{formattedDate} </p>
                            </div>
                            <div className="d-flex justify-content-around align-items-center mt-3 border-top">
                                <button className="mt-2 fs-5 btn btn-post">
                                    <GrLike size={30} className="me-2" />
                                    Like
                                </button>
                                <button className="mt-2 fs-5 btn btn-post">
                                    <FaRegCommentDots size={30} className="me-2" />
                                    Commenta
                                </button>
                                <button className="mt-2 fs-5 btn btn-post">
                                    <RiRepeatLine size={30} className="me-2" />
                                    Diffondi il post
                                </button>
                                <button className="mt-2 fs-5 btn btn-post">
                                    <IoIosSend size={30} className="me-2" />
                                    Invia
                                </button>
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
        <div className="bg-white border rounded mt-4">
            {renderRandomPost(10)} {/* Change the number as needed */}
        </div>
    );
};

export default PostsRandom;

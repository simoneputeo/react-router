import { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                const response = res.data;

                setPosts(response.posts || response);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div className="container py-4">
            <h1 className="mb-4">React Cooking Posts</h1>

            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={post.image}
                                className="card-img-top"
                                alt={post.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">
                                    <strong>Tags:</strong> {post.tags ? post.tags.join(', ') : 'No Tags listed'}
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Ricetta: {post.content}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;  // Moved outside component
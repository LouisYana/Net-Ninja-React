import { Link, useHistory } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    const history = useHistory();

    const handleClick = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            //     history.push("/");
            window.location.reload();
        });
    };

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    <button
                        style={{ float: "right" }}
                        onClick={() => handleClick(blog.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;

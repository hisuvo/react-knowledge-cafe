import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

function Blogs(props) {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 border-2">
            <h2 className="text-2xl">Blogs: {blogs.length}</h2>
            {blogs.map(blog => <Blog blog={blog} />)}
        </div>
    );
}

export default Blogs;
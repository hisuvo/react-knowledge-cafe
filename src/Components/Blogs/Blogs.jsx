import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

function Blogs({ handleBookmark, handleMakeAsRead }) {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {blogs.map((blog, idx) => < Blog handleBookmark={() => handleBookmark(blog)} handleMakeAsRead={() => handleMakeAsRead(blog.read_time)} key={idx} blog={blog} />)}
        </div>
    );
}

export default Blogs;
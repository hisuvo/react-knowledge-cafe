/**
 * {
    "id": 1,
    "title": "Introduction to JavaScript",
    "cover_img": "https://example.com/images/js-intro.jpg",
    "admin_name": "John Doe",
    "admin_img": "https://example.com/images/admin-johndoe.jpg",
    "publish_date": "2023-01-15",
    "read_time": 5,
    "hysetag": [
        "JavaScript",
        "Programming",
        "Web Development"
    ]
}
 * 
 */
function Blog({ blog }) {
    const { id, title, cover_img, admin_name, admin_img, publish_date, read_time, hysetag } = blog
    return (
        <div className="p-4 my-8 space-y-4">
            <figure>
                <img className="rounded-md" src={cover_img} alt="" />
            </figure>

            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <img src={admin_img} alt="admineImage" />
                    <div>
                        <h3 className="text-2xl font-semibold">{admin_name}</h3>
                        <h4>{publish_date}</h4>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold">{read_time} min read</h2>
            </div>

            <h2 className="text-4xl font-bold">{title}</h2>
        </div>
    );
}

export default Blog;
import { CiBookmark } from "react-icons/ci";

function Blog({ blog }) {
    const { id, title, cover_img, admin_name, admin_img, publish_date, read_time, hysetag } = blog

    return (
        <div key={id} className="p-4 mb-8">
            <figure className="mb-8">
                <img className="rounded-md" src={cover_img} alt="" />
            </figure>

            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    <img src={admin_img} alt="admineImage" />
                    <div>
                        <h3 className="text-2xl font-semibold">{admin_name}</h3>
                        <h4 className="text-base font-semibold text-gray-400">{publish_date}</h4>
                    </div>
                </div>
                <div className="space-x-2">
                    <span className="text-xl font-medium text-gray-400">{read_time} min read </span>
                    <button className="text-xl"><CiBookmark /></button>
                </div>
            </div>

            <h2 className="text-4xl font-bold mb-4">{title}</h2>

            {hysetag.map((item, indx) => <span className="text-xl" key={indx}><a className="mr-2 text-xl font-medium text-gray-400">#{item}</a></span>)}
        </div>
    );
}

export default Blog;
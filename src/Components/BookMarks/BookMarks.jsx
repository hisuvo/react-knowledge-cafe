import Bookmark from "../Bookmark/Bookmark";

function BookMarks({ bookmarks, readingTime }) {

    return (
        <div className="md:w-1/3">
            <div className="p-4 mt-4 bg-gray-200 rounded-lg">
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-[#6047EC] p-4 border bg-purple-50 border-[#6047EC] rounded-md mb-4">
                        Spent time on read: {readingTime} min
                    </h2>

                    <h2 className="text-2xl font-bold ">
                        Bookmarks: {bookmarks.length}
                    </h2>

                </div>
                {bookmarks.map((bookmark, index) =>
                    <Bookmark key={index} bookmark={bookmark} />
                )}

            </div>
        </div>
    );
}

export default BookMarks;
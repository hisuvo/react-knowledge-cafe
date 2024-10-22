
function BookMarks({ bookmarks }) {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3 p-4 mt-4 bg-gray-200 rounded-lg">
            <h1 className="text-2xl font-bold mb-8">Bookmarks: {bookmarks.length}</h1>
            <div className="space-y-4">
                {bookmarks.map((bookmark, index) =>
                    <h3 className="p-4 text-lg font-semibold bg-white shadow-md rounded-md" key={index}>{bookmark.title}</h3>
                )}
            </div>
        </div>
    );
}

export default BookMarks;
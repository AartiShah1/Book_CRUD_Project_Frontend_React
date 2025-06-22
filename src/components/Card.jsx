import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <Link to={`/single/${book.id}`} className="block max-w-sm mx-auto">
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:text-gray-100 cursor-pointer w-64 h-70">
        {/* Fixed height and width: w-64 = 16rem, h-96 = 24rem */}
        <div
          className="h-20 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.tailkit.com/media/placeholders/photo-JgOeRuGD_Y4-800x400.jpg")',
          }}
        >
          <h2 className="text-white font-semibold text-sm text-center px-2 pt-10">
     Book
    </h2>
        
        </div>

        <div className="grow p-5 text-center pt-12 flex flex-col justify-between h-[calc(100%-10rem)]">
          {/* 10rem = 40 (image height) + 12 (avatar overlap offset) approx */}

          <div>
             <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              ${book.price}
            </p>
            
            <h3 className="mt-3 mb-1 text-lg font-semibold">{book.bookName}</h3>
           
            <p className="text-gray-700 dark:text-gray-300 mb-1">
          <span className="font-medium">Genre:</span> {book.bookGenre}
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-medium">Author:</span> {book.bookAuthor}
        </p>
          </div>

          {/* You can add more elements here, like buttons or ratings */}
        </div>
      </div>
    </Link>
  );
}

export default Card;

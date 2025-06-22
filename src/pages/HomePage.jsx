import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { AlignCenter } from "lucide-react";

function HomePage() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:4000/api/books')
    setBooks(response.data.datas);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <div>



      <Navbar />
 <h1 style={{ textAlign: 'center' }} className="text-2xl font-bold mt-6 mb-4 text-gray-800">
  Collection of Books
</h1>
      <div className="flex flex-wrap justify-start items-start gap-4 p-4">
       

{
        books.map((book) => (
          <Card book={book} key={book.id} />
        ))
}
      </div>
     

      {/* <button className="bg-green-400">Click</button>
<br/> */}

    </div>
  );
}



export default HomePage;
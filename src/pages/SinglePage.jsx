

import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function SinglePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/books/" + id);
      setBook(response.data.datas);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const deleteBook = async () => {
    try {
      const response = await axios.delete("http://localhost:4000/api/books/" + id);
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Failed to delete book");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>{book.bookName || "Loading..."}</h1>
        <p style={styles.detail}><strong>Price:</strong> ${book.price}</p>
        <p style={styles.detail}><strong>Genre:</strong> {book.bookGenre}</p>
        <div style={styles.buttonContainer}>
          <button style={{ ...styles.button, ...styles.deleteButton }} onClick={deleteBook}>
            Delete
          </button>
          <Link to={`/edit-page/${book.id}`} style={{ textDecoration: "none" }}>
            <button style={{ ...styles.button, ...styles.editButton }}>Edit</button>
          </Link>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#333",
  },
  detail: {
    fontSize: "1.1rem",
    marginBottom: "8px",
    color: "#555",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
  },
  editButton: {
    backgroundColor: "#3498db",
    color: "#fff",
  },
};

export default SinglePage;



// without css

// import {  Link, useNavigate, useParams } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import axios from "axios"
// import { useEffect, useState } from "react"
// import Button from "../components/Button"


// function SinglePage(){
//    const navigate =  useNavigate()
//     const {id} = useParams() // used to get the parameter of route ..
//     const [book,setBook] = useState({

    


//     })
//     const fetchBook = async ()=>{
//        const response = await axios.get("http://localhost:4000/api/books/" + id)
//        setBook(response.data.datas)// response.data.hello
//     }
//     useEffect(()=>{
//         fetchBook()
//     },[])

//     const deleteBook = async ()=>{
//         const response = await axios.delete("http://localhost:4000/api/books/" + id)
//         if(response.status === 200){
//             // home page ma navigation gardim
//             navigate("/")
//         }else{
//             alert("Something went wrong")
//         }
//         // console.log("Delete trigered vayo hai function ....")
//     }
//     return(
//         <>
//        <Navbar />
//         <h1>{book.bookName}</h1>
//         <p>{book.price}</p>
//         <p>{book.bookGenre}</p>
//         <button onClick={deleteBook}>Delete Me</button>
//         <Link to={`/edit-page/${book.id}`}><button>Edit Me</button></Link>
        
//         </>
//     )












 
// }
// export default SinglePage;
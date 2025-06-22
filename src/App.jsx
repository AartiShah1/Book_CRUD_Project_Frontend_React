import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EditPage from "./pages/EditPage"
import CreatePage from "./pages/CreatePage"
import SinglePage from "./pages/SinglePage"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
      

       <Route path="/edit-page/:id" element={<EditPage />} />
         <Route path="/create" element={<CreatePage />} />
        <Route path="/single/:id" element={<SinglePage />} />


      </Routes>
      </BrowserRouter>
      
  )
}

export default App

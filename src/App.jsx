import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import Layout from "./pages/Layout"
import SingleMovie from "./pages/SingleMovie"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<HomePage />} />
            <Route path='movies/:id' element={<SingleMovie />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

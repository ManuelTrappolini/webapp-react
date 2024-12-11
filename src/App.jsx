import HomePage from "./pages/Home"
import Layout from "./pages/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<HomePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

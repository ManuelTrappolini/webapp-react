import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import Layout from "./pages/Layout"
import SingleMovie from "./pages/SingleMovie"
import GlobalContext from "./context/GlobalContext"
import { useState } from "react"


function App() {

  const [loading, setLoading] = useState(false)
  const values = {
    loading,
    setLoading
  }

  return (
    <>
      <GlobalContext.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} >
              <Route path='/' element={<HomePage />} />
              <Route path='movies/:id' element={<SingleMovie />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App

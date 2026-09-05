import { useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx"
import { Home } from "./pages/Home/Home.jsx"
import { About } from "./pages/About/About.jsx"
import { Contact } from "./pages/Contact/Contact.jsx"
import { Favourites } from "./pages/Favourites/Favourites.jsx"
import { AnimePage } from "./pages/AnimePage/AnimePage.jsx"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/AnimePage/:id" element={<AnimePage />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Favourites" element={<Favourites />}></Route>
            </Route>
        </Routes>
    )
}

export default App

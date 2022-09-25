import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App(){
    const [mode, setMode] = React.useState(false)

    function toggleMode () {
        setMode((mode) => !mode)
        console.log("clickes")
    }

    return (
        <div className="container">
        <Navbar toggleDarkMode={toggleMode} darkMode={mode}/>
        <Main darkMode={mode} />
        </div>
    )
}
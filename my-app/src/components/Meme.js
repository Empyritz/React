import React from 'react';
import memesData from "../memesData"
import axios from "axios"

export default function Meme () {
    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemes, setAllMemes] = React.useState(memesData.data.memes)

    /* React.useEffect(()=> {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => setAllMemes(res.data.data.memes))
    }, []) */

    

    function handleChange (event) {
        const value = event.target.value
        const name = event.target.name
        console.log(allMemes)
        setMeme(({
            ...meme,
            [name]: value
        }))
    }

    function getMemeImage (){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url 
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    return (
    <main>
        <form className='form' >
            <input type="text" className='form--input' placeholder='Shut up' name="topText" value={meme.topText} onChange={handleChange}/>
            <input type="text" className='form--input' placeholder='and take my money' name="bottomText" value={meme.bottomText} onChange={handleChange}/>
            <button type="button" className='form--button' onClick={getMemeImage}>Get a new meme image</button>
            <div className='meme'>
                <img src={meme.randomImage} alt="mme" className='meme--image'/>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </form>
    </main>
        
    )
}
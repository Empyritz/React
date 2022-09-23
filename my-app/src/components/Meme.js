import React from 'react';
import memesData from "../memesData"

export default function Meme () {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    // const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage (){
        const memesArray = allMemeImages.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
    <main>
        <form className='form'>
            <input type="text" className='form--input' placeholder='Shut up'/>
            <input type="text" className='form--input' placeholder='and take my money'/>
            <button type="button" className='form--button' onClick={getMemeImage}>Get a new meme image</button>
            <figure className='meme--container'>
                <img src={meme.randomImagen} alt="mme" className='meme--image'/>
            </figure>
        </form>
    </main>
        
    )
}
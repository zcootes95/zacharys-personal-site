// src/App.js
import React, { ChangeEvent, FormEvent, useState } from 'react'

const AsciiArtScreen = () => {
    const [file, setFile] = useState<File | null>(null)
    const [asciiArt, setAsciiArt] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!file) return
        const formData = new FormData()
        formData.append('file', file)
        const response = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        setAsciiArt(data.ascii_art)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='file' accept='image/*' onChange={onChange} />
                <button type='submit'>Convert to ASCII</button>
            </form>
            <pre>{asciiArt}</pre>
        </div>
    )
}

export default AsciiArtScreen

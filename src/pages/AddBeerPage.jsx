import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(() => {
                setName("")
                setTagline("")
                setDescription("")
                setFirstBrewed("")
                setBrewersTips("")
                setAttenuationLevel(0)
                setContributedBy("")

                // Navigate to the `/` page
                navigate('/beers')
            })

        console.log("Submitted: ", newBeer)
    }


    return (
        <div className="AddBeer">
            <h2>Add a Beer</h2>

            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label>Tagline: </label>
                <input
                    type="text"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                />

                <label>Description: </label>
                <input
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <label>First brewed: </label>
                <input
                    type="text"
                    name="first_brewed"
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    value={firstBrewed}
                />

                <label>Brewers tips: </label>
                <input
                    type="text"
                    name="brewers_tips"
                    onChange={(e) => setBrewersTips(e.target.value)}
                    value={brewersTips}
                />

                <label>Attenuation level: </label>
                <input
                    type="number"
                    name="attenuation_level"
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                    value={attenuationLevel}
                />

                <label>Contributed by: </label>
                <input
                    type="text"
                    name="contributed_by"
                    onChange={(e) => setContributedBy(e.target.value)}
                    value={contributedBy}
                />

                <button type="submit">Add a Beer</button>
            </form>
        </div>
    )

}

export default AddBeerPage

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AllBeersPage() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    

    return (
        <div className="allBeers">
        {beers.map((beer) => {

            return (
            <div className="divBeer" key={beer._id}>
                <img src={beer.image_url}/>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p><b>Created by: </b>{beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>Want to know more?</Link>
            </div>
            )
        })}
        </div>
    )
}

export default AllBeersPage

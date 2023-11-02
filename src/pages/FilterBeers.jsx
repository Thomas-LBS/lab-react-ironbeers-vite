import { useState, useEffect } from "react"
import axios from "axios"

function FilterBeers() {
    const [searchBeers, setSearchBeers] = useState([])

    
    /* axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeers}`)
            .then((response) => {
                setSearchBeers(response.data)
            })
            .catch(err => console.log(err))*/
 

   

    return (
        <div className="divBeer filterBeer">            
            <form onSubmit="">
                <label>Search by:
                <input
                    type="text"
                    name="search"                
                    value=""
                    placeholder="Beer name..."
                /></label>
                <button type="submit">Search</button>
            </form>            
        </div>
    )
}

export default FilterBeers

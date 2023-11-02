import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

function BeerDetailsPage() {

  const { beerId } = useParams()

  const [beer, setBeer] = useState('')

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data)
      })
      .catch(err => console.log(err))
  }, [beerId])


  return (
    <main>
      <Link to="/beers"> ◀ Back</Link>
      {!beer && <h3>Beer not found!</h3>}


      {beer && (
        <div className='beerDetails'>
          <div className='image'>
            <img src={beer.image_url} />
          </div>
          <div className='headings'>
            <div>
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
            </div>

            <div>
              <h3>{beer.attenuation_level}</h3>
              <h2>{beer.first_brewed}</h2>              
            </div>
          </div>

            <div>
            <p>{beer.description}</p>
            <p><b>Created by: </b>{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default BeerDetailsPage

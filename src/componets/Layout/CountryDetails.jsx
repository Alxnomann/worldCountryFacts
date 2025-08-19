import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryindividualData } from '../../api/postApi'
import Loader from '../UI/Loader'
import { NavLink } from 'react-router-dom'

function CountryDetails() {
     const params=  useParams()
         const [country, setCountry] = useState([])
    const [isPending, startTransition] = useTransition()
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryindividualData(params.id);
      console.log(res);
      setCountry(res.data)
      
    });
  }, []);
  if(isPending) return <h1><Loader/></h1>
     console.log(params);
     
  return (
<section className='card country-details-card container'>
      <div className="container-card bg-white-box">
     {country.map((data)=>{
      return(
            
       
          <div className="country-image grid grid-two-cols">
            <img
              src={data.flags.svg}
              alt={data.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {data.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {data.name.nativeName.ara.common}
                  {/* {Object.keys(data.name.nativeName)
                    .map((key) => data.name.nativeName[key].common)
                    .join(", ")} */}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {data.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {data.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {data.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {data.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {data.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {data.currencies.TND.name
}
                  {/* {Object.keys(data.currencies)
                    .map((curElem) => data.currencies[curElem].name)
                    .join(", ")} */}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {data.languages.ara}
                  {/* {Object.keys(data.languages)
                    .map((key) => data.languages[key])
                    .join(", ")} */}
                </p>
              </div>
            </div>
          </div>
          
        )}
        
       )
       }
       <div className='country-card-backBtn'> 
<NavLink to="/country" className='backBtn' >
      <button>Go Back</button>
</NavLink>
       </div>
     
      </div>
      
</section>
)
}

export default CountryDetails
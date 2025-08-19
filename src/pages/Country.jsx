  import React, { useEffect,useState } from 'react'
  import { getCountryData } from '../api/postApi'
  import { useTransition } from 'react'
import Loader from '../componets/UI/Loader'
import CountryCard from '../componets/Layout/countryCard'
import SearchFilter from '../componets/UI/searchFilter'

  function Country() {
    const [countries, setCountries] = useState([])
    const [isPending, startTransition] = useTransition()
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState("all")
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res);
      setCountries(res.data)
      
    });
  }, []);
  if(isPending) return <h1><Loader/></h1>
  // console.log(search,filter);
  // Here the main logic of a search anf filter
const searchCountry=(country)=>{
  if(search){
    return country.name.common.toLowerCase().includes(search.toLowerCase())
  }
  return country;
}
const filterRegionCountry=(country)=>{
    if(filter === "all") return country;
    return country.region ===filter;}    
const filtercountry = countries.filter((country)=>searchCountry(country)&& filterRegionCountry(country));
  
    
    return (
     <section className='country-section'>
      <SearchFilter 
      search={search} 
      setSearch={setSearch} 
      filter={filter}
      setFilter={setFilter}
      />
         <ul className='grid grid-four-cols'>
           {
            filtercountry.map((country,index)=>{
              return <CountryCard key={index} country={country} />
            })
           }
         </ul>
     </section>
    )
  }

  export default Country
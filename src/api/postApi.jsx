import axios from "axios";
import React from 'react'

const api = axios.create({
      baseURL :"https://restcountries.com/v3.1"
});

// get method

export const getCountryData=()=>{
return api.get("/all?fields=name,population,region,capital,flags")
}

// HTTP Get Method for a individual Country name Display card


 export const getCountryindividualData=(name)=>{
return api.get( `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}
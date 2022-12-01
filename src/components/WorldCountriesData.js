import React, {useEffect, useState} from 'react';
import Header from './Header'
import axios from "axios";
const WorldCountriesData = () => {
    const [allCountriesData , setAllCountriesData] = useState([]);
    const [countriesData , setCountriesData] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');

    useEffect(()=>{
        fetchCountriesData();
    }, [])

    useEffect(()=>{
        searchCountry();
    },[searchTerm])

   const  fetchCountriesData =  ()=>{
        axios.get('https://restcountries.com/v2/all')
            .then((response)=>{
                const data =  response.data
                setCountriesData(data)
                setAllCountriesData(data)
            })

    }

    const searchCountry = () =>{
        axios.get('https://restcountries.com/v2/name/'+searchTerm)
         .then((response)=>{
            const data =  response.data
            setCountriesData(data)
        })
    }

   function  handleChange(e){
        const value = e.target.value;
        setSearchTerm(value)
    }


    return (
        <>
            <Header countriesData={allCountriesData}/>
            <center>
                <input  className='search-input' type={'text'} placeholder={'Search countries by name'}
                        onChange={handleChange}
                />

            </center>

            <div className={'country-card-wrapper'}>

                {countriesData.map((country) => {
                    const {name , flag, population , capital,languages } = country;

                    return (
                        <div className={'country-card'}>
                            <img style={{width:'100%' , height:180}} src={flag} alt={'country-flag'}/>
                            <h2> Name : {name} <br/>
                                Capital : {capital} <br/>
                                {/*Languages:  {languageNames} <br/>*/}
                                Population: {population} <br/>
                                {/*/!*currency: {country.currencies.symbol} */}
                                </h2>
                        </div>
                    )
                })

                }

            </div>
        </>
    )

}

export default WorldCountriesData;
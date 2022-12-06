import React from 'react';
const Population = (props)=>{
    const topTenPopulatedCountries = props.data.sort((a,b)=> b.population - a.population).slice(0, 10);
    return(
        <>
            {topTenPopulatedCountries.map(country=>{
                return <div className={'population-container'}>
                    <b className={'country-name'}>{country.name}</b>
                    <span className={'population-bar'}></span>
                    {country.population}
                </div>
            })}
        </>
    )
}

export default Population;
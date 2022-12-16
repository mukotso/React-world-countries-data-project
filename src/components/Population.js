import React from 'react';
const Population = (props)=>{
    console.log(props.data);
    let topTenPopulatedCountries = props.data.sort((a,b)=> b.population - a.population).slice(0, 10);
    let worldPopulation = 0;
    topTenPopulatedCountries.forEach((country)=>{
        worldPopulation += country.population;
    })
    let world={
        alpha3Code:'World',
        population:worldPopulation,
    }
    topTenPopulatedCountries.unshift(world)


    const width = (population)=>{
        let widthPercentage=   (population / worldPopulation ) *100
        return widthPercentage+'%';
    }
    return(
        <>
            {topTenPopulatedCountries.map(country=>{
                let populationBarWidth = width(country.population)
                return <div className={'population-container'}>
                    <div className={'country-name'}>{country.alpha3Code}</div>
                    <div style={{width:populationBarWidth}} className={'population-bar'}></div>
                   <div className={'population'}> {country.population}</div>
                </div>
            })}
        </>
    )
}

export default Population;
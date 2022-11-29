import React from 'react';
import Header from './Header'

const WorldCountriesData = () => {
    return (
        <>
            <Header/>
            <div className={'country-card-wrapper'}>
                <div className={'country-card'}>
                    <img src={""} alt={'country-flag'}/>
                    <h2> Capital : <br/>
                        Languages: <br/>
                        Population: <br/>
                        currency: </h2>
                </div>

            </div>
        </>
    )

}

export default WorldCountriesData;
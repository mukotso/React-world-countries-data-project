import React from 'react';

const Header = (props)=>{
    return(
        <>
            <div className={'header-wrapper'}>
                <h1 className={'tittle'}><b>World Countries Data</b></h1>
                <center>
                    <h1>Currently we have  {props.countriesData.length} countries</h1>
                </center>
            </div>

        </>
    )

}

export default Header;
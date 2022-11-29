import React from 'react';

const Header = ()=>{
    return(
        <>
            <div className={'header-wrapper'}>
                <h1 className={'tittle'}><b>World Countries Data</b></h1>
                <center>
                    <h1>Currently we have  250 countries</h1>
                </center>
            </div>

            <center>
                <input className='search-input' type={'text'} placeholder={'Search countries by name, city and language'}/>

            </center>
        </>
    )

}

export default Header;
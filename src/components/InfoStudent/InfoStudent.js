import React from 'react';

const InfoStudent = ({infoName, infoStatus, infoBio}) => {
    return (
        <>
            <h1>{infoName}</h1>
            <p>{infoStatus}</p>
            <p>{infoBio}</p>  
        </>
    )
}

export default InfoStudent;
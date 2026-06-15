import React from 'react';

export const Profile = ({ name="Syda", description, urlavatar, websiteurl}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={urlavatar} alt={name} width="100px" height="100px" />
            <a href={websiteurl} target="_blank" rel="noopener noreferrer">Syda</a>

        </div>
    );
};



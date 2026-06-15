import React from 'react';

export const Profile = ({ name="Syda", description, urlavatar }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={urlavatar} alt={name} />
            
        </div>
    );
};



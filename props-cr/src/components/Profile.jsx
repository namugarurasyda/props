import React from 'react';
import { useState } from 'react';

export const Profile = ({ name="Syda", description, urlavatar, websiteurl}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={urlavatar} alt={name} width="100px" height="100px" />
            <a href={websiteurl} target="_blank" rel="noopener noreferrer">My Profile</a>

      <button onClick={() => setIsOpen(true)}>
        Open Notification
      </button>

        </div>
    );
};



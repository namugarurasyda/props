import React from 'react';

export const UserDetails = ({ name, isOnline }) => {
  

    return (
       
        <div>
            <h3>{name}</h3>
            <span>{isOnline ? "🟢 Online" : "Offline"}</span>
            <p>{isOnline ? "Available for chat" : "Not available"}</p>
            {isOnline ? (
                <button>Send Message</button>
            ) : (
                <small>Check back later</small>
            )}
        </div>
            );
};



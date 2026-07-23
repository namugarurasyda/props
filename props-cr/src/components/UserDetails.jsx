import React, {useState} from 'react';


export const UserDetails = ({ name, isOnline }) => {
  const [isHovered, setIsHovered] = useState(false);

    return (
       
        <div>
            <h3>{name}</h3>
            <span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isOnline ? "🟢 Online" : "Offline"}
            </span>
            <p>{isOnline ? "Available for chat" : "Not available"}</p>
            {isOnline ? (
                <button>Send Message</button>
            ) : (
                <small>Check back later</small>
            )}
        </div>
            );
};



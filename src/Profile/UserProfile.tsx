import React from 'react';
import "./UserProfile.module.css";

interface UserProfileProps {
  name: string;
  contacts: string[];
  shortMessage: string;
  avatar: string;
}


const UserProfile: React.FC<UserProfileProps> = ({ name, contacts, shortMessage }) => {
  return (
    <div className="user-profile">
      <h1>Name: {name}</h1>
      <h2>Contacts:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
      <p className="short-message">{shortMessage}</p>
    </div>
  );
};

export default UserProfile;
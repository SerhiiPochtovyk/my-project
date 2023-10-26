import './App.css';
import UserProfile from './Profile/UserProfile';

function App() {
  const userData = {
    name: "Serhii",
    contacts: ["email@example.com", "+123456789"],
    shortMessage: "Stay curious, keep coding, and never stop learning. Your next great breakthrough is just around the corner!",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png", 
  };

  return (
    <div className="App">
      <div className="center-container">
        <UserProfile
          name={userData.name}
          contacts={userData.contacts}
          shortMessage={userData.shortMessage}
          avatar={userData.avatar}
        />
      </div>
    </div>
  );
}

export default App;
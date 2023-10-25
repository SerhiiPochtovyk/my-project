import "./App.css";
import { Footer } from "./Footer";
import { Profile } from "./Profile/Profile";


const user = { userName: "Serhii " };
const App = () => (
  <div className="App">
    <h1> {user.userName}</h1>
    <Footer copyright="" />
    <Profile message="matherfaca"
    contacts="myphone" />
  </div>
);
export default App;

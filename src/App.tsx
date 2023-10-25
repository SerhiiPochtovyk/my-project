import "./App.css";
import { Footer } from "./Footer";

const user = { userName: 'Serhii '}
const App = () => (
  <div className="App">
    <h1>hello world {user.userName}</h1>
    <Footer copyright="S" />
  </div>
);
export default App;

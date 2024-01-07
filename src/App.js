import logo from './logo.svg';
import './App.css';
import Item from'./component/Item'
import List from './component/list';

function App(props) {
  return (
    <div>
      <Item></Item>
      <div className="App">
      Hello Chaitanya

      <List  movie="Animal" realeaseYear = "2023" duration = "03:25:46" hero = "Ranbir Kapoor" url="https://www.youtube.com/watch?v=8FkLRUJj-o0" url1="https://www.youtube.com/watch?v=6OXfgu8uKnE"></List>
      <List movie="Dunki" realeaseYear = "2023" duration = "03:04:56" hero = "Shah Rukh Khan" url="https://www.youtube.com/watch?v=10ji9SDrOcQ" url1="https://www.youtube.com/watch?v=9Z79T_o4v8c"></List>
    </div>
    </div>
  );
}

export default App;

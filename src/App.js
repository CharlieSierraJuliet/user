import "./App.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const handleAddUser = (username, age) => {
    setData((prev) => {
      return [...prev, { name: username, age: age, id:Math.random().toString()}];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={handleAddUser} />
      <UserList users={data} />
    </div>
  );
}

export default App;

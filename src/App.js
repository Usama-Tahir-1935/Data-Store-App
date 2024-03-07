import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = (props) => {
  const [enteredList, setEnteredList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setEnteredList((prevList) => {
      return [...prevList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser = {onAddUserHandler}/>
      <UserList users = {enteredList}/>

    </Fragment>
  );
};

export default App;
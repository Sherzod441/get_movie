import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/db/All.json")
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));
  //     // console.log(setUsers);
  // }, []);

    const getAll = () => {
    axios
      .get("/db/All.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  const getDrama = () => {
    axios
      .get("/db/drama.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }
    const getKomedia = () => {
    axios
      .get("/db/comedia.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

    const getAction = () => {
    axios
      .get("/db/Action.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <button onClick={getAll} >click to get All data</button>
      <button onClick={getDrama} >click to get Drama data</button>
      <button onClick={getKomedia} >click to get Komedia data</button>
      <button onClick={getAction} >click to get Action data</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.id}: {user.movie_name}------<br/>
            {user.genre}------<br/>
            {user.picture}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
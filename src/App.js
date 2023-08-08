import { useState } from "react";
import "./App.css";
// CUSTOM COMPONENTS
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
// HOC RELATED COMPONENTS
import User from "./components/User/User";
import withLoader from "./hoc/withLoader";
// RENDER PROPS COMPONENT
import List from "./components/List/List";

const UserWithLoader = withLoader(User);

const App = () => {
  const [definitions] = useState({
    name: "Frank",
    "last-name": "Zappa",
  });

  return (
    <div className="App">
      <Header />
      <div>
        {/*<List data={definitions} /> */}
        <List
          data={definitions}
          render={({ key, description }) => (
            <>
              {key}: <strong>{description}</strong>
            </>
          )}
        />
      </div>
      <div>
        {/*<List data={definitions} /> */}
        <List
          data={definitions}
          render={({ key, description }) => (
            <>
              <strong style={{ color: "red" }}>{key}</strong>:
              <span style={{ textDecoration: "underline" }}>{description}</span>
            </>
          )}
        />
      </div>
      <div>
        <UserWithLoader />
      </div>
      <CardList />
      <Header>
        <button onClick={() => alert("Hey! Hello you just alert!")}>
          Alert Total Users
        </button>
      </Header>
    </div>
  );
};

export default App;

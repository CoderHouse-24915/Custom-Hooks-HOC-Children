import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import User from './components/User/User';
import withLoader from './hoc/withLoader';

const UserWithLoader = withLoader(User);

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div>
        <UserWithLoader />
      </div>
      <CardList />
      <Header>
        <button onClick={() => alert('Hey! Hello you just alert!')}>
          Alert Total Users
        </button>
      </Header>
    </div>
  );
};

export default App;

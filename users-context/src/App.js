
import './App.css';
import User from './components/User';
import ListOfUsers from './components/ListOfUsers';
import UserState from './context/User/UserState';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <UserState>
    <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <ListOfUsers />
          </div>
          <div className="col-md-5">
            <User />
          </div>
        </div>
      </div>
    </UserState>
    
    </>
  );
}

export default App;

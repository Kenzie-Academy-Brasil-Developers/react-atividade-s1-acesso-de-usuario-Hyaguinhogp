import { useState } from 'react';
import './App.css';
import RestrictedPage from './components/RestrictedPage';

function App() {

  const user = 'Hyaguinhogp';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className='app-container'>
      <RestrictedPage isLoggedIn={isLoggedIn} user={user} login={login} logout={logout} />
    </div>
  );
}

export default App;

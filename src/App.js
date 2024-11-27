// src/App.js
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import UserPage from './components/UserPage';

function App() {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Opcional si estás guardando el token
  };

  return (
    <div style={AppStyle}>
      {user ? (
        <UserPage user={user} logout={logout} />
      ) : (
        <LandingPage setUser={setUser} />
      )}
    </div>
  );
}

const AppStyle = {
  border: 0,
  margin: 0,
  backgroundColor: "#B3E5DC", /* Azul oscuro */
  
}

export default App;

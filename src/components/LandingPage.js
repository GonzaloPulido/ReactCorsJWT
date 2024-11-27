// src/components/LandingPage.js
import React, { useState } from 'react';
import axios from '../axios';

function LandingPage({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' }
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/token', { username, password });
      const { access_token } = response.data;

      const userResponse = await axios.post('/me', { token: access_token });
      setUser(userResponse.data); 
      console.log(userResponse.data);
    } catch (error) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div style={LandingPageStyle}>

      <div style={TableDivStyle}>
        <h1 style={StyleH1}>Bienvenido</h1>
        <p>Usa las siguientes credenciales para probar el login:</p>
        <table border="1" style={TableStyle}>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Contraseña</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={FormDivStyle}>
        <h1 style={StyleH1}>Iniciar Sesión</h1>
        <form onSubmit={handleLogin} style={FormStyle}>
          <input style={InputStyle}
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input style={InputStyle}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={ButtonStyle}>Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}  
      </div>
      
    </div>
  );
}

const LandingPageStyle = {
  display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', 
  minHeight: '100vh',
  textAlign: 'center',
  gap: "5rem",

}

const TableDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: "1rem",
};

const StyleH1 = {
  fontSize: '35px',
}


const TableStyle = {
  width: "20rem",
}

const FormDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: "1rem",
}

const FormStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: "1rem",
}

const ButtonStyle = {
  width: "8rem",
  padding: "3px",
  borderRadius: "15px",
  fontSize: "15px",
}

const InputStyle = {
  padding: "5px",
  fontSize: "15px",
}



export default LandingPage;

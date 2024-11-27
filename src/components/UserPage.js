// src/components/UserPage.js
import React from 'react';

function UserPage({ user, logout }) {
  return (
    <div style={UserPageStyle}>
      <h1 style={StyleH1}>Información del Usuario</h1>
      <p style={StyleP}><strong>Nombre de usuario:</strong> {user.username}</p>
      <p style={StyleP}><strong>Nombre:</strong> {user.name}</p>
      <p style={StyleP}><strong>Age:</strong> {user.age}</p>
      <p style={StyleP}><strong>Password:</strong> {user.password}</p>
      <button onClick={logout} style={ButtonStyle}>Cerrar Sesión</button>
    </div>
  );
}

const UserPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', 
  minHeight: '100vh',
  textAlign: 'center',
  gap: "1rem",
}

const ButtonStyle = {
  width: "8rem",
  padding: "3px",
  borderRadius: "15px",
  fontSize: "15px",
}

const StyleH1 = {
  fontSize: '35px',
}

const StyleP = {
  fontSize: '20px',
}

export default UserPage;

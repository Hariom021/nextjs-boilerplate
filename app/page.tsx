import Image from "next/image";
import React from 'react';

function App() {
  const imageUrl = 'https://via.placeholder.com/400'; // Replace with any image URL

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    image: {
      maxWidth: '90%',
      width: '400px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🖼️ Simple Image Viewer</h2>
      <img src={imageUrl} alt="Preview" style={styles.image} />
    </div>
  );
}

export default App;

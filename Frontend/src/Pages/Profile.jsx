import React, { useState } from 'react';
import './Profile.css'; // Optional: Move CSS here if needed

const Profile = () => {
  const [profileData, setProfileData] = useState({
    email: "yashshetty776@gmail.com",
    full_name: "yash shetty",
    role: "customer",
    location: "Mangaluru",
    preferences: {}
  });

  const [editData, setEditData] = useState({
    full_name: profileData.full_name,
    location: profileData.location,
    preferences: profileData.preferences
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = () => {
    // Here, connect to your backend to update profile data
    console.log("Updated Data:", editData);
    setProfileData({ ...profileData, ...editData });
    alert("Profile updated successfully!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Profile</h1>
      <div style={styles.profileCard}>
        <h2 style={styles.subtitle}>Your Details</h2>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Full Name:</strong> {profileData.full_name}</p>
        <p><strong>Role:</strong> {profileData.role}</p>
        <p><strong>Location:</strong> {profileData.location}</p>
        <p><strong>Preferences:</strong> {JSON.stringify(profileData.preferences)}</p>
      </div>

      <div style={styles.updateSection}>
        <h2 style={styles.subtitle}>Update Profile</h2>
        <label style={styles.label}>Full Name:</label>
        <input
          type="text"
          name="full_name"
          value={editData.full_name}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Location:</label>
        <input
          type="text"
          name="location"
          value={editData.location}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Preferences:</label>
        <textarea
          name="preferences"
          value={JSON.stringify(editData.preferences)}
          onChange={(e) => {
            try {
              setEditData({ ...editData, preferences: JSON.parse(e.target.value) });
            } catch (error) {
              alert("Invalid JSON format for preferences");
            }
          }}
          style={styles.textarea}
        />

        <button onClick={handleUpdate} style={styles.button}>Update Profile</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
  },
  subtitle: {
    color: '#34495e',
  },
  updateSection: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
  },
  label: {
    display: 'block',
    margin: '10px 0 5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    height: '80px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Profile;
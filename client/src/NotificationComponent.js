import React, { useState } from 'react';
import axios from 'axios';

const NotificationComponent = () => {
  const [notification, setNotification] = useState('');

  // Function to fetch notification from the backend
  const fetchNotification = async () => {
    try {
      const response = await axios.get('https://web-notification-react-backend.vercel.app/api/notification');
      const { message } = response.data;

      // Show the notification
      if (Notification.permission === 'granted') {
        new Notification('New Notification', { body: message });
      } else {
        alert('Notification permission not granted.');
      }

      // Update the state
      setNotification(message);
    } catch (error) {
      console.error('Error fetching notification:', error);
      setNotification('Failed to fetch notification.');
    }
  };

  // Request notification permission on mount
  const requestPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  };

  return (
    <div>
      <h1>Web Notification Example</h1>
      <button onClick={requestPermission}>Request Notification Permission</button>
      <button onClick={fetchNotification}>Trigger Notification</button>
      {notification && <p>Last Notification: {notification}</p>}
    </div>
  );
};

export default NotificationComponent;

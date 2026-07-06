import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setItems(data.message)); // Assuming the backend returns a message string
  }, []);

  return (
    <div>
      <h1>Generated App</h1>
      <p>{items}</p>
    </div>
  );
}

export default App;

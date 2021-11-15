import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1>Rent a Car</h1>
      <label>Kullanici Adi: </label><br></br>
      <input type="text" name="kullaniciAdi" /><br></br>
      <label>Sifre: </label><br></br>
      <input type="text" name="Sifre" /><br></br><br></br>

      <button>Submit</button>
    </div>
  );
}

export default App;

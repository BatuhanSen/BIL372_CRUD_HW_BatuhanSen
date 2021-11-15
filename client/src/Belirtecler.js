import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Belirtecler() {
    const [BelirtecID, setBelirtecID] = useState("");
    const [BelirtecTanimi, setBelirtecTanimi] = useState("");

    const belirtecKaydet = () => {
        Axios.post("http://localhost:3001/api/belirtecler", {
            BelirtecID: BelirtecID,
            BelirtecTanimi : BelirtecTanimi,
        }).then (() => {
            alert ("Successful");
        })
        
    }
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Belirtec ID: </label><br></br>
      <input type="text" name="BelirtecID"  onChange= {(e)=> {
          setBelirtecID(e.target.value);
      }}/><br></br>
      <label>Belirtec Tanimi: </label><br></br>
      <input type="text" name="BelirtecTanimi"  onChange= {(e)=> {
          setBelirtecTanimi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={belirtecKaydet}>Belirtec Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Belirtecler;

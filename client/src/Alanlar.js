import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Alanlar() {
    const [AlanID, setAlanID] = useState("");
    const [AlanAdi, setAlanAdi] = useState("");
    const [AlanTipi, setAlanTipi] = useState("");

    const alanKaydet = () => {
        Axios.post("http://localhost:3001/api/alanlar", {
            AlanID: AlanID,
            AlanAdi : AlanAdi,
            AlanTipi : AlanTipi,
        }).then (() => {
            alert ("Successful");
        })
        
    }
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Alan ID: </label><br></br>
      <input type="text" name="AlanID" onChange= {(e)=> {
          setAlanID(e.target.value);
      }}/><br></br>
      <label>Alan Adi: </label><br></br>
      <input type="text" name="AlanAdi"  onChange= {(e)=> {
          setAlanAdi(e.target.value);
      }}/><br></br>
      <label>Alan Tipi: </label><br></br>
      <input type="text" name="AlanTipi"  onChange= {(e)=> {
          setAlanTipi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={alanKaydet}>Alan Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Alanlar;

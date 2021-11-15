import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Iller() {
    const [IlKodu, setIlKodu] = useState("");
    const [IlAdi, setIlAdi] = useState("");

    const ilKaydet = () => {
        Axios.post("http://localhost:3001/api/iller", {
            IlKodu: IlKodu,
            IlAdi : IlAdi,
        }).then (() => {
            alert ("Successful");
        })
        
    }
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Il Kodu: </label><br></br>
      <input type="text" name="IlKodu" onChange= {(e)=> {
          setIlKodu(e.target.value);
      }}/><br></br>
      <label>Il Adi: </label><br></br>
      <input type="text" name="IlAdi"  onChange= {(e)=> {
          setIlAdi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={ilKaydet}>Il Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Iller;

import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Cikti() {
    const [AlanID, setAlanID] = useState("");
    const [SinifID, setSinifID] = useState("");
    const [CiktiID, setCiktiID] = useState("");
    const [CiktiAdi, setCiktiAdi] = useState("");

    const ciktiKaydet = () => {
        Axios.post("http://localhost:3001/api/cikti", {
            AlanID: AlanID,
            SinifID: SinifID,
            CiktiID : CiktiID,
            CiktiAdi : CiktiAdi,
        }).then (() => {
            alert ("Successful");
        })
        
    }
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Alan ID: </label><br></br>
      <input type="text" name="AlanID"  onChange= {(e)=> {
          setAlanID(e.target.value);
      }}/><br></br>
      <label>Sinif ID: </label><br></br>
      <input type="text" name="SinifID" onChange= {(e)=> {
          setSinifID(e.target.value);
      }}/><br></br>
      <label>Cikti ID: </label><br></br>
      <input type="text" name="CiktiID"  onChange= {(e)=> {
          setCiktiID(e.target.value);
      }}/><br></br>
      <label>Cikti Adi: </label><br></br>
      <input type="text" name="CiktiAdi"  onChange= {(e)=> {
          setCiktiAdi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={ciktiKaydet}>Cikti Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Cikti;

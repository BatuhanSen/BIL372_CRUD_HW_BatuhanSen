import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Ilceler() {
    const [IlKodu, setIlKodu] = useState("");
    const [IlceKodu, setIlceKodu] = useState("");
    const [IlceAdi, setIlceAdi] = useState("");

    const ilceKaydet = () => {
        Axios.post("http://localhost:3001/api/ilceler", {
            IlKodu: IlKodu,
            IlceKodu: IlceKodu,
            IlceAdi : IlceAdi,
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
      <label>Ilce Kodu: </label><br></br>
      <input type="text" name="IlceKodu" onChange= {(e)=> {
          setIlceKodu(e.target.value);
      }}/><br></br>
      <label>Ilce Adi: </label><br></br>
      <input type="text" name="IlceAdi"  onChange= {(e)=> {
          setIlceAdi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={ilceKaydet}>Ilce Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Ilceler;

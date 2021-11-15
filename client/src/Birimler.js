import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Birimler() {
    const [BirimKodu, setBirimKodu] = useState("");
    const [BirimAdi, setBirimAdi] = useState("");
    const [UstBirimKodu, setUstBirimKodu] = useState("");
    const [BulunduguAdres, setBulunduguAdres] = useState("");
    const [IlKodu, setIlKodu] = useState("");
    const [IlceKodu, setIlceKodu] = useState("");
    const [PostaKodu, setPostaKodu] = useState("");
    const [BirimMudurKullaniciAdi, setBirimMudurKullaniciAdi] = useState("");

    const birimKaydet = () => {
        Axios.post("http://localhost:3001/api/birimler", {
            BirimKodu: BirimKodu,
            BirimAdi : BirimAdi,
            UstBirimKodu : UstBirimKodu,
            BulunduguAdres : BulunduguAdres,
            IlKodu : IlKodu,
            IlceKodu : IlceKodu,
            PostaKodu : PostaKodu,
            BirimMudurKullaniciAdi : BirimMudurKullaniciAdi,
        }).then (() => {
            alert ("Successful");
        })
        
    }
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Birim Kodu: </label><br></br>
      <input type="text" name="BirimKodu" onChange= {(e)=> {
          setBirimKodu(e.target.value);
      }}/><br></br><br></br>

      <label>Birim Adi: </label><br></br>
      <input type="text" name="BirimAdi"  onChange= {(e)=> {
          setBirimAdi(e.target.value);
      }}/><br></br><br></br>

      <label>Ust Birim Kodu: </label><br></br>
      <input type="text" name="UstBirimKodu"  onChange= {(e)=> {
          setUstBirimKodu(e.target.value);
      }}/><br></br><br></br>
      
      <label>Bulundugu Adres: </label><br></br>
      <input type="text" name="BulunduguAdres"  onChange= {(e)=> {
          setBulunduguAdres(e.target.value);
      }}/><br></br><br></br>
      
      <label>Il kodu: </label><br></br>
      <input type="text" name="Ilkodu"  onChange= {(e)=> {
          setIlKodu(e.target.value);
      }}/><br></br><br></br>

      <label>Ilçe kodu: </label><br></br>
      <input type="text" name="IlceKodu"  onChange= {(e)=> {
          setIlceKodu(e.target.value);
      }}/><br></br><br></br>

      <label>Posta kodu: </label><br></br>
      <input type="text" name="PostaKodu"  onChange= {(e)=> {
          setPostaKodu(e.target.value);
      }}/><br></br><br></br>

      <label>Birim Mudur Kullanici Adi: </label><br></br>
      <input type="text" name="BirimMudurKullaniciAdi"  onChange= {(e)=> {
          setBirimMudurKullaniciAdi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={birimKaydet}>Birim Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Birimler;

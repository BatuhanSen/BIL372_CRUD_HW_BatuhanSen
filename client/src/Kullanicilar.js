import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Kullanicilar() {
    const [kullaniciAdi, setKullaniciAdi] = useState("");
    const [sifre, setSifre] = useState("");
    const [kullaniciList, setKullaniciList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response)=> {
        setKullaniciList(response.data);
      });
      
    }, []);

    const kullaniciKaydet = () => {
        Axios.post("http://localhost:3001/api/kullanicilar", {
            kullaniciAdi: kullaniciAdi,
            sifre : sifre,
        }).then (() => {
            alert ("Successful");
        })
        
    }
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Kullanici Adi: </label><br></br>
      <input type="text" name="kullaniciAdi" onChange= {(e)=> {
          setKullaniciAdi(e.target.value);
      }}/><br></br>
      <label>Sifre: </label><br></br>
      <input type="text" name="sifre"  onChange= {(e)=> {
          setSifre(e.target.value);
      }}/><br></br><br></br>

      <button onClick={kullaniciKaydet}>Kullanici Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>

      {kullaniciList.map((val) => {
        return <h1>kullaniciAdi: {val.kullaniciAdi} | sifre: {val.sifre}</h1>
      })}
    </div>
  );
}

export default Kullanicilar;

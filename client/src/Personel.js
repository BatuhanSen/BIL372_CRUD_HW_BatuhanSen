import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Personel() {
    const [KullaniciAdi, setKullaniciAdi] = useState("");
    const [Email, setEmail] = useState("");
    const [Ad, setAd] = useState("");
    const [Soyad, setSoyad] = useState("");
    const [SicilNo, setSicilNo] = useState("");
    const [Cep, setCep] = useState("");
    const [Ev_Adresi, setEv_Adresi] = useState("");
    const [IlKodu, setIlKodu] = useState("");
    const [IlceKodu, setIlceKodu] = useState("");
    const [PostaKodu, setPostaKodu] = useState("");
    const [UstKullaniciAdi, setUstKullaniciAdi] = useState("");
    const [CalistigiBirimKodu, setCalistigiBirimKodu] = useState("");

    const personelKaydet = () => {
        Axios.post("http://localhost:3001/api/personel", {
            KullaniciAdi: KullaniciAdi,
            Email : Email,
            Ad : Ad,
            Soyad : Soyad,
            SicilNo : SicilNo,
            Cep : Cep,
            Ev_Adresi : Ev_Adresi,
            IlKodu : IlKodu,
            IlceKodu : IlceKodu,
            PostaKodu : PostaKodu,
            UstKullaniciAdi : UstKullaniciAdi,
            CalistigiBirimKodu : CalistigiBirimKodu
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
      }}/><br></br><br></br>

      <label>Email: </label><br></br>
      <input type="text" name="Email"  onChange= {(e)=> {
          setEmail(e.target.value);
      }}/><br></br><br></br>

      <label>Ad: </label><br></br>
      <input type="text" name="Ad"  onChange= {(e)=> {
          setAd(e.target.value);
      }}/><br></br><br></br>
      
      <label>Soyad: </label><br></br>
      <input type="text" name="Soyad"  onChange= {(e)=> {
          setSoyad(e.target.value);
      }}/><br></br><br></br>
      
      <label>Sicil No: </label><br></br>
      <input type="text" name="SicilNo"  onChange= {(e)=> {
          setSicilNo(e.target.value);
      }}/><br></br><br></br>

      <label>Cep: </label><br></br>
      <input type="text" name="Cep"  onChange= {(e)=> {
          setCep(e.target.value);
      }}/><br></br><br></br>
      
      <label>Ev Adresi: </label><br></br>
      <input type="text" name="Ev_Adresi"  onChange= {(e)=> {
          setEv_Adresi(e.target.value);
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

      <label>Ust Kullanici Adi: </label><br></br>
      <input type="text" name="UstKullaniciAdi"  onChange= {(e)=> {
          setUstKullaniciAdi(e.target.value);
      }}/><br></br><br></br>

      <label>Calistigi Birim Kodu: </label><br></br>
      <input type="text" name="CalistigiBirimKodu"  onChange= {(e)=> {
          setCalistigiBirimKodu(e.target.value);
      }}/><br></br><br></br>

      <button onClick={personelKaydet}>Personel Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
    </div>
  );
}

export default Personel;

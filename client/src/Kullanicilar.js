import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Kullanicilar() {
    const [KullaniciAdi, setKullaniciAdi] = useState("");
    const [sifre, setSifre] = useState("");
    const [kullaniciList, setKullaniciList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response)=> {
        setKullaniciList(response.data);
      });
      
    }, []);

    const kullaniciKaydet = () => {

        Axios.post("http://localhost:3001/api/kullanicilar", {
            KullaniciAdi: KullaniciAdi,
            sifre : sifre,
        });

        setKullaniciList([
          ...kullaniciList,
          {KullaniciAdi : KullaniciAdi, sifre : sifre},
        ]);
        
    };

    

    const deleteItem = (item) => {
        Axios.delete(`http://localhost:3001/api/delete/${item}`)
    };
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Kullanici Adi: </label><br></br>
      <input type="text" name="KullaniciAdi" onChange= {(e)=> {
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

      
      <br></br><br></br>
      {kullaniciList.map((val) => (
        <tbody>
          
            <td> kullanici adi = {val.KullaniciAdi}</td>
            <td> sifre = {val.sifre}</td>
            <button> Update </button>
            <button onClick = {() => {deleteItem(val.KullaniciAdi)}}> Delete </button>
            <br></br>

        </tbody>
      )
      )}
    </div>
  );
}

export default Kullanicilar;

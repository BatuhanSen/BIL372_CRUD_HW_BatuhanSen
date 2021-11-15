import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Ilceler() {
    const [IlKodu, setIlKodu] = useState("");
    const [IlceKodu, setIlceKodu] = useState("");
    const [IlceAdi, setIlceAdi] = useState("");

    const [ilcelerList, setIlcelerLList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/ilceler').then((response)=> {
        setIlcelerLList(response.data);
      });
      
    }, []);

    const ilceKaydet = () => {
        Axios.post("http://localhost:3001/api/ilceler", {
            IlKodu: IlKodu,
            IlceKodu: IlceKodu,
            IlceAdi : IlceAdi,
        });

        setIlcelerLList([
          ...ilcelerList,
          { IlKodu: IlKodu,
            IlceKodu: IlceKodu,
            IlceAdi : IlceAdi,},
        ]);
        
    };

    const deleteItem = (item) => {
      Axios.delete(`http://localhost:3001/api/delete/ilceler/${item}`)
  };
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
      
      <br></br><br></br>
      {ilcelerList.map((val) => (
        <tbody>
            <td> Il Kodu = {val.IlKodu}</td>
            <td> Ilce Kodu = {val.IlceKodu}</td>
            <td> Ilcce Adi = {val.IlceAdi}</td>
            <button> Update </button>
            <button onClick = {() => {deleteItem(val.IlKodu)}}> Delete </button>
            <br></br>
        </tbody>
      )
      )}
    </div>
  );
}

export default Ilceler;

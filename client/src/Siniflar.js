import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Siniflar() {
    const [SinifID, setSinifID] = useState("");
    const [SinifAdi, setSinifAdi] = useState("");
    const [AlanTipi, setAlanTipi] = useState("");

    const [siniflarList, setSiniflarList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/siniflar').then((response)=> {
        setSiniflarList(response.data);
      });
      
    }, []);

    const sinifKaydet = () => {
        Axios.post("http://localhost:3001/api/siniflar", {
            SinifID: SinifID,
            SinifAdi : SinifAdi,
            AlanTipi : AlanTipi,
        }).then (() => {
            alert ("Successful");
        })
        
    };
    const deleteItem = (item) => {
      Axios.delete(`http://localhost:3001/api/delete/siniflar/${item}`)
  };
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Sinif ID: </label><br></br>
      <input type="text" name="SinifID" onChange= {(e)=> {
          setSinifID(e.target.value);
      }}/><br></br>
      <label>Sinif Adi: </label><br></br>
      <input type="text" name="SinifAdi"  onChange= {(e)=> {
          setSinifAdi(e.target.value);
      }}/><br></br>
      <label>Alan Tipi: </label><br></br>
      <input type="text" name="AlanTipi"  onChange= {(e)=> {
          setAlanTipi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={sinifKaydet}>Sinif Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>

      <br></br><br></br>
      {siniflarList.map((val) => (
        <tbody>
          
            <td> Sinif ID = {val.SinifID}</td>
            <td> Sinif Adi = {val.SinifAdi}</td>
            <td> Alan Tipi = {val.AlanTipi}</td>
            <button> Update </button>
            <button onClick = {() => {deleteItem(val.SinifID )}}> Delete </button>
            <br></br>
        </tbody>
      )
      )}
    </div>
  );
}

export default Siniflar;

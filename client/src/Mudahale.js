import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Mudahale() {
    const [AlanID, setAlanID] = useState("");
    const [SinifID, setSinifID] = useState("");
    const [MudaheleID, setMudaheleID] = useState("");
    const [MudahaleAdi, setMudahaleAdi] = useState("");

    const [mudahaleList, setMudahaleList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/mudahale').then((response)=> {
        setMudahaleList(response.data);
      });
      
    }, []);

    const mudahaleKaydet = () => {
        Axios.post("http://localhost:3001/api/mudahale", {
            AlanID: AlanID,
            SinifID: SinifID,
            MudaheleID : MudaheleID,
            MudahaleAdi : MudahaleAdi,
        }).then (() => {
            alert ("Successful");
        })
        
    };
    const deleteItem = (item) => {
      Axios.delete(`http://localhost:3001/api/delete/mudahale/${item}`)
  };
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
      <label>Mudahele ID: </label><br></br>
      <input type="text" name="MudaheleID"  onChange= {(e)=> {
          setMudaheleID(e.target.value);
      }}/><br></br>
      <label>Mudahale Adi: </label><br></br>
      <input type="text" name="MudahaleAdi"  onChange= {(e)=> {
          setMudahaleAdi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={mudahaleKaydet}>Mudahale Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
      <br></br><br></br>
      {mudahaleList.map((val) => (
        <tbody>
          
            <td> Alan ID = {val.AlanID}</td>
            <td> Sinif ID = {val.SinifID}</td>
            <td> Mudahale ID = {val.MudaheleID}</td>
            <td> Mudahale Adi = {val.MudahaleAdi}</td>
            <button> Update </button>
            <button onClick = {() => {deleteItem(val.MudaheleID )}}> Delete </button>
            <br></br>
        </tbody>
      )
      )}
    </div>
  );
}

export default Mudahale;

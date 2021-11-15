import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Aktiviteler() {
    const [AktiviteID, setAktiviteID] = useState("");
    const [AktiviteTanimi, setAktiviteTanimi] = useState("");

    const [aktivitelerList, setAktivitelerList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/aktiviteler').then((response)=> {
        setAktivitelerList(response.data);
      });
      
    }, []);

    const aktiviteKaydet = () => {
        Axios.post("http://localhost:3001/api/aktiviteler", {
            AktiviteID: AktiviteID,
            AktiviteTanimi : AktiviteTanimi,
        }).then (() => {
            alert ("Successful");
        })
        
    };
    const deleteItem = (item) => {
      Axios.delete(`http://localhost:3001/api/delete/aktiviteler/${item}`)
  };
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Aktivite ID: </label><br></br>
      <input type="text" name="AktiviteID"  onChange= {(e)=> {
          setAktiviteID(e.target.value);
      }}/><br></br>
      <label>Aktivite Tanimi: </label><br></br>
      <input type="text" name="AktiviteTanimi"  onChange= {(e)=> {
          setAktiviteTanimi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={aktiviteKaydet}>Aktivite Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>
      <br></br><br></br>
      {aktivitelerList.map((val) => (
        <tbody>
          
            <td> Aktiviteler ID = {val.AktiviteID}</td>
            <td> Aktivite Tanimi = {val.AktiviteTanimi}</td>
            <button> Update </button>
            <button onClick = {() => {deleteItem(val.AktiviteID )}}> Delete </button>
            <br></br>
        </tbody>
      )
      )}
    </div>
  );
}

export default Aktiviteler;

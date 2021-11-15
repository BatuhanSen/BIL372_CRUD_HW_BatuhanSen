import React, {useState, useEffect} from 'react';
import './App.css'; 
import {Link } from "react-router-dom";
import Axios from "axios";


function Iller() {
    const [IlKodu, setIlKodu] = useState("");
    const [IlAdi, setIlAdi] = useState("");

    const [illerList, setIllerLList] = useState ([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/api/get/iller').then((response)=> {
        setIllerLList(response.data);
      });
      
    }, []);


    const ilKaydet = () => {
        Axios.post("http://localhost:3001/api/iller", {
            IlKodu: IlKodu,
            IlAdi : IlAdi,
        });

        setIllerLList([
          ...illerList,
          { IlKodu: IlKodu,
            IlAdi : IlAdi,},
        ]);
    };

    const deleteItem = (item) => {
      Axios.delete(`http://localhost:3001/api/delete/iller/${item}`)
  };
  return (
    <div className="Kullanicilar">
      <h1>Rent a Car</h1>
      <label>Il Kodu: </label><br></br>
      <input type="text" name="IlKodu" onChange= {(e)=> {
          setIlKodu(e.target.value);
      }}/><br></br>
      <label>Il Adi: </label><br></br>
      <input type="text" name="IlAdi"  onChange= {(e)=> {
          setIlAdi(e.target.value);
      }}/><br></br><br></br>

      <button onClick={ilKaydet}>Il Kaydet</button>

      <Link to="/"><button>
           Geri
         </button>
      </Link>

      <br></br><br></br>
      {illerList.map((val) => (
        <tbody>
            <td> Il Kodu = {val.IlKodu}</td>
            <td> Il Adi = {val.IlAdi}</td>
            <button> Update </button>
            <button onClick = {() => {deleteItem(val.IlKodu)}}> Delete </button>
            <br></br>
        </tbody>
      )
      )}
    </div>
  );
}

export default Iller;

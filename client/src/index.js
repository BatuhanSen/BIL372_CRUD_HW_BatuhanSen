import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Giris from "./Giris";
import Kullanicilar from "./Kullanicilar";
import Personel from "./Personel";
import Iller from "./Iller";
import Ilceler from "./Ilceler";
import Birimler from "./Birimler";
import Alanlar from "./Alanlar";
import Siniflar from "./Siniflar";
import Mudahale from "./Mudahale";
import Aktiviteler from "./Aktiviteler";
import Cikti from "./Cikti";
import Belirtecler from "./Belirtecler";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Giris} />
     <Route path="/Kullanicilar" component={Kullanicilar} />
     <Route path="/Personel" component={Personel} />
     <Route path="/Iller" component={Iller} />
     <Route path="/Ilceler" component={Ilceler} />
     <Route path="/Birimler" component={Birimler} />
     <Route path="/Alanlar" component={Alanlar} />
     <Route path="/Siniflar" component={Siniflar} />
     <Route path="/Mudahale" component={Mudahale} />
     <Route path="/Aktiviteler" component={Aktiviteler} />
     <Route path="/Cikti" component={Cikti} />
     <Route path="/Belirtecler" component={Belirtecler} />


   </Switch>
   </BrowserRouter>,
   rootElement
 );
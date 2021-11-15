import React from "react";
import {Link } from "react-router-dom";

 function Giris() {

     return (
       <div>

         <Link to="/Kullanicilar"><button>
           Kullanici CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Personel"><button>
           Personel CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Iller"><button>
           Il CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Ilceler"><button>
           Ilce CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Birimler"><button>
           Birimler CRUD
         </button>
         </Link>

         <br></br>
         <br></br>
         <Link to="/Alanlar"><button>
           Alanlar CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Siniflar"><button>
           Siniflar CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Mudahale"><button>
            Mudahale CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Aktiviteler"><button>
            Aktiviteler CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Cikti"><button>
            Cikti CRUD
         </button>
         </Link>
         <br></br>
         <br></br>
         <Link to="/Belirtecler"><button>
            Belirtecler CRUD
         </button>
         </Link>
         
       </div>
       
     );

 }

 export default Giris;
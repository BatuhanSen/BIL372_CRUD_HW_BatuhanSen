const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "batu",
    password: "password",
    database: "project1"
});
app.use(cors());
app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())


app.post("/api/kullanicilar", (req, res)=> {
    const KullaniciAdi = req.body.KullaniciAdi;
    const sifre = req.body.sifre;   

    const sqlInsertKullanicilar =
        "INSERT INTO `project1`.`kullanicilar` (`KullaniciAdi`, `sifre`) VALUES (?, ?)";
    db.query(sqlInsertKullanicilar, [KullaniciAdi, sifre], (err, result) => {
    });
    
});

app.post("/api/personel", (req, res)=> {
    const KullaniciAdi = req.body.KullaniciAdi;
    const Email = req.body.Email;
    const Ad = req.body.Ad;
    const Soyad = req.body.Soyad;   
    const SicilNo = req.body.SicilNo;   
    const Cep = req.body.Cep;   
    const Ev_Adresi = req.body.Ev_Adresi;   
    const IlKodu = req.body.IlKodu;   
    const IlceKodu = req.body.IlceKodu;   
    const PostaKodu = req.body.PostaKodu;   
    const UstKullaniciAdi = req.body.UstKullaniciAdi;   
    const CalistigiBirimKodu = req.body.CalistigiBirimKodu;   

    const sqlInsertPersonel =
        "INSERT INTO `project1`.`personel` (`KullaniciAdi`, `Email`, `Ad`, `Soyad`, `SicilNo`, `Cep`, `Ev_Adresi`, `IlKodu`, `IlceKodu`, `PostaKodu`, `UstKullaniciAdi`, `CalistigiBirimKodu`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsertPersonel, [KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, Ev_Adresi, IlKodu, IlceKodu, PostaKodu, UstKullaniciAdi, CalistigiBirimKodu], (err, result) => {
        
    });
    
});

app.post("/api/iller", (req, res)=> {
    
    const IlKodu = req.body.IlKodu;   
    const IlAdi = req.body.IlAdi;   

    const sqlInsertIller =
        "INSERT INTO `project1`.`iller` (`IlKodu`, `IlAdi`) VALUES (?, ?)";
    db.query(sqlInsertIller, [IlKodu, IlAdi], (err, result) => {
    });
    
});

app.post("/api/ilceler", (req, res)=> {
    
    const IlKodu = req.body.IlKodu;   
    const IlceKodu = req.body.IlceKodu;   
    const IlceAdi = req.body.IlceAdi;   

    const sqlInsertIlceler =
        "INSERT INTO `project1`.`ilceler` (`IlKodu`,`IlceKodu`, `IlceAdi`) VALUES (?, ?, ?)";
    db.query(sqlInsertIlceler, [IlKodu, IlceKodu, IlceAdi], (err, result) => {
    });
    
});

app.post("/api/birimler", (req, res)=> {
    const BirimKodu = req.body.BirimKodu;  
    const BirimAdi = req.body.BirimAdi;
    const UstBirimKodu = req.body.UstBirimKodu;
    const BulunduguAdres = req.body.BulunduguAdres;  
    const IlKodu = req.body.IlKodu;   
    const IlceKodu = req.body.IlceKodu;   
    const PostaKodu = req.body.PostaKodu;   
    const BirimMudurKullaniciAdi = req.body.BirimMudurKullaniciAdi;   

    const sqlInsertBirimler =
        "INSERT INTO `project1`.`birimler` (`BirimKodu`, `BirimAdi`, `UstBirimKodu`, `BulunduguAdres`, `IlKodu`, `IlceKodu`, `PostaKodu`, `BirimMudurKullaniciAdi`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsertBirimler, [BirimKodu, BirimAdi, UstBirimKodu, BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi], (err, result) => {
        
    });
    
});

app.post("/api/alanlar", (req, res)=> {
    
    const AlanID = req.body.AlanID;   
    const AlanAdi = req.body.AlanAdi;   
    const AlanTipi = req.body.AlanTipi;   

    const sqlInsertAlanlar =
        "INSERT INTO `project1`.`alanlar` (`AlanID`,`AlanAdi`, `AlanTipi`) VALUES (?, ?, ?)";
    db.query(sqlInsertAlanlar, [AlanID, AlanAdi, AlanTipi], (err, result) => {
    });
    
});

app.post("/api/siniflar", (req, res)=> {
    
    const SinifID = req.body.SinifID;   
    const SinifAdi = req.body.SinifAdi;   
    const AlanTipi = req.body.AlanTipi;   

    const sqlInsertSiniflar =
        "INSERT INTO `project1`.`siniflar` (`SinifID`,`SinifAdi`, `AlanTipi`) VALUES (?, ?, ?)";
    db.query(sqlInsertSiniflar, [SinifID, SinifAdi, AlanTipi], (err, result) => {
    });
    
});

app.post("/api/mudahale", (req, res)=> {
    
    const AlanID = req.body.AlanID;
    const SinifID = req.body.SinifID;   
    const MudaheleID = req.body.MudaheleID;   
    const MudahaleAdi = req.body.MudahaleAdi;   

    const sqlInsertMudahale =
        "INSERT INTO `project1`.`mudahale` (`AlanID`,`SinifID`,`MudaheleID`, `MudahaleAdi`) VALUES (?, ?, ?, ?)";
    db.query(sqlInsertMudahale, [AlanID, SinifID, MudaheleID, MudahaleAdi], (err, result) => {
    });
    
});

app.post("/api/aktiviteler", (req, res)=> {
    
    const AktiviteID = req.body.AktiviteID;   
    const AktiviteTanimi = req.body.AktiviteTanimi;   

    const sqlInsertAktiviteler =
        "INSERT INTO `project1`.`aktiviteler` (`AktiviteID`,`AktiviteTanimi`) VALUES (?, ?)";
    db.query(sqlInsertAktiviteler, [AktiviteID, AktiviteTanimi], (err, result) => {
    });
    
});

app.post("/api/cikti", (req, res)=> {
    
    const AlanID = req.body.AlanID;
    const SinifID = req.body.SinifID;   
    const CiktiID = req.body.CiktiID;   
    const CiktiAdi = req.body.CiktiAdi;   

    const sqlInsertCikti =
        "INSERT INTO `project1`.`cikti` (`AlanID`,`SinifID`,`CiktiID`, `CiktiAdi`) VALUES (?, ?, ?, ?)";
    db.query(sqlInsertCikti, [AlanID, SinifID, CiktiID, CiktiAdi], (err, result) => {
    });
    
});

app.post("/api/belirtecler", (req, res)=> {
    
    const BelirtecID = req.body.BelirtecID;   
    const BelirtecTanimi = req.body.BelirtecTanimi;   

    const sqlInsertBelirtecler =
        "INSERT INTO `project1`.`belirtecler` (`BelirtecID`,`BelirtecTanimi`) VALUES (?, ?)";
    db.query(sqlInsertBelirtecler, [BelirtecID, BelirtecTanimi], (err, result) => {
    });
    
});

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM kullanicilar";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/personel", (req, res) => {
    const sqlSelect = "SELECT * FROM personel";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/iller", (req, res) => {
    const sqlSelect = "SELECT * FROM iller";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/ilceler", (req, res) => {
    const sqlSelect = "SELECT * FROM ilceler";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/birimler", (req, res) => {
    const sqlSelect = "SELECT * FROM birimler";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/alanlar", (req, res) => {
    const sqlSelect = "SELECT * FROM alanlar";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/siniflar", (req, res) => {
    const sqlSelect = "SELECT * FROM siniflar";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/mudahale", (req, res) => {
    const sqlSelect = "SELECT * FROM mudahale";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/aktiviteler", (req, res) => {
    const sqlSelect = "SELECT * FROM aktiviteler";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/cikti", (req, res) => {
    const sqlSelect = "SELECT * FROM cikti";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/belirtecler", (req, res) => {
    const sqlSelect = "SELECT * FROM belirtecler";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.delete("/api/delete/:KullaniciAdi", (req, res) => {
    const item = req.params.KullaniciAdi
    const sqlDelete = 
        "DELETE FROM `project1`.`kullanicilar` WHERE  KullaniciAdi = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/personel/:SicilNo", (req, res) => {
    const item = req.params.SicilNo
    const sqlDelete = 
        "DELETE FROM `project1`.`personel` WHERE SicilNo = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/iller/:IlKodu", (req, res) => {
    const item = req.params.IlKodu
    const sqlDelete = 
        "DELETE FROM `project1`.`iller` WHERE IlKodu = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/ilceler/:IlceKodu", (req, res) => {
    const item = req.params.IlceKodu
    const sqlDelete = 
        "DELETE FROM `project1`.`ilceler` WHERE IlceKodu = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/birimler/:BirimKodu", (req, res) => {
    const item = req.params.BirimKodu
    const sqlDelete = 
        "DELETE FROM `project1`.`birimler` WHERE BirimKodu = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/alanlar/:AlanID", (req, res) => {
    const item = req.params.AlanID
    const sqlDelete = 
        "DELETE FROM `project1`.`alanlar` WHERE AlanID = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/siniflar/:SinifID", (req, res) => {
    const item = req.params.SinifID
    const sqlDelete = 
        "DELETE FROM `project1`.`siniflar` WHERE SinifID = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/mudahale/:MudaheleID", (req, res) => {
    const item = req.params.MudaheleID
    const sqlDelete = 
        "DELETE FROM `project1`.`mudahale` WHERE MudaheleID = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/aktiviteler/:AktiviteID", (req, res) => {
    const item = req.params.AktiviteID
    const sqlDelete = 
        "DELETE FROM `project1`.`aktiviteler` WHERE AktiviteID = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/cikti/:CiktiID", (req, res) => {
    const item = req.params.CiktiID
    const sqlDelete = 
        "DELETE FROM `project1`.`cikti` WHERE CiktiID = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/belirtecler/:BelirtecID", (req, res) => {
    const item = req.params.BelirtecID
    const sqlDelete = 
        "DELETE FROM `project1`.`belirtecler` WHERE BelirtecID = ? ";
    db.query(sqlDelete, item, (err, res) => {
        if (err) console.log(err);
    });
});

app.listen(3001, ()=> {
    console.log("running on port 3001")
});

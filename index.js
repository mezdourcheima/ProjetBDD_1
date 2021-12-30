const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    database:'GESTION_DES_CHANTIERS'
});

//conncect to mysql
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('Mysql Conncected');
});

const app = express();

//Create DATABASE
app.get('/createdb', (req,res) => {
    let sql = "CREATE DATABASE GESTION_DES_CHANTIERS";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('DataBase created');
    });
});

//Create table CHANTIERS
app.get('/createChantiers', (req,res) => {
    let sql = "CREATE TABLE CHANTIERS (idCHANTIER INT ,Responsable VARCHAR(255) , NomClient VARCHAR(255))";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('Table chantiers created');
    });
});
//Create table EQUIPEMENTS
app.get('/createEquipements', (req,res) => {
    let sql = "CREATE TABLE EQUIPEMENTS (idEQUIPEMETS INT ,Libelle VARCHAR(255) , Prix INT)";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('Table Equipements created');
    });
});
//Create table TACHES
app.get('/createTaches', (req,res) => {
    let sql = "CREATE TABLE TACHES (idTache INT ,Responsable VARCHAR(255) , DureeTache VARCHAR(255))";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('Table Taches created');
    });
});
//Create table Ouvriers
app.get('/createOuvriers', (req,res) => {
    let sql = "CREATE TABLE OUVRIERS (idOuvrier INT ,NomOuvrier VARCHAR(255) , PrenomOuvrier VARCHAR(255) , EmailOuvrier VARCHAR(255) , TelephoneOuv VARCHAR(255))";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('Table Ouvriers created');
    });
});
//Create table clients
app.get('/createClients', (req,res) => {
    let sql = "CREATE TABLE CLIENTS (idClients INT ,NomClient VARCHAR(255) , PrenomClient VARCHAR(255) , EmailClient VARCHAR(255) , Telephonecl VARCHAR(255))";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('Table Clients created');
    });
});
//Create table clients
app.get('/createSpecialites', (req,res) => {
    let sql = "CREATE TABLE SPECIALITES (idSpecialite INT , NomSpecialite VARCHAR(255) )";
    db.query(sql , err => {
        if(err) {
            throw err;
        }
        res.send('Table Specialites created');
    });
});
app.listen('5000',() => {
    console.log('server connected to port 5000');
})
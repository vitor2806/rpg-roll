const express = require('express');
const req = require('express/lib/request');
const routes = express.Router();

let players = {};

routes.get('/', (req, res) => res.render('home'));

routes.post('/name', (req, res) => {
   const form = req.body['player-quantity'];
   return res.render('name', { form });
});

routes.post('/players', (req, res) => {
   const data = req.body;

   Object.keys(data).forEach((element, index) => {
      if (data[`player${index}`]) {
         players[data[`player${index}`]] = Number(data[`mod${index}`]);
      }
   });

   return res.render('players', { players });
});

routes.post('/players/result', (req, res) => {
   const data = req.body; //get req body
   let player_spread = {}; //create empty players object
   Object.values(data.name).forEach((name, index) => {
      //for each value of keys in player
      player_spread[name] = Number(data.result[index]); // for each data.name, player[name] = data.result
   });

   //sorting struct
   let entries = Object.entries(player_spread); //
   let sorted = entries.sort((a, b) => b[1] - a[1]);
   player_spread = {};
   sorted.forEach((field) => {
      player_spread[field[0]] = field[1];
   });
   console.log(player_spread);

   player_spread = Object.keys(player_spread);
   return res.render('result', { player_spread });
});

module.exports = routes;

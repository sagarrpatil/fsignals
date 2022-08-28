const express = require("express");
const axios = require("axios");
const cheerio = require('cheerio');
var firebase = require('firebase')

const cors = require('cors');
const app = express();
app.use(cors({
  origin: '*'
}));
const PORT = 5000;
const moment = require('moment');
var firebaseConfig = {
  apiKey: "AIzaSyCEM0umiTicEXMWeTDOvI4T4K3fVOP6TMs",
  authDomain: "forexmeterbysp.firebaseapp.com",
  databaseURL: "https://forexmeterbysp-default-rtdb.firebaseio.com",
  projectId: "forexmeterbysp",
  storageBucket: "forexmeterbysp.appspot.com",
  messagingSenderId: "520604947277",
  appId: "1:520604947277:web:e7616202f1028ee5ab9d04",
  measurementId: "G-R15DYCPNB9"
};
firebase.initializeApp(firebaseConfig)
let database = firebase.database()


setInterval(() => {
eurusdfunction();
audcadfunction();
}, 7000);


function eurusdfunction(){
axios.get("https://in.investing.com/currencies/eur-usd-technical?timeFrame=60",{
  headers: {
    "host":"in.investing.com",
    "Origin":"https://in.investing.com",
    'Access-Control-Allow-Origin' : '*',
    "User-Agent":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0",
  }
}).then((res)=>{
  const $ = cheerio.load(res.data)
    var arrayOfTitles =[];
    $('.col-title').toArray().map(k => {
      arrayOfTitles.push($(k).text())
    })
    console.log(arrayOfTitles)
    database.ref('/EURUSD/titles').set({
      titles:arrayOfTitles
    })

    var arrayPercentsSell =[];
    $('.col-sell').toArray().map(k => {
      arrayPercentsSell.push($(k).text())
    })
    console.log(arrayPercentsSell)
    database.ref('/EURUSD/PercentsSell').set({
      PercentsSell:arrayPercentsSell
    })

    var arrayPercentsnatural =[];
    $('.col-natural').toArray().map(k => {
      arrayPercentsnatural.push($(k).text())
    })
    console.log(arrayPercentsnatural)
    database.ref('/EURUSD/Percentsnatural').set({
      Percentsnatural:arrayPercentsnatural
    })

    var arrayPercentsbuy =[];
    $('.col-buy').toArray().map(k => {
      arrayPercentsbuy.push($(k).text())
    })
    console.log(arrayPercentsbuy)
    database.ref('/EURUSD/arrayPercentsbuy').set({
      arrayPercentsbuy:arrayPercentsbuy
    })

    var arrayPercentsActionsTOP =[];
    $('.col-action').toArray().map(k => {
      arrayPercentsActionsTOP.push($(k).text())
    })
    console.log(arrayPercentsActionsTOP)
    database.ref('/EURUSD/arrayPercentsActionsTOP').set({
      arrayPercentsActionsTOP:arrayPercentsActionsTOP
    })


    var arrayPercentssimpleValue =[];
    $('.col-simple').toArray().map(k => {
      arrayPercentssimpleValue.push($(k).text())
    })
    console.log(arrayPercentssimpleValue)
    database.ref('/EURUSD/arrayPercentssimpleValue').set({
      arrayPercentssimpleValue:arrayPercentssimpleValue
    })


    var arrayPercentsExpValue =[];
    $('.col-exponential').toArray().map(k => {
      arrayPercentsExpValue.push($(k).text())
    })
    console.log(arrayPercentsExpValue)
    database.ref('/EURUSD/arrayPercentsExpValue').set({
      arrayPercentsExpValue:arrayPercentsExpValue
    })

    var arrayPercentsamount =[];
    $('.col-amount').toArray().map(k => {
      arrayPercentsamount.push($(k).text())
    })
    console.log(arrayPercentsamount)
    database.ref('/EURUSD/arrayPercentsamount').set({
      arrayPercentsamount:arrayPercentsamount
    })

    var arrayPercentsAction =[];
    $('.col-sentiment').toArray().map(k => {
      arrayPercentsAction.push($(k).text())
    })
    console.log(arrayPercentsAction)
    database.ref('/EURUSD/arrayPercentsAction').set({
      arrayPercentsAction:arrayPercentsAction
    })
})
}
function audcadfunction(){
  axios.get("https://in.investing.com/currencies/aud-cad-technical?timeFrame=60",{
    headers: {
      "host":"in.investing.com",
      "Origin":"https://in.investing.com",
      'Access-Control-Allow-Origin' : '*',
      "User-Agent":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0",
    }
  }).then((res)=>{
    const $ = cheerio.load(res.data)
      var arrayOfTitles =[];
      $('.col-title').toArray().map(k => {
        arrayOfTitles.push($(k).text())
      })
      console.log(arrayOfTitles)
      database.ref('/AUDCAD/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/AUDCAD/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/AUDCAD/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/AUDCAD/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/AUDCAD/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/AUDCAD/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/AUDCAD/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/AUDCAD/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/AUDCAD/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}






app.get('/', (req, res) => {
  res.send({"Keeplive":"keep running", 
  timeOfServer: moment().format("YYYY-MM-DD, hh:mm:ss"),
  time: moment().utcOffset("+05:30").format("YYYY-MM-DD, hh:mm:ss")
})
})

app.listen(process.env.PORT || PORT, () => {
    console.log('listening on *:5000');
});
  
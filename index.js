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
audchffunction();
audusdfunction();
audjpyfunction();
usdchffunction();
usdjpyfunction();
usdcadfunction();
eurgbpfunction();
eurchffunction();
eurjpyfunction();
cadjpyfunction();
nzdusdfunction();
nzdjpyfunction();
gbpaudfunction();
gbpjpyfunction();
timeCapture();
}, 4000);


function timeCapture(){
 var time= moment().utcOffset("+05:30").format("YYYY-MM-DD, hh:mm:ss")
 database.ref('/EURUSD/time').set({
  time:time
})
}

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
function audchffunction(){
  axios.get("https://in.investing.com/currencies/aud-chf-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/AUDCHF/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/AUDCHF/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/AUDCHF/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/AUDCHF/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/AUDCHF/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/AUDCHF/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/AUDCHF/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/AUDCHF/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/AUDCHF/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}
function audusdfunction(){
  axios.get("https://in.investing.com/currencies/aud-usd-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/AUDUSD/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/AUDUSD/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/AUDUSD/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/AUDUSD/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/AUDUSD/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/AUDUSD/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/AUDUSD/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/AUDUSD/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/AUDUSD/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}
function audjpyfunction(){
  axios.get("https://in.investing.com/currencies/aud-jpy-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/AUDJPY/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/AUDJPY/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/AUDJPY/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/AUDJPY/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/AUDJPY/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/AUDJPY/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/AUDJPY/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/AUDJPY/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/AUDJPY/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}


function usdchffunction(){
  axios.get("https://in.investing.com/currencies/usd-chf-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/USDCHF/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/USDCHF/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/USDCHF/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/USDCHF/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/USDCHF/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/USDCHF/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/USDCHF/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/USDCHF/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/USDCHF/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}

function usdjpyfunction(){
  axios.get("https://in.investing.com/currencies/usd-jpy-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/USDJPY/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/USDJPY/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/USDJPY/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/USDJPY/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/USDJPY/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/USDJPY/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/USDJPY/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/USDJPY/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/USDJPY/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}

function usdcadfunction(){
  axios.get("https://in.investing.com/currencies/usd-cad-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/USDCAD/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/USDCAD/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/USDCAD/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/USDCAD/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/USDCAD/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/USDCAD/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/USDCAD/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/USDCAD/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/USDCAD/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}


function eurgbpfunction(){
  axios.get("https://in.investing.com/currencies/eur-gbp-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/EURGBP/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/EURGBP/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/EURGBP/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/EURGBP/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/EURGBP/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/EURGBP/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/EURGBP/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/EURGBP/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/EURGBP/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}
function eurjpyfunction(){
  axios.get("https://in.investing.com/currencies/eur-jpy-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/EURJPY/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/EURJPY/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/EURJPY/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/EURJPY/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/EURJPY/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/EURJPY/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/EURJPY/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/EURJPY/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/EURJPY/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}

function eurchffunction(){
  axios.get("https://in.investing.com/currencies/eur-chf-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/EURCHF/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/EURCHF/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/EURCHF/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/EURCHF/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/EURCHF/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/EURCHF/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/EURCHF/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/EURCHF/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/EURCHF/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}

function nzdusdfunction(){
  axios.get("https://in.investing.com/currencies/nzd-usd-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/NZDUSD/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/NZDUSD/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/NZDUSD/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/NZDUSD/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/NZDUSD/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/NZDUSD/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/NZDUSD/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/NZDUSD/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/NZDUSD/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}

function cadjpyfunction(){
  axios.get("https://in.investing.com/currencies/cad-jpy-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/CADJPY/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/CADJPY/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/CADJPY/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/CADJPY/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/CADJPY/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/CADJPY/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/CADJPY/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/CADJPY/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/CADJPY/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}


function gbpaudfunction(){
  axios.get("https://in.investing.com/currencies/gbp-aud-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/GBPAUD/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/GBPAUD/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/GBPAUD/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/GBPAUD/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/GBPAUD/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/GBPAUD/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/GBPAUD/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/GBPAUD/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/GBPAUD/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}
function gbpjpyfunction(){
  axios.get("https://in.investing.com/currencies/gbp-jpy-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/GBPJPY/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/GBPJPY/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/GBPJPY/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/GBPJPY/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/GBPJPY/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/GBPJPY/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/GBPJPY/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/GBPJPY/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/GBPJPY/arrayPercentsAction').set({
        arrayPercentsAction:arrayPercentsAction
      })
  })
}
function nzdjpyfunction(){
  axios.get("https://in.investing.com/currencies/nzd-jpy-technical?timeFrame=60",{
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
      // console.log(arrayOfTitles)
      database.ref('/NZDJPY/titles').set({
        titles:arrayOfTitles
      })
  
      var arrayPercentsSell =[];
      $('.col-sell').toArray().map(k => {
        arrayPercentsSell.push($(k).text())
      })
      console.log(arrayPercentsSell)
      database.ref('/NZDJPY/PercentsSell').set({
        PercentsSell:arrayPercentsSell
      })
  
      var arrayPercentsnatural =[];
      $('.col-natural').toArray().map(k => {
        arrayPercentsnatural.push($(k).text())
      })
      console.log(arrayPercentsnatural)
      database.ref('/NZDJPY/Percentsnatural').set({
        Percentsnatural:arrayPercentsnatural
      })
  
      var arrayPercentsbuy =[];
      $('.col-buy').toArray().map(k => {
        arrayPercentsbuy.push($(k).text())
      })
      console.log(arrayPercentsbuy)
      database.ref('/NZDJPY/arrayPercentsbuy').set({
        arrayPercentsbuy:arrayPercentsbuy
      })
  
      var arrayPercentsActionsTOP =[];
      $('.col-action').toArray().map(k => {
        arrayPercentsActionsTOP.push($(k).text())
      })
      console.log(arrayPercentsActionsTOP)
      database.ref('/NZDJPY/arrayPercentsActionsTOP').set({
        arrayPercentsActionsTOP:arrayPercentsActionsTOP
      })
  
  
      var arrayPercentssimpleValue =[];
      $('.col-simple').toArray().map(k => {
        arrayPercentssimpleValue.push($(k).text())
      })
      console.log(arrayPercentssimpleValue)
      database.ref('/NZDJPY/arrayPercentssimpleValue').set({
        arrayPercentssimpleValue:arrayPercentssimpleValue
      })
  
  
      var arrayPercentsExpValue =[];
      $('.col-exponential').toArray().map(k => {
        arrayPercentsExpValue.push($(k).text())
      })
      console.log(arrayPercentsExpValue)
      database.ref('/NZDJPY/arrayPercentsExpValue').set({
        arrayPercentsExpValue:arrayPercentsExpValue
      })
  
      var arrayPercentsamount =[];
      $('.col-amount').toArray().map(k => {
        arrayPercentsamount.push($(k).text())
      })
      console.log(arrayPercentsamount)
      database.ref('/NZDJPY/arrayPercentsamount').set({
        arrayPercentsamount:arrayPercentsamount
      })
  
      var arrayPercentsAction =[];
      $('.col-sentiment').toArray().map(k => {
        arrayPercentsAction.push($(k).text())
      })
      console.log(arrayPercentsAction)
      database.ref('/NZDJPY/arrayPercentsAction').set({
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
  
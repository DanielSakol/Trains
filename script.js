var config = {
    apiKey: "AIzaSyBXpM2k688OMMgdRp7aFZ6_D_13kzcXcGQ",
    authDomain: "trains-1d968.firebaseapp.com",
    databaseURL: "https://trains-1d968.firebaseio.com",
    projectId: "trains-1d968",
    storageBucket: "trains-1d968.appspot.com",
    messagingSenderId: "924405177000"
  };
  firebase.initializeApp(config);
//link firebase!
var database = firebase.database();

//time stuff
    // Assumptions
    var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
 




//global vars
var trainName = "";
var trainDest = "";
var frequency = 0;
var nextArrival = "";
var minutesAway = "";
//jquery globals
var arrFreq = $("#freq");
console.log(arrFreq);



//user submit:
//train name
//destination
//first train time -- militart time
//frequency -- in minutes

//calulate next train arrival
//multipule users must be able to  view same trains
/*
 * In your JavaScript, all your code must be inside device ready event
 */
 console.log("=== Scanning for Beacons ===");
 console.log(ibeacon._lexicons[ibeacon._lang].ProximityImmediate);
document.addEventListener('deviceready', function() {

  document.getElementById("text").innerHTML = "Searching for Beacons...";

  /*
   * Then, you have to call the initialize() method.
   * You must add the identifiers of all the beacons you have to scan.
   */
  ibeacon.initialize({
    /* The identifiers of all the beacons to scan */
    regions: [
      {
        //ID of my fancy little Beacon.
        id:'Beacon 17:A0:5F', // Specify any Name you wish to use
        uuid:'F0018B9B-7509-4C31-A905-1A27D39C003C', //Get this from your Beacon
        major: 57591,
        minor: 39029
      }
    ],
    /* The actions to do when a beacon is detected,
       you can do different things depending on the proximity */
    actions: function(beacon, identifier) {
      if (beacon.proximity === 'ProximityImmediate') {
        document.getElementById("text").innerHTML = ibeacon._lexicons[ibeacon._lang].ProximityImmediate + identifier;
        console.log('I am very next to: ' + identifier);
      }
      else if (beacon.proximity === 'ProximityNear') {
        document.getElementById("text").innerHTML = ibeacon._lexicons[ibeacon._lang].ProximityNear + identifier;
        console.log('I am next to: ' + identifier);
      }
      else if (beacon.proximity === 'ProximityFar') {
        document.getElementById("text").innerHTML = ibeacon._lexicons[ibeacon._lang].ProximityFar + identifier;
        console.log('I am far from: ' + identifier);
      }
    }
  });
});

/*
 * Your can start scanning for beacons using the ibeaconInitialized event and the startScan() method.
 * This event is fired at he first launch and each time your application is retreived from the background.
 */
document.addEventListener('ibeaconInitialized', function() {
  ibeacon.startScan();
}, false);

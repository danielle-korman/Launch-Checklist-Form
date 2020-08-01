// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   let button = document.getElementById("formSubmit");

   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoKg = document.querySelector("input[name=cargoMass]");

      //check if any field is empty
      if (pilot.value === "" || copilot.value === "" || fuelLevelInput.value === "" || cargoKg.value === "") {
         event.preventDefault();
         alert("All fields are required!");
         // stop the form submission

      }
      //check that pilot & copilot are strings, fuel level and cargo are numbers
      else if (isNaN(Number(pilot.value)) === false || isNaN(Number(copilot.value)) === false || isNaN(Number(fuelLevelInput.value)) === true || isNaN(Number(cargoKg.value)) === true) {
         event.preventDefault();
         alert("Incorrect entry.");
         
      }

      else {
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let faultyItems = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");

      pilotStatus.innerHTML = `${pilot.value} is ready for launch`;
      copilotStatus.innerHTML = `${copilot.value} is ready for launch`;

      if (Number(fuelLevelInput.value) < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level is too low for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

      }
      if (Number(cargoKg.value) > 10000) {
         faultyItems.style.visibility = "visible"; 
         cargoStatus.innerHTML = "Too much mass for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      }
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

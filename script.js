// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   let button = document.getElementById("formSubmit");

   button.addEventListener("click", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoKg = document.querySelector("input[name=cargoMass]");

      //check if any field is empty
      if (pilot.value === "" || copilot.value === "" || fuelLevelInput.value === "" || cargoKg.value === "") {
         alert("All fields are required!");
         // stop the form submission
         formSubmit.preventDefault();
      }
      //check that pilot & copilot are strings, fuel level and cargo are numbers
      if (isNaN(Number(pilot.value)) === false || isNaN(Number(copilot.value)) === false || isNaN(Number(fuelLevelInput.value)) === true || isNaN(Number(cargoKg.value)) === true) {
         alert("Incorrect entry.");
         formSubmit.preventDefault();
      }
   // });

   // form.addEventListener("submit", function(){
      document.getElementById("pilotStatus").innerHTML = `${pilot.value} is ready for launch`;
      document.getElementById("copilotStatus").innerHTML = `${copilot.value} is ready for launch`;

      if (Number(fuelLevelInput.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";

      }
      if (Number(cargoKg.value) > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"; 
         document.getElementById("cargoStatus").innerHTML = "Too much mass for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
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

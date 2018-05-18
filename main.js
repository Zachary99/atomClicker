//Getting atoms

var Atoms = 9999999;
var Elements = 0;
var Molecules = 0;
var Compunds = 0;

var AutoClick = Elements + (Molecules * 2) + (Compunds * 3);


function AtomClick(number) {
  Atoms = Atoms + number;
  document.getElementById("Atoms").innerHTML = Atoms;
};

function buyElement() {
  var ElementCost = Math.floor(10 * Math.pow(1.3, Elements)); //works out the cost of this Element
  if (Atoms >= ElementCost) { //checks that the player can afford the Element
    Elements++; //increases number of Elements
    Atoms -= ElementCost; //removes the Atoms spent
    document.getElementById('Elements').innerHTML = Elements; //updates the number of Elements for the user
    document.getElementById('Atoms').innerHTML = Atoms; //updates the number of Atoms for the user
  };
  var nextECost = Math.floor(10 * Math.pow(1.3, Elements)); //works out the cost of the next Element
  document.getElementById('ElementCost').innerHTML = nextECost; //updates the Element cost for the user
};


function buyMolecule() {
  var MoleculeCost = Math.floor(100 * Math.pow(1.5, Molecules)); //works out the cost of this Molecule
  if (Atoms >= MoleculeCost) { //checks that the player can afford the Molecule
    Molecules++; //increases number of Molecules
    Atoms -= MoleculeCost; //removes the Atoms spent
    document.getElementById('Molecules').innerHTML = Molecules; //updates the number of Molecules for the user
    document.getElementById('Atoms').innerHTML = Atoms; //updates the number of Atoms for the user
  };
  var nextMCost = Math.floor(100 * Math.pow(1.5, Molecules)); //works out the cost of the next Molecule
  document.getElementById('MoleculeCost').innerHTML = nextMCost; //updates the Molecule cost for the user
};


function buyCompund() {
  var CompundCost = Math.floor(1000 * Math.pow(1.75, Compunds)); //works out the cost of this Compund
  if (Atoms >= CompundCost) { //checks that the player can afford the Compund
    Compund++; //increases number of Compunds
    Atoms -= CompundCost; //removes the Atoms spent
    document.getElementById('Compunds').innerHTML = Compunds; //updates the number of Compunds for the user
    document.getElementById('Atoms').innerHTML = Atoms; //updates the number of Atoms for the user
  };
  var nextCCost = Math.floor(1000 * Math.pow(1.75, Compund)); //works out the cost of the next Compund
  document.getElementById('CompundCost').innerHTML = nextCCost; //updates the Compund cost for the user
};


window.setInterval(function() {

  AtomClick(Elements + (Molecules * 2)+(Compunds * 3));

}, 1000);

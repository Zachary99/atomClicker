//Initalising variables

var Atoms = 9999999;
var Elements = 0;
var Molecules = 0;
var Compunds = 0;
var Aloys =  0;
var matter = 0;

// clicking to get atoms
var AutoClick = Elements + (Molecules * 2) + (Compunds * 3) + (Aloys * 4) + (Matter * 5);
document.getElementById('AutoClick').innerHTML = AutoClick;

function AtomClick(number) {
  Atoms = Atoms + number;
  document.getElementById("Atoms").innerHTML = Atoms;
};

//upgrades
//Elements
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

//Molecules
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

//Compunds
function buyCompund() {
  var CompundCost = Math.floor(1000 * Math.pow(1.75, Compunds)); //works out the cost of this Compund
  if (Atoms >= CompundCost) { //checks that the player can afford the Compund
    Compunds++; //increases number of Compunds
    Atoms -= CompundCost; //removes the Atoms spent
    document.getElementById('Compunds').innerHTML = Compunds; //updates the number of Compunds for the user
    document.getElementById('Atoms').innerHTML = Atoms; //updates the number of Atoms for the user
  };
  var nextCCost = Math.floor(1000 * Math.pow(1.75, Compunds)); //works out the cost of the next Compund
  document.getElementById('CompundCost').innerHTML = nextCCost; //updates the Compund cost for the user
};

//Aloys
function buyAloy() {
  var AloyCost = Math.floor(10000 * Math.pow(1.85, Aloys)); //works out the cost of this Aloy
  if (Atoms >= AloyCost) { //checks that the player can afford the Aloy
    Aloys++; //increases number of Aloys
    Atoms -= AloyCost; //removes the Atoms spent
    document.getElementById('Aloys').innerHTML = Aloys; //updates the number of Aloys for the user
    document.getElementById('Atoms').innerHTML = Atoms; //updates the number of Atoms for the user
  };
  var nextACost = Math.floor(1000 * Math.pow(1.85, Aloys)); //works out the cost of the next Aloy
  document.getElementById('AloyCost').innerHTML = nextACost; //updates the Aloy cost for the user
};

//Matter
function buyMatter() {
  var MatterCost = Math.floor(10000 * Math.pow(1.9, Matter)); //works out the cost of the Matter
  if (Atoms >= MatterCost) { //checks that the player can afford the Matter
    Matter++; //increases amount of Matter
    Atoms -= MatterCost; //removes the Atoms spent
    document.getElementById('Matter').innerHTML = Matter; //updates the amount of Matter for the user
    document.getElementById('Atoms').innerHTML = Atoms; //updates the number of Atoms for the user
  };
  var nextMaCost = Math.floor(1000 * Math.pow(1.9, Matter)); //works out the cost of the next Matter
  document.getElementById('MatterCost').innerHTML = nextMaCost; //updates the Matter cost for the user
};

//Next Upgrade Dark Matter (DarkMatter or DMatter)
//Auto click
window.setInterval(function() {

  AtomClick(Elements + (Molecules * 2) + (Compunds * 3) + (Aloys * 4) + (Matter * 5));

}, 1000);

//on page load function
var name = "";
function onLoad() {
    name = prompt("Please name your Universe", '');
    if (name === null) {
    nameBlank();
    }
    if (name === "") {
            nameBlank();
        } else {
            document.getElementById("name").innerHTML = ""  + name;
        } 
    }



function nameBlank() {
    name = prompt("You left the name blank. Please name your Universe", '');
    if (name === null) {
        nameBlank();
    }
    if (name === "") {           
        nameBlank();
    } else {
        document.getElementById("name").innerHTML = ""  + name;
    }
}

function rename() {
    name = prompt("Please name your Universe", '');
    if (name === "") {
        name = prompt("You left the name blank. Please name your Universe. If you want to cancel please click 'Cancel'", '');
    } else {
        document.getElementById("name").innerHTML = ""  + name;
    }
}

//Clicking
var atoms = 9999;
var clickValue = 1;

function atomClick() {
  atoms = atoms + clickValue;
  document.getElementById("atoms").innerHTML = abbrNum(atoms , true , 2);
};

//upgrades
function upgradeClickValue () {
clickValue = clickValue * 2;
};

//Auto click modifiers
//create veriables
var elmts = 0;
var molecules = 0;

function buyElement() {
    var elementCost = Math.floor(10 * Math.pow(1.1,elmts));
    if(atoms >= elementCost) {
        elmts++;
    	atoms = atoms - elementCost;
        document.getElementById('elmts').innerHTML = abbrNum(elmts , true , 2);
        document.getElementById('atoms').innerHTML = abbrNum(atoms , true , 2);
    };
    var nextECost = Math.floor(10 * Math.pow(1.1,elmts));
    document.getElementById('elementCost').innerHTML = abbrNum(nextECost , true , 2);
};

function buyMolecule() {
    var moleculeCost = Math.floor(100 * Math.pow(1.2,molecules));
    if(atoms >= moleculeCost) {
        molecules++;
        atoms = atoms - moleculeCost;
        document.getElementById('molecules').innerHTML = abbrNum(molecules , true , 2);
        document.getElementById('atoms').innerHTML = abbrNum(atoms , true , 2);
    };
    var nextMCost = Math.floor(100 * Math.pow(1.2,molecules));
    document.getElementById('moleculeCost').innerHTML = abbrNum(nextMCost , true , 2);
};

window.setInterval(function() {

    data = atoms + "." + clickValue + "." + elmts + "." + molecules;

    atoms = atoms + (elmts * 1) + (molecules * 2);
    document.getElementById('atoms').innerHTML = abbrNum(atoms , true , 2);

    document.title  = "Atoms: " + abbrNum(atoms , true , 2);

}, 1000);

//round numbers
const COUNT_ABBRS = [ '', 'K', 'M', 'B', 'T', 'Q', 'Qi', 'Se', 'Sp', 'Ot', 'No', 'De'];

function abbrNum(count, withAbbr = false, decimals = 2) {
    const i     = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        result += `${COUNT_ABBRS[i]}`; 
    }
    return result;
}

function reset() {
    atoms = 0;
    clickValue = 1;
    elmts = 0;
    elementCost = 10;
    molecules = 0;
    moleculeCost = 100;
}

//initalising save var
var data = atoms + "." + clickValue + "." + elmts + "." + molecules;
console.log(data);
var encodedString = btoa(data);


function save() {
    // Encode the String
    encodedString = btoa(data);
    console.log(encodedString);
    alert("Save Code: " + encodedString);
}
function load() {
    var pastedValue = prompt("Past Your Save Code Here.");
    // Decode the String
    if (pastedValue === "") {
        alert("You left the text box blank.");
    } else {
        if (pastedValue.match(/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/)) {
            var decodedString = atob(pastedValue);
            console.log(decodedString);
            var splitRslt = decodedString.split(".");
            console.log(splitRslt)
            atoms = splitRslt[0];
            clickValue = splitRslt[1];
            elmts = splitRslt[2];
            molecules = splitRslt[3];
        } else {
            alert("Please enter a valid save code.");
        }
    }
}
<?php
    include_once 'header.php';
?>
<!DOCTYPE html>

</html>

<head>
  <link rel="stylesheet" type="text/css" href="index.css" />
  <title>Atoms: 0</title>
</head>

<body onload="onLoad()">
  <div class="content">
    <div class="inline" id="clicker">
      <br> Atoms: <span id="atoms">0</span>
      <br>
      <input type="image" class="atom-image" src="https://theatomandperiodictable.wikispaces.com/file/view/220px-Stylised_Lithium_Atom.svg.png/297637780/220px-Stylised_Lithium_Atom.svg.png" onClick="atomClick()">
    </div>

    <div class="inline" id="upgrades">
      <a onclick="rename()" href=""><span id="name">unnamed</span></a>
    </div>

    <div class="inline" id="modifiers">
      <button onClick="buyElement()" id="BuyModifier" style="height: 50px; width: 201px;">Buy Element</button><br /> Elements: <span id="elmts">0</span>
      <br />
      Cost: <span id="elementCost">10</span>
      <br />

      <button onClick="buyMolecule()" id="BuyModifier" style="height: 50px; width: 201px;">Buy Molecule</button>
      <br />
      Molecules: <span id="molecules">0</span>
      <br />
      Cost: <span id="moleculeCost">100</span>
    </div>
  </div>
  <br class="clearBoth" />
  <script type="text/javascript" src="index.js"></script>
</body>

</html>

<?php
    include_once 'footer.php';
?>
// Values for large rebirth map
var rebirthPOI = [[2214, 293],[2288, 548],[2233, 675],[2108, 474],[1973, 542],[1943, 401],[1714, 492],[2131, 609],[1991, 744],[2148, 920],[2011, 1037],[2008, 1102],[1981, 1133],[1872, 1226],[1823, 1294],[1759, 1358],[1724, 1495],[1621, 1424],[1570, 1469],[1515, 1469],[1453, 1461],[1387, 1397],[1495, 1316],[1639, 1224],[1710, 1183],[1579, 1166],[1329, 1294],[1431, 1256],[1334, 1178],[1338, 1108],[1369, 1001],[1443, 914],[1308, 877],[1315, 795],[1446, 640],[1700, 700],[1664, 1057],[1760, 1005],[1732, 905],[1863, 835],[1202, 1469],[1089, 1437],[915, 1450],[1069, 1562],[1023, 1662],[997, 1503],[1117, 1312],[1599, 768],[2270, 465],[1846, 1409],[2246, 842]];
var initialWidth = 3413;
var initialHeight = 1920;

// Values for small rebirth map
var rebirthPOIsm = [[1471, 303],[1359, 468],[1229, 539],[1189, 385],[968, 489],[1529, 463],[1542, 559],[1487, 672],[1348, 607],[1511, 841],[1398, 929],[1267, 1039],[1253, 1113],[1124, 1227],[1080, 1288],[982, 1492],[1120, 1384],[875, 1422],[831, 1474],[763, 1467],[703, 1467],[649, 1393],[748, 1318],[684, 1252],[582, 1291],[587, 1182],[594, 1104],[617, 1007],[697, 906],[836, 1151],[894, 1221],[965, 1182],[926, 1060],[999, 1003],[996, 896],[1110, 839],[855, 760],[1240, 740],[672, 632],[563, 856],[464, 1446],[279, 1668],[163, 1455],[273, 1510],[324, 1562],[347, 1433],[379, 1313]]
var initialWidthsm = 1800;
var initialHeightsm = 1920;


// Switches to small map under 1000px
var SMLIMIT = 1000;

function getRandomPOI() {
  if ($(".map").width() < SMLIMIT) {
    return rebirthPOIsm[Math.floor((Math.random() * rebirthPOIsm.length) + 1)];
  } else {
    return rebirthPOI[Math.floor((Math.random() * rebirthPOI.length) + 1)];
  }
}

var randomPOI = getRandomPOI();


function displayX() {
  var mapWidth = $(".map").width();
  var initW = mapWidth < SMLIMIT ? initialWidthsm : initialWidth;
  var initH = mapWidth < SMLIMIT ? initialHeightsm : initialHeight;

  // Scale the position of the X due to map size change
  var widthScaling = mapWidth / initW;
  var heightScaling = $(".map").height() / initH;
  // Scale the position of the X due to font size change
  var xWidthOffset = $(".x").width() * 0.5
  var xHeightOffset = ($(".x").height() * (3/7)) + 4

  // It seems font size does not scale linearly
  if (mapWidth < 1130 && mapWidth > 650) {
    xHeightOffset = xHeightOffset - 12
  } else if (mapWidth < 650) {
    xHeightOffset = xHeightOffset - 18
  }

  $(".x").css({
    left: randomPOI[0] * widthScaling - xWidthOffset + 'px', 
    top: randomPOI[1] * heightScaling - xHeightOffset + 'px', 
    display: 'inline'
  });
}

function pickdrop() {
  randomPOI = getRandomPOI();
  displayX();
}


$(window).on("load", function() {
  pickdrop();
  $(".click").click(pickdrop);
});

$( window ).resize(displayX);
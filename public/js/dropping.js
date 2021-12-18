var pois = [[608, 67],[667, 68],[600, 97],[646, 93],[705, 110],[665, 133],[736, 157],[810, 184],[860, 212],[579, 166],[629, 172],[691, 172],[749, 209],[917, 222],[776, 233],[796, 270],[874, 268],[508, 135],[465, 124],[428, 169],[472, 181],[384, 159],[554, 239],[381, 200],[359, 157],[347, 167],[329, 174],[324, 199],[371, 242],[305, 274],[321, 317],[250, 357],[198, 367],[158, 390],[156, 423],[205, 406],[244, 387],[296, 412],[369, 410],[323, 447],[285, 521],[336, 512],[381, 465],[351, 351],[446, 278],[586, 252],[677, 228],[397, 364],[433, 334],[488, 300],[487, 357],[556, 331],[432, 416],[469, 421],[518, 426],[557, 468],[488, 488],[452, 525],[403, 520],[590, 379],[638, 339],[695, 308],[773, 343],[703, 366],[671, 428],[640, 452],[600, 465],[730, 427],[697, 464],[589, 515],[661, 505],[771, 501],[832, 302],[945, 320],[892, 328],[825, 340],[911, 346],[867, 376],[780, 404],[798, 432],[938, 373],[856, 422],[892, 449],[908, 491],[146, 448],[216, 443],[196, 474],[157, 488],[215, 488],[252, 499],[197, 542],[261, 546],[308, 575],[242, 603],[350, 607],[196, 603],[138, 676],[172, 663],[227, 665],[194, 716],[252, 729],[237, 763],[418, 590],[400, 654],[327, 686],[366, 686],[452, 690],[347, 708],[335, 731],[370, 734],[408, 728],[469, 751],[301, 760],[367, 770],[327, 805],[389, 791],[374, 855],[512, 591],[591, 586],[672, 550],[836, 527],[505, 632],[582, 643],[632, 629],[671, 595],[770, 586],[833, 572],[515, 693],[624, 663],[680, 649],[844, 619],[584, 707],[748, 674],[775, 690],[836, 676],[524, 742],[676, 718],[734, 707],[747, 720],[542, 790],[575, 771],[620, 763],[688, 772],[752, 772],[819, 745],[674, 841],[535, 858],[890, 614],[911, 648],[869, 681],[918, 680],[898, 719],[931, 733],[901, 755],[849, 762],[878, 794],[910, 792],[442, 795],[476, 791],[469, 846],[397, 903],[437, 886],[481, 883],[455, 971],[488, 944],[509, 930],[530, 921],[513, 977],[586, 865],[652, 877],[593, 929],[639, 947],[687, 913],[720, 903],[755, 893],[584, 1000],[645, 998],[681, 971],[720, 946],[751, 923],[793, 912],[722, 983],[759, 950],[791, 944],[794, 974],[777, 1001],[748, 1020],[793, 1025],[783, 847],[822, 795],[833, 854],[877, 855],[832, 916],[925, 854],[900, 872],[877, 899],[867, 935],[822, 961],[847, 971],[882, 968],[839, 1003]];
var initialWidth = 1130
var initialHeight = 1080
var randomPOI = pois[Math.floor((Math.random() * pois.length) + 1)];


function displayX() {
  var widthScaling = $(".map").width() / initialWidth;
  var heightScaling = $(".map").height() / initialHeight;

  $(".x").css({left: randomPOI[0] * widthScaling - 17 + 'px', top: randomPOI[1] * heightScaling - 45 + 'px', display: 'inline'});
}

function pickdrop() {
  randomPOI = pois[Math.floor((Math.random() * pois.length) + 1)];
  displayX();
}


$(window).on("load", function() {
  pickdrop();
  $(".map-holder").click(pickdrop);
});

$( window ).resize(displayX);
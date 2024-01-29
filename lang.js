$(function () {
	var key = "language" + "=";
	var cookie = document.cookie + ";";
	var find = cookie.indexOf(key);
	var offset = find + key.length;
	var end = cookie.indexOf(";", offset);
	var val = unescape(cookie.substring(offset, end));
	if (val == "en") {
	  $(".en").show();
	  $(".ja").hide();
	} else {
	  $(".ja").show();
	  $(".en").hide();
	}
  
	$(".language-btn-jp").click(function () {
	  $(".ja").show();
	  $(".en").hide();
	  document.cookie = "language=ja;";
	});
  
	$(".language-btn-en").click(function () {
	  $(".ja").hide();
	  $(".en").show();
	  document.cookie = "language=en;";
	});
  });
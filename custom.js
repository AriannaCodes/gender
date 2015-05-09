var screens = [{name:"first",
				text:"Hello", 
				options: [{code:"A",screen:"second"},
						  {code:"B",screen:"third"}]},
			   {name:"second",
			   	text:"Second screen",
			   	options:[]},
			   {name:"third",
			    text:"third!",
			    options:[]}];

function genScreen(vals) {
	first =  "<p>" + vals.text + "</p>";
	options = "";
	for (var i = 0; i < vals.options.length; i++) {
		options = options + "<a href='#' class='next' screen='" + vals.options[i].screen
				  + "' > >>> " + vals.options[i].code + "</a><br />";
	}
	return first + options;
}

$(".next").click(function(e){
	// iterate to find correct screen
	var q = $(".next").attr("screen");
	var pl = -1;
	for (var i = 0; i < screens.length; i++) {
		if (screens[i].name == q) {
			pl = i;
		}
	}
	if (pl == -1) {
		alert("Screen not found...");
	}
	$("#changeable").html(genScreen(screens[pl]));
});
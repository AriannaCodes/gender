var screens = [{name:"first",
				text:"Hello, --name--. What are you concentrating in?", 
				options: [{code:"Click on me!",screen:"second"},
						  {code:"Other option",screen:"third"},
						  {code:"This is another statement",screen:"fun"},
						  {code:"What's going on here",screen:"statistic"}]},
			   {name:"second",
			   	text:"This is the second screen. It gives you some options.",
			   	options:[]},
			   {name:"third",
			    text:"This is the third screen. Why did you get here?",
			    options:[]},
			   {name:"fun",
			    text:"Why won't people on Tinder message me back?",
			    options:[]},
			   {name:"statistic",
			    text:"This is a statistic!",
			    options:[]}];

var player = "Emma";

function genScreen(vals) {
	nameInserted = vals.text.replace("--name--", player);
	first =  "<p>" + nameInserted + "</p>";
	options = "";
	for (var i = 0; i < vals.options.length; i++) {
		options = options + "<a href='#' id='next' screen='" + vals.options[i].screen
				  + "' > >>> " + vals.options[i].code + "</a><br />";
	}
	return first + options;
}

$("#start").click(function(e){
	player = $("#player").val();
	$("#changeable").html(genScreen(screens[0]));
});

$("#changeable").on("click", "#next", function(e){
	// iterate to find correct screen
	var q = $(this).attr("screen");
	var pl = -1;
	for (var i = 0; i < screens.length; i++) {
		if (screens[i].name == q) {
			pl = i;
		}
	}
	if (pl == -1) {
		alert("Screen not found...");
	}
	else {
		$("#changeable").html(genScreen(screens[pl]));
	}
});
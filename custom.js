var screens = [{name:"class_selection",
				text:"Hello, --name--. So, what do you think you're going to major " +
					  "in? You haven't declared yet, but your roommate wants to know.", 
				options: [{code:"Computer Science!",screen:"first_day"},
						  {code:"Engineering",screen:"first_day"},
						  {code:"Mathematics",screen:"first_day"},
						  {code:"Physics",screen:"first_day"},
						  {code:"Biology",screen:"first_day"},
						  {code:"English",screen:"end_game"}]},
			   {name:"first_day",
			   	text:"It's your first day of classes, and you're going to your " + 
			   		  "first class, --class--. Where do you sit?",
			   	options:[{code:"Next to a boy",screen:"boy_convo"},
			   			 {code:"Next to a girl",screen:"girl_convo"}]},
			   {name:"boy_convo",
			    text:"The boy you sit down next to seems pretty cool.",
			    options:[]},
			   {name:"girl_convo",
			    text:"The girl you sit down next to seems pretty cool.",
			    options:[]},
			   {name:"end_game",
			    text:"Well, I hate to say this, but English isn't a science.",
			    options:[]}];

var player = "Emma";
var major = 0; // 0 is CS, 1 is Engineering, 2 is Math
			   // 3 is Physics, 4 is Biology
var classes = ["CS50", "ES51", "Math 21b", "PS12", "LS1a"];

function genScreen(vals) {
	nameInserted = vals.text.replace("--name--", player);
	classInserted = nameInserted.replace("--class--", classes[major]);
	first =  "<p>" + classInserted + "</p>";
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

$("#refresh").click(function(e){
	location.reload();
});
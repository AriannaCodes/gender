/* Various screens in the game */
var screens = [{name:"class_selection",
				text:"Hello, --name--. So, what do you think you're going to major " +
					  "in? You haven't declared yet, but your roommate wants to know.", 
				options: [{code:"Computer Science",type:"classes",screen:"0"},
						  {code:"Engineering",type:"classes",screen:"1"},
						  {code:"Mathematics",type:"classes",screen:"2"},
						  {code:"Physics",type:"classes",screen:"3"},
						  {code:"Biology",type:"classes",screen:"4"},
						  {code:"English",type:"classes",screen:"english_major"}],
				source: ""},

			   {name:"first_day",
			   	text:"It's your first day of classes, and you're going to your " + 
			   		  "9am class, --class--. Where do you sit?",
			   	options:[{code:"Next to a boy",type:"next",screen:"boy_convo"},
			   			 {code:"Next to a girl",type:"next",screen:"girl_convo"}],
			   	source: ""},

			   {name:"english_major",
			    text:"This is outside the scope of our game.",
			    options:[],
			    source: ""},

			    {name:"boy_convo",
			    text:"The boy you sit down next to seems pretty cool.",
			    options:[],
			    source: ""},

			   {name:"girl_convo",
			    text:"The girl you sit down next to seems pretty cool.",
			    options:[],
			    source: ""},

			    {name:"major_percentages",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"friday",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"go_out",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"stay_in",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"unlocking",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"office_hours",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"midterm",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"classroom",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"boy_convo2",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"girl_convo2",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"attrition",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"internship",
			    text:"...",
			    options:[],
			    source: ""},

				{name:"final_project",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"hackathon",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"lab_work",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"secretary",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"winter_break",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"good_odds",
			    text:"...",
			    options:[],
			    source: ""},

			    {name:"second_semester",
			    text:"...",
			    options:[],
			    source: ""}];

/* Info about the player, with default name */
var player = "Emma";
var major = 0; // 0 is CS, 1 is Engineering, 2 is Math
			   // 3 is Physics, 4 is Biology
var classes = ["CS50", "ES51", "Math 21b", "PS12", "LS1a"];

/* Generates the screen requested */
function genScreen(vals) {
	nameInserted = vals.text.replace("--name--", player);
	classInserted = nameInserted.replace("--class--", classes[major]);
	first =  "<p>" + classInserted + "</p>";
	options = "";
	for (var i = 0; i < vals.options.length; i++) {
		options = options + "<a href='#' id='" + vals.options[i].type + 
							 "' screen='" + vals.options[i].screen +
							 "' > >>> " + vals.options[i].code + 
						     "</a><br />";
	}
	if (vals.source != "") {
		source = "<div id='source'>(" + vals.source +")</div>";
	}
	else {
		source = "";
	}
	return first + options + source;
}

/* Iterates through screens to find correct one */
function changeTo(q) {
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
		$("#changeable").fadeOut(300, function() {
			$("#changeable").html(genScreen(screens[pl]));
			$("#changeable").fadeIn(600);
		});
	}
}

/* Different actions for different pages */
$("#start").click(function(e){
	if ($("#player").val() != "") {
		player = $("#player").val();
	}
	changeTo("class_selection");
});

$("#changeable").on("click", "#classes", function(e){
	if ($(this).attr("screen") != "english_major") {
		major = parseInt($(this).attr("screen"));
		changeTo("first_day");
	}
	else {
		changeTo("end_game");
	}
});

$("#changeable").on("click", "#next", function(e){
	var q = $(this).attr("screen");
	changeTo(q);
});

/* Refreshes the page! */
$("#refresh").click(function(e){
	location.reload();
});
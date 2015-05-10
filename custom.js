/* Various screens in the game */
var screens = [{name:"class_selection",
				text:"Hello, --name--. What do you think you're going to major " +
					  "in? You haven't declared yet, but your roommate wants to know.", 
				options: [{code:"Computer Science",type:"classes",screen:"0"},
						  {code:"Engineering",type:"classes",screen:"1"},
						  {code:"Mathematics",type:"classes",screen:"2"},
						  {code:"Physics",type:"classes",screen:"3"},
						  {code:"Biology",type:"classes",screen:"4"},
						  {code:"English",type:"classes",screen:"english_major"}],
				source: ""},

			   {name:"english_major",
			    text:"This is outside the scope of our game -- while students" + 
			    	 " in other majors also experience sexism and discrimination," +
			    	 " we have elected to focus solely on STEM fields.",
			    options:[],
			    source: ""},

			   {name:"major_percentages",
			    text:"18.2% of Computer Science, 19.2% of Engineering, 19.1% of " +
			         "Physics, 43% of Math, and 58% of Biology majors are female.",
			    options:[{code:"",type:"next",screen:"first_day"}],
			    source: "NCG Project, Randal Olson"},		

			   {name:"first_day",
			   	text:"It's your first day of classes, and you're going to your " + 
			   		  "9am class, --class--. Where do you sit?",
			   	options:[{code:"Next to a boy",type:"next",screen:"boy_convo"},
			   			 {code:"Next to a girl",type:"next",screen:"girl_convo"}],
			   	source: ""},	    

			    {name:"boy_convo",
			    text:"The boy you sit down next to nods at you, then looks down " +
			    	  "at his laptop. When the professor starts talking, he sighs. <br />" + 
			    	  "He says, \"I hope the whole semester isn't like this. I knew this " + 
			    	  "<em>years</em> ago.\"",
			    options:[{code:"\"Well, I didn't.\"",type:"next",screen:"boy_convoA"},
			   			 {code:"\"Oh....\"",type:"next",screen:"boy_convoB"}],
			    source: ""},

			   {name:"girl_convo",
			    text:"The girl you sit down next to smiles at you. \"I've never taken " +
			    	 "a class anything like --class-- before, have you?\" she asks.",
			    options:[{code:"\"No! God, I thought I was the only one.\"",
			    		  type:"next",screen:"girl_convoA"},
			   			 {code:"\"Oh, I've done a few things before...\"",
			   			  type:"next",screen:"girl_convoB"}],
			    source: ""},

			    {name:"experience",
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
		changeTo("major_percentages");
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
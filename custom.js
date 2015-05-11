/* Various screens in the game */
var screens = [
{name:"class_selection",
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
text:"In 2013, 18.2% of Computer Science, 19.2% of Engineering, 19.1% of " +
     "Physics, 43% of Math, and 58% of Biology majors were female. This means " +
     "that in most STEM majors, female students are in a small minority in " +
     "the majority of their classes from freshman to senior year.",
options:[{code:"",type:"next",screen:"first_day"}],
source: "NCG Project, Randal Olson"},		

{name:"first_day",
	text:"It's your first day of classes, and you're going to your " + 
		  "9am lecture for --class--. The hall is almost full when you "+
		  "arrive, and there are two seats left. Where do you sit?",
	options:[{code:"Next to a boy",type:"next",screen:"boy_convo"},
			 {code:"Next to a girl",type:"next",screen:"girl_convo"}],
	source: ""},	    

{name:"boy_convo",
text:"The boy you sit down next to nods at you, then looks down " +
	  "at his laptop. When the professor starts talking, he sighs. <br />" + 
	  "He says, \"I hope the whole semester isn't like this. I knew this " + 
	  "<em>years</em> ago.\"",
options:[{code:"\"Well, I didn't. But this is an intro class, so " +
				"I don't think it really matters.\"",type:"next",screen:"boy_convoA"},
	     {code:"\"Oh....\"",type:"next",screen:"boy_convoB"}],
source: ""},

{name:"girl_convo",
text:"The girl you sit down next to smiles at you. \"I've never taken " +
	 "a class anything like --class-- before, have you?\" she asks.",
options:[{code:"\"No! God, I thought I was the only one. I just thought "+
			   "this sounded cool.\"",
		  type:"next",screen:"girl_convoA"},
			 {code:"\"Oh, I've done a few things before...\"",
			  type:"next",screen:"girl_convoB"}],
source: ""},

{name:"girl_convoA",
text:"The rest of the class, the professor talks quicker and quicker. You "+
	 "can tell you're going to like the material, even if it's challenging. On "+
	 "the way out, the girl smiles at you.",
options:[{code:"\"Well, it was nice to meet you.\"",
		  type:"next",screen:"experience"}],
source: ""},

{name:"girl_convoB",
text:"\"Oh, cool.\" The girl looks impressed. \"I've heard this class is super "+
	 "hard... maybe we can start a study group?\" she asks. You feel like you've "+
	 "already made a friend.",
options:[{code:"\"Yeah, that sounds cool!\"",
		  type:"next",screen:"experience"}],
source: ""},

{name:"experience",
text:"Girls tend to come into college with less preparation in STEM " +
	 "fields. In AP math (calculus and statistics), for example, boys " +
	 "have consistently outnumbered girls by up to 10,000 students per " +
	 "year. As a result, students of different genders can come in at " +
	 "different levels.",
options:[{code:"",type:"next",screen:"friday"}],
source: "ed.gov"},

{name:"friday",
text:"It's a Friday two weeks into the semester, and your History-major roommate "+
	 "and her friends are going out. It sounds like a lot of fun, but you have a "+
	 "lengthy problem set for --class2-- due on Monday. What do you do?",
options:[{code:"Go out with them.",
		  type:"next",screen:"go_out"},
			 {code:"Stay in.",
			  type:"next",screen:"stay_in"}],
source: ""},

{name:"go_out",
text:"You go out, but on Monday, you feel like you didn't do the PSET as well "+
	 "as your peers. Next to you, someone says, \"It took all weekend, "+
	 "but I finally finished the PSET.\" His friend high-fives him. \"I didn't "+
	 "sleep at all last night!\" he affirms.",
options:[{code:"",type:"next",screen:"unlocking"}],
source: ""},

{name:"stay_in",
text:"Sure, it's lonely, but you get your PSET done. Lecture on Monday "+
	 "is hard, but at least you feel prepared. The guy next to you rolls "+
	 "his eyes when you ask him whether he thought the PSET was hard. \"Duh,\" "+
	 "he says, \"but that's kind of the point.\"",
options:[{code:"",type:"next",screen:"unlocking"}],
source: ""},

{name:"unlocking",
text:"Due to the 'hardcore' stereotype of a scientist, students often feel "+
	 "that they have to give up a well-balanced social-life in order to be "+
	 "a proper scientist. In <em>Unlocking the Clubhouse</em>, Margolis and Fisher "+
	 "write that \"One of the characteristics of the ideology of science is that "+
	 "science is a calling, something that a scientist wants to do, needs to do above "+
	 "all else and at all costs.\" Sometimes, that can be hard to keep up with.",
options:[{code:"",type:"next",screen:"office_hours"}],
source: "Unlocking the Clubhouse"},

{name:"office_hours",
text:"You've been struggling in one of your classes, --class2-- -- the last PSET "+
	 "was hard, and this one is even harder. You decide to go to office hours to get "+
	 "help.",
options:[{code:"\"Could you please explain step 2?\"",type:"next",screen:"oh_1"},
		 {code:"\"I don't really know where to start.\"",type:"next",screen:"oh_2"}],
source: ""},

{name:"oh_1",
text:"Your TF steps you through where you're getting stuck in the problem. Finally, "+
	 "you think you're starting to get it. You thank your TF, and leave. Maybe this "+
	 "class won't be so bad after all?",
options:[{code:"",type:"next",screen:"oh_end"}],
source: ""},

{name:"oh_2",
text:"Your TF grimaces. \"Okay, beginners struggle with this one,\" he says. "+
	 "\"And I guess it can be hard for non-majors to fully grasp.\" He helps you, "+
	 "but you begin to doubt whether or not you can actually do this.",
options:[{code:"",type:"next",screen:"oh_end"}],
source: ""},

{name:"oh_end",
text:"\"The most powerful determinant of whether a woman goes on in science might be "+
     "whether anyone encourages her to go on.\" Teacher fellows and professors, even "+
     "unwittingly, might be less likely to encourage female students to pursue their "+
     "academic interests.",
options:[{code:"",type:"next",screen:"midterm"}],
source: "\"Why are there so few women in science?\""},

{name:"midterm",
text:"Two weeks later, and you're sitting in --class2-- lecture when they hand out "+
	 "your marked midterms. You turn your exam over and discover you got "+
	 "an 87. The class mean was a 76, but you're not sure. You never got B's in high "+
	 "school, so this probably means you're not cut out for this...",
options:[{code:"",type:"next",screen:"midterm_stats"}],
source: ""},

{name:"midterm_stats",
text:"Research by feminist researchers...",
options:[{code:"",type:"next",screen:"classroom"}],
source: "Unlocking the Clubhouse"},

{name:"classroom",
text:"You're back in the --class-- lecture hall, but your usual seat has been "+
	 "taken. Where do you sit?",
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
text:"The semester ends, and as snow begins to fall you hop on a plane back "+
	 "home for winter break. Finally, you have time to relax, destress, and talk "+
	 "to all of your friends at home.",
options:[{code:"",type:"next",screen:"coffee"}],
source: ""},

{name:"coffee",
text:"You get coffee with one of your friends from high school. She's in the middle "+
	 "of her gap year. \"So,\" she says, \"how's our resident --major-- genius faring "+
	 "at university?\"",
options:[{code:"\"To be perfectly honest, I'm thinking of switching majors. "+
 	      "I think sociology might be fun?\"",type:"next",screen:"happy"}
		 {code:"\"Um, okay, I guess. It's a lot harder than I thought it would be, "+
		 "and everyone seems to know more than me.\"",type:"next",screen:"happy"}],
source: ""},

{name:"happy",
text:"\"Well, do whatever makes you happy,\" your friend says. You're not entirely "+
	 "sure if you can pursue both your academic interests and be happy, but you "+
	 "don't say that.",
options:[{code:"",type:"next",screen:"christmas_dinner"}],
source: ""},

{name:"christmas_dinner",
text:"Your entire extended family comes over for Christmas dinner. There's Aunt "+
	 "Bessie, Uncle Ted, Grandpa Joe, about seventeen tiny cousins... It's hectic."
options:[{code:"",type:"next",screen:"setting_table"}],
source: ""},

{name:"setting_table",
text:"Once you're done setting the table for dessert, you all sit down to dig into "+
	 "some apple pie. \"So,\" says Aunt Bessie. \"Tell us about college!\""
options:[{code:"\"I wish I weren't the only girl in some of my "+
	 	  "classes, but otherwise it's okay.\"",type:"next",screen:"ratio"},
	 	 {code:"\"It's going fine.\"",type:"next",screen:"displeased"}],
source: ""},

{name:"ratio",
text:"\"Why wouldn't you like being the only girl in your class?\" asks your uncle. "+
	 "\"You've got great dating odds with a ratio like <em>that</em>!\"",
options:[{code:"\"Sure, I guess...\"",type:"next",screen:"advantages"},
	     {code:"\"Well, it's kind of discouraging.\"",type:"next",
	      screen:"displeased"},
	     {code:"\"Uh, I'm not really interested in dating boys...\"",
	      type:"next",screen:"heteronormativity"}],
source: ""}

{name:"heteronormativity",
text:"Something about queer students.",
options:[{code:"",type:"next",screen:"advantages"}],
source: "???"}

{name:"displeased",
text:"\"You never struck me as a <em>true</em> science type, anyway,\" chimes in "+
	 "Uncle Ted. \"It's not for everyone.\"",
options:[{code:"Don't say anything",type:"next",screen:"second_semester"}],
source: ""}

{name:"advantages",
text:"Disadvantages for girls in STEM can often be construed as advantages, "+
	 "invalidating the struggles faced by female students and making them feel "+
	 "like they cannot complain.",
options:[{code:"",type:"next",screen:"second_semester"}],
source: ""}

{name:"second_semester",
text:"Winter break draws to a close, and you...",
options:[],
source: ""}];

/* Info about the player, with default name */
var player = "Emma";
var major = 0; // 0 is CS, 1 is Engineering, 2 is Math
			   // 3 is Physics, 4 is Biology
var classes = ["CS50", "ES51", "Math 21b", "PS12", "LS1a"];
var classes2 = ["Math 21a", "Math 1b", "Stat 110", "PS15", "MCB16"];

/* Generates the screen requested */
function genScreen(vals) {
	inserted = vals.text.replace("--name--", player);
	inserted = inserted.replace("--class--", classes[major]);
	inserted = inserted.replace("--class2--", classes2[major]);
	first =  "<p>" + inserted + "</p>";
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
	return first + source + options;
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
		changeTo("english_major");
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
/* Various screens in the game */
var screens = [
{name:"class_selection",
text:"Hello, --name--, and congratulations on beginning freshman year! What do "+
      "you think you're going to major " +
	  "in? (You haven't declared yet, but your roommate wants to know.)", 
options: [{code:"Computer Science",type:"classes",screen:"0"},
		  {code:"Engineering",type:"classes",screen:"1"},
		  {code:"Mathematics",type:"classes",screen:"2"},
		  {code:"Physics",type:"classes",screen:"3"},
		  {code:"Biology",type:"classes",screen:"4"},
		  {code:"English",type:"classes",screen:"english_major"}],
source: ""},

{name:"english_major",
conf:30,
text:"This is outside the scope of our game -- while students" + 
	 " in other majors also experience sexism and discrimination," +
	 " we have elected to focus solely on STEM fields. Click the refresh "+
	 "button at the top right of the screen to start over!",
options:[],
source: ""},

{name:"major_percentages",
text:"In 2013, female students made up only 18.2% of Computer Science, 19.2% of "+
     "Engineering, 19.1% of Physics, 43% of Math, and 58% of Biology majors. "+
     "This means that in most STEM majors, girls will be in a small minority "+
     "in the majority of their classes, from freshman to senior year.",
options:[{code:"",type:"next",screen:"first_day"}],
source: "NCG Project, Randal Olson"},		

{name:"first_day",
text:"It's your first day of classes, and you're going to your " + 
	  "9am lecture for --class--. The hall is almost full when you "+
	  "arrive, and there are only two seats left. Where do you sit?",
options:[{code:"Next to a boy",type:"next",screen:"boy_convo"},
		 {code:"Next to a girl",type:"next",screen:"girl_convo"}],
source: ""},	    

{name:"boy_convo",
conf:-10,
text:"The boy you sit down next to nods at you, then looks down " +
	  "at his laptop. When the professor starts talking, he sighs. <br />" + 
	  "He says, \"I hope the whole semester isn't like this. I knew this " + 
	  "<em>years</em> ago.\"",
options:[{code:"\"Well, I didn't. But this is an intro class, so " +
				"I don't think it really matters.\"",type:"next",screen:"experience"},
	     {code:"\"Oh....\"",type:"next",screen:"experience"}],
source: ""},

{name:"girl_convo",
conf:"5",
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
text:"It's a Friday two weeks into the semester, and your history-buff roommate "+
	 "and her friends are going out to First Chance Dance. It sounds like a lot of "+
	 " fun, but you have a lengthy problem set for --class2-- due on Monday. "+
	 "What do you do?",
options:[{code:"Go out with them.", type:"next",screen:"go_out"},
	     {code:"Stay in.", type:"next",screen:"stay_in"}],
source: ""},

{name:"go_out",
conf:-10,
text:"You go out, but on Monday, you feel like you didn't do the problem set as well "+
	 "as your peers. Next to you, someone says, \"It took all weekend, "+
	 "but I finally finished the PSET.\" His friend high-fives him. \"I didn't "+
	 "sleep at all last night!\" he echoes, happily.",
options:[{code:"",type:"next",screen:"unlocking"}],
source: ""},

{name:"stay_in",
conf:-5,
text:"Sure, it's lonely, but you get your problem set done. Lecture on Monday "+
	 "is hard, but at least you feel prepared. The guy next to you rolls "+
	 "his eyes when you ask him whether he thought the homework was hard. "+
	 "\"Challenging, maybe,\" he says, \"but that's kind of the point.\"",
options:[{code:"",type:"next",screen:"unlocking"}],
source: ""},

{name:"unlocking",
text:"Due to the 'hardcore' stereotype of a scientist, students often feel "+
	 "that they have to give up a well-balanced social-life in order to be "+
	 "a proper scientist. In fact, \"One of the characteristics of the ideology "+
	 "of science is that "+
	 "science is a calling, something that a scientist wants to do, needs to do above "+
	 "all else and at all costs.\" Sometimes, that can be hard to keep up with.",
options:[{code:"",type:"next",screen:"office_hours"}],
source: "Unlocking the Clubhouse"},

{name:"office_hours",
text:"It's midterm season. You've been struggling in one of your classes, --class2-- "+
	"-- the last PSET was hard, and this one is even harder. You decide to go "+
	"to office hours to get some guidance.",
options:[{code:"\"Could you please explain step 2?\"",type:"next",screen:"oh_1"},
		 {code:"\"I don't really know where to start.\"",type:"next",screen:"oh_2"}],
source: ""},

{name:"oh_1",
conf:5,
text:"Your Teaching Fellow steps you through where you're getting stuck in the "+
     "problem. Finally, "+
	 "you think you're starting to get it. You thank him, and leave. Maybe this "+
	 "class won't be so bad after all?",
options:[{code:"",type:"next",screen:"oh_end"}],
source: ""},

{name:"oh_2",
conf:-10,
text:"Your Teaching Fellow grimaces. \"Okay, beginners struggle with this one,\" "+
     "he says. \"And I guess it can be hard for non-majors to fully grasp.\" He helps"+
     " you, but you begin to doubt whether or not you can actually do this.",
options:[{code:"",type:"next",screen:"oh_end"}],
source: ""},

{name:"oh_end",
text:"\"The most powerful determinant of whether a woman goes on in science might be "+
     "whether anyone encourages her to go on.\" Teacher fellows and professors, even "+
     "unwittingly, might be less likely to encourage female students to pursue their "+
     "academic interests.",
options:[{code:"",type:"next",screen:"midterm"}],
source: "Pollack"},

{name:"midterm",
text:"Two weeks later, and you're sitting in --class2-- lecture when they hand out "+
	 "your graded midterms. You turn your exam over and discover you got "+
	 "an 87. The professor announces that the mean was a 76, but you're still "+
	 "worried. You never got B's in high school, so this probably means you're "+
	 "just not cut out for this...",
options:[{code:"",type:"next",screen:"midterm_stats"}],
source: ""},

{name:"midterm_stats",
text:"Research has shown that \"women are significantly less confident than men "+
	"in their math and science abilities, even when their achievements are equal "+
	"to those of men. Even when they receive the same grades as men, women are still"+
	"less secure in their academic performance.\"",
options:[{code:"",type:"next",screen:"internship"}],
source: "Unlocking the Clubhouse"},

{name:"internship",
text:"You got a position at a lab on campus! You're super pumped, and think it'll "+
    "give you some knowledge as to what lab work could really be like. But then "+
    "again, you already feel so behind, and you might not even be good at it...",
options:[{code:"Accept",
		  type:"next",screen:"internship2"},
		 {code:"Decline",
		  type:"next",screen:"final_project"}],
source: ""},

{name:"internship2",
conf:-6,
text:"You wander in, looking a bit unsure. A grad student sees you and asks you if" +
	"you're looking for the psych department, which is down the hall.",
options:[{code:"\"Ummmm...\"",type:"next",screen:"internship_stats"},
		 {code:"\"No, are you?\"",type:"next",screen:"internship_stats"}],
source: ""},

{name:"internship_stats",
text:"Female scientists have to contest with the set societal image of a scientist, "+
	"which is almost always masculine. Consequently, coworkers tend to take female "+
	"scientists and their abilities less seriously.",
options:[{code:"",type:"next",screen:"final_project"}],
source: ""},

{name:"final_project",
text:"You're almost done with your first semester! But before you're completely "+
	"done, it's time for you to start the dreaded final group project for --class--.",
options:[{code:"",type:"project",screen:""}],
source: ""},

{name:"hackathon",
text:"Are you ready to code until the sun rises?",
options:[{code:"\"Yeah! Let me grab my Redbull...\"",
		  type:"next",screen:"hackathon_stats"},
		 {code:"\"Oh, um, ok...\"",type:"next",screen:"hackathon_stats"}],
source: ""},

{name:"hackathon_stats",
text:"Students often feel they need to sacrifice large amounts of sleep or a social life "+
	 "in order to fit into the hardcore Computer Science stereotype.",
options:[{code:"",type:"next",screen:"winter_break"}],
source: ""},

{name:"secretary",
conf:-8,
text:"Your project partners ask you to buy the supplies for your robot, set up times when"+
	"everyone can meet, reserve lab space, and email the group to keep everyone on track."+
	"When the time comes to work on the robot, your partners say they've \"got this\"",
options:[{code:"You let them do the project, you've done enough work already",
		  type:"next",screen:"lab_sec_stats"},
	 	 {code:"You insist on helping anyway",type:"next",
	 	  screen:"lab_sec_stats"}],
source: ""},

{name:"doctor",
conf:10,
text:"For your final project, you and your peers shadow a doctor. You ask "+
	 "her how her career has been so far, and she's positive about it. She loves "+
	 "how her job lets her help patients and serve her community.",
options:[{code:"",type:"next",screen:"doctor_2"}],
source: ""},

{name:"doctor_2",
conf:-15,
text:"Later, while you're following the doctor on her rotations, a male colleague "+
	 "walks by. \"How are the interns treating you, honey?\" he asks.",
options:[{code:"",type:"next",screen:"doctor_stats"}],
source: ""},

{name:"doctor_stats",
text:"Female doctors often face discrimination and sexual harassment in the workplace at the hands "+
	 "of their male coworkers and superiors. Additionally, more than 75 percent "+
	 "of female doctors have reported being harrassed by"+
	 "patients.",
options:[{code:"",type:"next",screen:"winter_break"}],
source: "Walking Out On The Boys, National Institute of Health"},

{name:"lab_work",
conf:-15,
text:"The professor supervising your group asks, \"Honey, could you grab the "+
	"pipettes for me?\" The professor never offers you a chance at the microscope.",
options:[{code:"You confront him, and ask for a turn on the microscope",type:"next",screen:"lab_sec_stats"},
		{code:"You sit back and watch your classmates conduct the experiment",type:"next",screen:"lab_sec_stats"}],
source: ""},

{name:"lab_sec_stats",
text:"Female college students often end college with less laboratory experience "+
	"than their male peers. If you don't speak up, you won't get a chance; however, "+
	"if you ask for your turn, you might be seen as aggressive and confrontational.",
options:[{code:"",type:"next",screen:"winter_break"}],
source: "Slate.com"},

{name:"winter_break",
conf:15,
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
 	      "I think sociology might be fun?\"",type:"next",screen:"happy"},
		 {code:"\"Um, okay, I guess. It's a lot harder than I thought it would be, "+
		 "and everyone seems to know more than me.\"",type:"next",screen:"happy"}],
source: ""},

{name:"happy",
conf:-3,
text:"\"Well, do whatever makes you happy,\" your friend says. You're not entirely "+
	 "sure if you can pursue both your academic interests and be happy, but you "+
	 "don't say that. Instead, you switch the topic of conversation to something "+
	 "you know you both like -- your favorite TV show.",
options:[{code:"",type:"next",screen:"christmas_dinner"}],
source: ""},

{name:"christmas_dinner",
text:"Your entire extended family comes over for Christmas dinner. There's Aunt "+
	 "Bessie, Uncle Ted, Grandpa Joe, about seventeen tiny cousins... it's hectic, "+
	 "and loud, and everyone keeps peppering you with questions about school.",
options:[{code:"",type:"next",screen:"setting_table"}],
source: ""},

{name:"setting_table",
text:"Once you're done setting the table for dessert, you all sit down to dig into "+
	 "some apple pie. \"So,\" says Aunt Bessie. \"Tell us about your academics!\"",
options:[{code:"\"I wish I weren't the only girl in some of my "+
	 	  "classes, but otherwise it's okay.\"",type:"next",screen:"ratio"},
	 	 {code:"\"It's going fine.\"",type:"next",screen:"displeased"}],
source: ""},

{name:"ratio",
conf:-10,
text:"\"Why wouldn't you like being the only girl in your class?\" asks your uncle. "+
	 "\"You've got great dating odds with a ratio like <em>that</em>!\"",
options:[{code:"\"Sure, I guess...\"",type:"next",screen:"advantages"},
	     {code:"\"Well, it's kind of discouraging.\"",type:"next",
	      screen:"displeased"},
	     {code:"\"Uh, I'm not really interested in dating boys...\"",
	      type:"next",screen:"heteronormativity"}],
source: ""},

{name:"heteronormativity",
conf:-10,
text:"BGLTQ+ students face special challenges when compared to their straight and "+
	 "cisgender peers. Having to deal with sexism, homophobia, and transphobia "+
	 "in and out of the classroom can cause excessive stress.",
options:[{code:"",type:"next",screen:"advantages"}],
source: "Cech & Waidzunas"},

{name:"displeased",
conf:-5,
text:"\"You never struck me as a <em>true</em> science type, anyway,\" chimes in "+
	 "Uncle Ted, sensing your lack of enthusiasm. \"It's not for everyone.\"",
options:[{code:"Say nothing",type:"next",screen:"second_semester"}],
source: ""},

{name:"advantages",
text:"Disadvantages for women in STEM are often construed or portrayed as advantages, "+
	 "invalidating the struggles faced by female students and making them feel "+
	 "like they cannot complain or voice their concerns without facing backlash.",
options:[{code:"",type:"next",screen:"second_semester"}],
source: ""},

{name:"second_semester",
text:"Winter break draws to a close, and you're ready to start another semester.",
options:[{code:"Board the plane back to college",type:"next",screen:"register"}],
source: ""},

{name:"register",
conf:10,
text:"Course registration is never easy, but this semester there's one class you "+
	 "know you want to take -- a freshman-only --major-- elective with Professor "+
	 "Laura Smith, which you know is amazing.",
options:[{code:"Sign up",type:"next",screen:"gone"}],
source: ""},

{name:"gone",
conf:-15,
text:"You try to sign up for the class online, but it's no longer there. When you "+
	 "go to investigate, you discover that Professor Smith has left because she "+
	 "didn't get tenure.",
options:[{code:"",type:"next",screen:"tenure"}],
source: ""},

{name:"tenure",
text:"\"Women today earn 41% of PhD's in STEM fields, but make up only 28% "+
 	 "of tenure-track faculty in those fields.\"",
options:[{code:"",type:"next",screen:"classroom"}],
source: "WhiteHouse.gov"},

{name:"classroom",
text:"You're not used to getting up so early, so you're almost late to your first "+
	 "class of the semester, --class3--. Last semester, there were other girls in "+
	 "--class--, the precursor to this class; now you're the only one. Where do "+
	 "you sit?",
options:[{code:"Next to a boy",type:"next",screen:"attrition"}],
source: ""},

{name:"attrition",
text:"\"Studies show fewer than four in 10 college students who intend to major " +
	"in a math- or science-based field actually stick with it, and only one in four " +
	"students who do actually graduate. The attrition rate is even worse for minorities " +
	"and women, who represent just a fraction of first- and second-year college students" +
	" studying in STEM-related fields.\"",
options:[{code:"",type:"next",screen:"boy_convo2"}],
source: "US News Report"},

{name:"boy_convo2",
conf:-10,
text:"You get lost during the lecture. You ask the guy next to you to clarify " +
	 "what is going on. He scoffs, \"didn't you take math in high school?\"",
options:[{code:"\"Of course I did, but this is different... \"",type:"next",
	      screen:"convo2_stats"},
	     {code:"\"Nevermind....\"",type:"next",screen:"convo2_stats"}],
source: ""},

{name:"convo2_stats",
text:"Female students are more willing to admit they need help, which can be" +
	"intimidating when confronting (overly) confident male classmates.",
options:[{code:"",type:"next",screen:"encouragement"}],
source: "Unlocking the Clubhouse"},

{name:"encouragement",
conf:5,
text:"You're reading through blogs in the morning when you see an old article about "+
	 "the mathematician Maryam Mirzakhani, who won the Fields Medal in August. She's "+
	 "the first woman to win it, and you can't help but thinking that if "+
	 "she can be so accomplished, maybe so can you.",
options:[{code:"",type:"next",screen:"interview"}],
source: "AP Online"},

{name:"interview",
text:"You applied to a bunch of internships earlier in the semester, "+
	 "and didn't think you'd hear back. But when you woke up this morning, there "+
	 "was an email in your inbox -- telling you you have an interview, on campus, "+
	 "tomorrow! What do you wear?",
options:[{code:"A professional dress",type:"next",screen:"dress"},
	     {code:"An XKCD t-shirt",type:"next",screen:"t-shirt"}],
source: ""},

{name:"dress",
conf:10,
text:"When you get to the interview, your interviewer -- a glasses-wearing guy in "+
	 "his mid-twenties -- shakes your hand. You answer all the questions he asks, "+
	 "diagramming them out on the whiteboard and showing your steps. You feel pretty "+
	 "good about yourself.",
options:[{code:"",type:"next",screen:"dress_2"}],
source: ""},

{name:"dress_2",
conf:-15,
text:"However, as you're stepping out, you hear the interviewer talking to the "+
	 "receptionist. \"Sure,\" he's saying. \"She was smart, but I'm just not sure "+
	 "she'd fit in with the company culture...\"",
options:[{code:"",type:"next",screen:"outfit"}],
source: ""},

{name:"t-shirt",
text:"You feel underdressed for the interview, and you think it might shake your "+
	 "confidence just a bit, but you think you do well. Now, all you have to do "+
	 "is wait for your results...",
options:[{code:"",type:"next",screen:"outfit"}],
source: ""},

{name:"outfit",
text:"Women are often judged... FILL THIS IN",
options:[{code:"",type:"next",screen:"textbook"}],
source: "The Atlantic"},

{name:"textbook",
conf:-3,
text:"You go to buy a textbook for next semester, hoping to get it at "+
	 "a discounted price. It's 1000 pages of dense formulas and diagrams, "+
	 "and when you get to the front of the line, the cashier remarks, "+
	 "\"Doing the shopping for your boyfriend? How nice.\"",
options:[{code:"",type:"internship",screen:""}],
source: ""},

{name:"yay",
conf:30,
text:"You got the internship! Congrats! This is pretty rare for a first-year "+
	 "student, so you should really feel proud of yourself.",
options:[{code:"",type:"next",screen:"hiring"}],
source: ""},

{name:"aww",
conf:-5,
text:"Well, I guess form rejection letters really haven't changed since "+
	 "you applied to college -- you didn't get the internship. "+
	 "Better luck next time...",
options:[{code:"",type:"next",screen:"hiring"}],
source: ""},

{name:"hiring",
text:"Regardless of whether or not you got the internship, you weren't on an "+
	 "equal playing field. Men are often seen as more hireable, just because "+
	 "they have traditionally male names. Such effects are even more pronounced "+
	 "when race and ethnicity comes into play.",
options:[{code:"",type:"next",screen:"symposium"}],
source: "PNAS"},

{name:"symposium",
conf:10,
text:"You decide to go to a symposium for women in science, put on by your school"+
	 ". Seeing so many other female scientists in one place, as cheesy as it "+
	 "sounds, makes you feel really inspired.",
options:[{code:"",type:"next",screen:"major"}],
source: ""},

{name:"major",
text:"Finally, it's time to choose your major. Will you stick with --major--?",
options:[{code:"Yes",type:"next",screen:"end"},
		 {code:"No",type:"next",screen:"sad"}],
source: ""},

{name:"sad",
text:"You're among the many women who, after the end of their first year of "+
	 "college, decide that majoring in science just isn't for them. Though you "+
	 "may have made this choice on your own, consider all of the factors "+
	 "that led you to this decision.",
options:[],
source: ""},

{name:"end",
text:"Congrats on making it though your first year -- not everyone in your position "+
	 "is able to do the same. Your confidence started "+
	 "at 70%, and is now at --confidence--%. Though you got through this year "+
	 "consider that you'll have to do this again -- through college, grad "+
	 "school, and perhaps the rest of your life.",
options:[],
source: ""}];

/* Info about the player, with default name */
var names = ["Emma", "Annie", "Julia", "Sarah", "Maria"]
var player = names[Math.floor(Math.random() * 5)];
var confidence = 70;
var major = 0; 
var majors = ["Computer Science", "Engineering", "Mathematics", "Physics", "Biology"];
var classes = ["CS50", "ES51", "Math 21b", "PS12", "LS1a"];
var classes2 = ["Math 21a", "Math 1b", "Stat 110", "PS15", "MCB16"];
var classes3 = ["CS51", "ES61", "Math 110", "PS16", "LS1b"];

/* Generates the screen requested */
function genScreen(vals) {
	inserted = vals.text.replace("--name--", player);
	inserted = inserted.replace("--class--", classes[major]);
	inserted = inserted.replace("--class2--", classes2[major]);
	inserted = inserted.replace("--class3--", classes3[major]);
	inserted = inserted.replace("--major--", majors[major]);
	inserted = inserted.replace("--confidence--", confidence);

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
		// change confidence
		if ((screens[pl].conf < 100) && (screens[pl].conf) > -100) {
			confidence = confidence + parseInt(screens[pl].conf);
		}
		$( "#blue" ).animate({
		    width: confidence + "%",
  		}, 900);
		// change screen
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

var on = true;
$("#sources").click(function(e){
	if (on) {
		$("#overlay").fadeOut();
		on = false;
	}
	else {
		$("#overlay").fadeIn();
		on = true;
	}
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

$("#changeable").on("click", "#project", function(e){
	switch (major) {
		case 0:
			changeTo("hackathon");
			break;
		case 1:
			changeTo("secretary");
			break;
		case 2:
			changeTo("hackathon");
			break;
		case 3:
			changeTo("doctor");
			break;
		default:
			changeTo("lab_work");
	}
});

$("#changeable").on("click", "#internship", function(e){
	var gotIt = (Math.floor(Math.random() * 5) > 3);
	if (gotIt) {
		changeTo("yay");
	}
	else {
		changeTo("aww");
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

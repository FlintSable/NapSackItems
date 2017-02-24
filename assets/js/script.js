// download png items 
// * use the obj energy value to update my score
// * onclick for the items
// * useage counter for items
// * win - gameover logic - session checking
// style the applicaition
// win screen - from here restart - bootstrap modal - get new items - unlock item
	// copy item from rewards to utility belt once won
// bust screen - screen becomes more transparent
// bonus:
// new line up of items
// item selection menu

var gemReactor = {

	balls: {  // items need to be displayed and have on click functions for score addition
		monsterball:{
			picture: "./assets/sprites/Monster_Ball_Sprite.png",
			energy: 5,
			usage: 2
		},
		greatball:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		},
		gem3:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		},
		gem4:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		},
		gem5:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		},
		gem6:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		},
		gem7:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		},
		gem8:{
			picture: "rock1.jpg",
			energy: 5,
			usage: 2
		}



	},


	// setting the initial state of the game

	charLineUp: [],       // the players team of items
	powerUpDevice: [],    //
	energyPoints: 0,      // reach these points  --needs to be displayed 
	playerEnergyPoints: 0,
	deloreanDays: 0,      // add to view -- wins - these are the amount of days you can stay in the future
	reverseDays: 0,       // add to view -- loss

	startUp: function(){
		this.selectEnergyValue();
		this.displayPlayerEnergy();
		this.selectLineup;
		this.selectPowDev;
		this.populateToolBelt();



	},

	displayPlayerEnergy: function(){
		this.playerEnergyPoints = 1;
		$('#playerEnergyPoints').append('<h1>' + this.playerEnergyPoints + '</h1>');


	},

	selectEnergyValue: function(){
		this.energyPoints = Math.floor(Math.random() * 40);
		$('#energyPoints').append('<h1>' + this.energyPoints + '</h1>')



	},

	selectLineup: function(){

	},

	selectPowDev: function(){

	},

	populateToolBelt: function(){
		// select one item from each category
		var ball1 = new Image();
		ball1.src = gemReactor.balls.monsterball.picture;
		$('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">').on("click", function(){
			console.log("click is working");
		})

	},

	resetGame: function(){
		this.energyPoints = 0;


	},

	





}

// var ball1 = new Image();
// ball1.src = gemReactor.balls.monsterball.picture;






$(document).ready(function() {

	gemReactor.startUp();

	// gemReactor.populateToolBelt();




// $('#utilityBelt').append("<em>HELLO</em>");
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')

// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')

// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')



})
// $('#target_div').html('<img src="'+ imgPaht +'" width=100 height=100 alt="Hello Image" />');




// $("#utilityBelt").html("<img id='' + src= +\" + ball1.src+ \"");
// $("#utilityBelt").html("<img id='' + src= + + ball1.src+ ");
// $('#utilityBelt').append("<em>HELLO</em>");




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
			itemName: "monsterball",
			picture: "./assets/sprites/Monster_Ball_Sprite.png",
			energy: 3,
			usage: 2
		},
		mushroom:{
			itemName: "mushroom",
			picture: "./assets/sprites/Dream_Big_Mushroom_Sprite.png",
			energy: 2,
			usage: 2
		},
		Escape_Rope:{
			itemName: "Escape_Rope",
			picture: "./assets/sprites/Dream_Escape_Rope_Sprite.png",
			energy: 3,
			usage: 2
		},
		potion:{
			itemName: "potion",
			picture: "./assets/sprites/Dream_Potion_Sprite.png",
			energy: 4,
			usage: 2
		},
		Oran_Berry:{
			itemName: "Oran_Berry",
			picture: "./assets/sprites/Dream_Oran_Berry_Sprite.png",
			energy: 5,
			usage: 2
		},
		Ability_Capsule:{
			itemName: "Ability_Capsule",
			picture: "./assets/sprites/Dream_Ability_Capsule_Sprite.png",
			energy: 6,
			usage: 2
		},
		Soda_Pop:{
			itemName: "Soda_Pop",
			picture: "./assets/sprites/Dream_Soda_Pop_Sprite.png",
			energy: 2,
			usage: 2
		},
		Fresh_Water:{
			itemName: "Fresh_Water",
			picture: "./assets/sprites/Dream_Fresh_Water_Sprite.png",
			energy: 8,
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
	roundCheck: true,
	wins: 0,
	loss: 0,

	startUp: function(){
		this.selectEnergyValue();
		this.displayPlayerEnergy();
		this.selectLineup;
		this.selectPowDev;
		this.populateToolBelt();



	},

	displayPlayerEnergy: function(){
		// this.playerEnergyPoints;
		console.log(this.playerEnergyPoints);
		$('#playerEnergyPoints').append('<h1>' + this.playerEnergyPoints + '</h1>');
		console.log("dispay run");

	},

	updatePlayerEnergy: function(){
		console.log("Here here this this " + this);
		gemReactor.playerEnergyPoints = gemReactor.playerEnergyPoints +  gemReactor.balls.monsterball.energy;
		// console.log(gemReactor.balls.monsterball.energy);
		// console.log(gemReactor.playerEnergyPoints);
		var current = parseInt($('#playerEnergyPoints').text()) + gemReactor.balls.monsterball.energy; // 
		// current += gemReactor.playerEnergyPoints;
		// console.log('updated number: ' + typeof(current));
		// $('#playerEnergyPoints').text($('h1').empty);
		$('#playerEnergyPoints').html('<h1>' + current.toString() + '</h1>'); // needs to be string when put back in h1
		console.log("Current Player Points: " + typeof(current) + " | Added points: " + gemReactor.balls.monsterball.energy);
		// console.log(typeof(parseInt(current)));
		// this.displayPlayerEnergy();
		// console.log(this.playerEnergyPoints);
		console.log("current goal rolled " + gemReactor.energyPoints + '| roundCheck:' + gemReactor.roundCheck);


		if(gemReactor.energyPoints === current){
			gemReactor.wins += 1;
			$('#wins').text('W: ' + Number(gemReactor.wins));
			gemReactor.resetGame();
			// run the win modal 
			// add the win to the score 
			// close the modal 
			// reset the game

		}
		else if(gemReactor.energyPoints < current){
			gemReactor.loss -= 1;
			$('#loss').text('L: ' + gemReactor.loss);
			gemReactor.resetGame();
			// run the bust modal
			// add the loss to the score
			// close the modal 
			// reset the game
		}



	},



	selectEnergyValue: function(){
		this.energyPoints = Math.floor(Math.random() * 40);
		$('#energyPoints').append('<h1>' + this.energyPoints + '</h1>');
		console.log("the rolled number: " + this.energyPoints);
		return this.energyPoints;

	},

	selectLineup: function(){

	},

	selectPowDev: function(){

	},

	populateToolBelt: function(){
		// select one item from each category
		console.log("populate---" + this);
		var ball1 = new Image();
		ball1.src = gemReactor.balls.monsterball.picture;
		console.log("----" + this.balls.monsterball);

		// this.updatePlayerEnergy(); 
		$('#utilityBelt').append('<img ' + 'id=' + this.balls.monsterball.itemName  + ' src="'+ ball1.src + '" width="48px">');
		$('#monsterball').on("click", this.updatePlayerEnergy);
		var tempList = Object.keys(this.balls);
		var inTheBelt = [];
		for(i=0; i<3; i++){
			inTheBelt.push(tempList[Math.floor(Math.random() * tempList.length)]);


		}
		console.log(inTheBelt);
		console.log(Object.keys(this.balls));



	},

	resetGame: function(){
		console.log("game will be starting soon");
		this.playerEnergyPoints = 0;
		this.energyPoints = 0;
		$('#energyPoints h1').remove();
		$('#playerEnergyPoints h1').remove();

		console.log(this);
		this.displayPlayerEnergy();
		this.selectEnergyValue();


	},

	





};

// var ball1 = new Image();
// ball1.src = gemReactor.balls.monsterball.picture;






$(document).ready(function() {

	gemReactor.startUp();

	// gemReactor.populateToolBelt();




// $('#utilityBelt').append("<em>HELLO</em>");
// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')

// $('#utilityBelt').append('<img src="'+ ball1.src + '" width="48px">')


});
// $('#target_div').html('<img src="'+ imgPaht +'" width=100 height=100 alt="Hello Image" />');




// $("#utilityBelt").html("<img id='' + src= +\" + ball1.src+ \"");
// $("#utilityBelt").html("<img id='' + src= + + ball1.src+ ");
// $('#utilityBelt').append("<em>HELLO</em>");




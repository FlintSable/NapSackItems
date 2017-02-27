var gemReactor = {
// items need to be displayed and have on click functions for score addition
	balls: {  
		monsterball:{
			itemName: "monsterball",
			picture: "./assets/sprites/Monster_Ball_Sprite.png",
			energy: 3,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'
		},
		mushroom:{
			itemName: "mushroom",
			picture: "./assets/sprites/Dream_Big_Mushroom_Sprite.png",
			energy: 2,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		},
		Escape_Rope:{
			itemName: "Escape_Rope",
			picture: "./assets/sprites/Dream_Escape_Rope_Sprite.png",
			energy: 3,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		},
		potion:{
			itemName: "potion",
			picture: "./assets/sprites/Dream_Potion_Sprite.png",
			energy: 4,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		},
		Oran_Berry:{
			itemName: "Oran_Berry",
			picture: "./assets/sprites/Dream_Oran_Berry_Sprite.png",
			energy: 5,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		},
		Ability_Capsule:{
			itemName: "Ability_Capsule",
			picture: "./assets/sprites/Dream_Ability_Capsule_Sprite.png",
			energy: 6,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		},
		Soda_Pop:{
			itemName: "Soda_Pop",
			picture: "./assets/sprites/Dream_Soda_Pop_Sprite.png",
			energy: 2,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		},
		Fresh_Water:{
			itemName: "Fresh_Water",
			picture: "./assets/sprites/Dream_Fresh_Water_Sprite.png",
			energy: 8,
			usage: 2,
			imageSource: 'http://bulbapedia.bulbagarden.net'

		}



	},


	// setting the initial state of the game

	charLineUp: [],       // the players team of items
	powerUpDevice: [],    //
	energyPoints: 0,      // reach these points  --needs to be displayed 
	playerEnergyPoints: 0,
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
		var current = parseInt($('#playerEnergyPoints').text()) + gemReactor.balls.monsterball.energy; // 
		$('#playerEnergyPoints').html('<h1>' + current.toString() + '</h1>'); // needs to be string when put back in h1
		console.log("Current Player Points: " + typeof(current) + " | Added points: " + gemReactor.balls.monsterball.energy);
		console.log("current goal rolled " + gemReactor.energyPoints + '| roundCheck:' + gemReactor.roundCheck);


		if(gemReactor.energyPoints === current){
			gemReactor.wins += 1;
			$('#wins').text('W: ' + Number(gemReactor.wins));
			gemReactor.resetGame();


		}
		else if(gemReactor.energyPoints < current){
			gemReactor.loss += 1;
			$('#loss').text('L: ' + gemReactor.loss);
			gemReactor.resetGame();

		}



	},



	selectEnergyValue: function(){
		this.energyPoints = Math.floor(Math.random() * 40);
		$('#energyPoints').append('<h1>' + this.energyPoints + '</h1>');
		console.log("the rolled number: " + this.energyPoints);
		return this.energyPoints;

	},


	populateToolBelt: function(){

		var tempList = Object.keys(this.balls);
		var inTheBelt = [];
		for(var i=0; i<4; i++){
			inTheBelt.push(tempList[Math.floor(Math.random() * tempList.length)]);
		}

		for(var j=0; j<inTheBelt.length; j++){
			console.log(inTheBelt[j]);
			var item = inTheBelt[j];
			item += j;
			item = new Image();
			var itemsource = 'gemReactor.balls.' + inTheBelt[j] +'.picture';
			item.src = eval(itemsource);
			$('#utilityBelt').append('<img ' + 'id=' + inTheBelt[j]  + ' src="'+ item.src + '" width="48px">');
			$('#utilityBelt img').on("click", this.updatePlayerEnergy);
			console.log(item);
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
		$('#utilityBelt img').remove();

		this.populateToolBelt();

		console.log(this);
		this.displayPlayerEnergy();
		this.selectEnergyValue();


	},

};






$(document).ready(function() {

	gemReactor.startUp();
});

// check list for me
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
		// commands
		// select one item from each category
		// var ball1 = new Image();
		// ball1.src = gemReactor.balls.monsterball.picture;
		// console.log('ball1'+ball1);
		// console.log("----" + this.balls.monsterball);

		// // this.updatePlayerEnergy(); 
		// $('#utilityBelt').append('<img ' + 'id=' + this.balls.monsterball.itemName  + ' src="'+ ball1.src + '" width="48px">');
		// $('#monsterball').on("click", this.updatePlayerEnergy);

		// console.log(gemReactor.balls.monsterball.energy);
		// console.log(gemReactor.playerEnergyPoints);
		// current += gemReactor.playerEnergyPoints;
		// console.log('updated number: ' + typeof(current));
		// $('#playerEnergyPoints').text($('h1').empty);
		// console.log(typeof(parseInt(current)));
		// this.displayPlayerEnergy();
		// console.log(this.playerEnergyPoints);
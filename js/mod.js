let modInfo = {
	name: "Symbolenture",
	id: "13",
	author: "Bilboy",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	dateTime: 0,
	prev: '.',
	Sprev: '.',
	Lprev: ',',
	reset: false,
	interva: false,
	timeX: 0,
	intervae: false,
	intervaea: false,
	intervaeae: false,
	North: 0,
	East: 0,
	West: 0,
	South: 0,
	Zone: 1,
	ML: false,
	MR: false,
	MU: false,
	MD: false,
	One:  C1_LIST[0],
	Two:  C1_LIST[0],
	Three:  C1_LIST[0],
	Four:  C1_LIST[0],
	Five:  C1_LIST[0],
	Six:  C1_LIST[0],
	Seven:  C1_LIST[0],
	Eight:  C1_LIST[0],
	Nine:  C1_LIST[0],
	Ten:  C1_LIST[0],
	Eleven:  C1_LIST[0],
	Twelve:  C2_LIST[0],
	Thirteen:  C2_LIST[0],
	Fourteen:  C2_LIST[0],
	Fifteen:  C2_LIST[0],
	Sixteen:  C1_LIST[4],
	Seventeen:  C2_LIST[0],
	Eighteen:  C2_LIST[0],
	Nineteen:  C1_LIST[0],
	Twenty:  C2_LIST[0],
	Twentyone:  C1_LIST[0],
	Twentytwo:  C1_LIST[0],
	Twentythree:  C2_LIST[2],
	Twentyfour:  C2_LIST[0],
	Twentyfive:  C1_LIST[1],
	Twentysix:  C1_LIST[1],
	Twentyseven:  C1_LIST[1],
	Twentyeight:  C2_LIST[0],
	Twentynine:  C2_LIST[0],
	Thirty:  C2_LIST[0],
	Thirtyone:  C1_LIST[0],
	Thirtytwo:  C1_LIST[3],
	Thirtythree:  C2_LIST[0],
	Thirtyfour:  C1_LIST[1],
	Thirtyfive:  C1_LIST[1],
	Thirtysix:  C1_LIST[1],
	Thirtyseven:  C1_LIST[1],
	Thirtyeight:  C1_LIST[1],
	Thirtynine:  C1_LIST[1],
	Fourty:  C2_LIST[0],
	Fourtyone:  C1_LIST[1],
	Fourtytwo:  C1_LIST[1],
	Fourtythree:  C1_LIST[1],
	Fourtyfour:  C1_LIST[1],
	Fourtyfive:  C1_LIST[1],
	Fourtysix:  C1_LIST[1],
	Fourtyseven:  C1_LIST[1],
	Fourtyeight:  C1_LIST[1],
	Fourtynine:  C1_LIST[1],
	Fifty:  C1_LIST[1],
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
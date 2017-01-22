// Create a BasicCard constructor. It should accept front and back arguments.
function BasicCard (front, back) {
	this.front = front,
	this.back = back
};
// Create a ClozeCard constructor. It should accept text and cloze arguments.
function ClozeCard (text, cloze) {
	this.text=text,
	this.cloze=cloze,
	this.full = this.text + " " + this.cloze,
	this.clozeReturn= function() {
		return this.cloze;
	},
	this.clozePartial = function() {
		return this.text;
	},
	this.clozeFull = function() {
		return this.full;
	},
	this.checkError = function() {
		if (this.full.includes(this.cloze)===false) {
			throw error;
		};
	}
};

var card = new ClozeCard("the president is", "donald trump");
	console.log(card);
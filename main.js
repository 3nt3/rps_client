// Some js client

var rootURL = "https://api.niels-dingsbums.de/rps/"

function changeFig(room, player, fig) {

	var url = rootURL+room+"/postFig/"+player;

	xhttp = new XMLHttpRequest();
	xhttp.open("POST", url);
	xhttp.send(fig);

}

function updateScore(room, player, score) { 

	var url = rootURL+room+"/updateScore/"+player;

	xhttp = new XMLHttpRequest();
	xhttp.open("POST", url);
	xhttp.send(score);

}

function getScores(room) {

	var scores;
	var url = rootURL+room+"/getScores";

	xhttp = new XMLHttpRequest();
	xhttp.open("GET", url);

	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		scores = this.responseText;
  		}
  	};

  	return scores.toString();
}

function getFigs(room) {

	var figs;
	var url = rootURL+room+"/getFigs";

	xhttp = new XMLHttpRequest();
	xhttp.open("GET", url);

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			figs = this.responseText;
		}
	}

	return figs.toString();
}

var mehrfachsteckdose = true;

function keksen(room) {
	console.log("Keeeeeeeksen!!!")

	for (var i = 0; i >= 30; i++) {
		var scores = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)]

		updateScore(room, 0, scores[0]);
		updateScore(room, 1, scores[1]);
	}
}


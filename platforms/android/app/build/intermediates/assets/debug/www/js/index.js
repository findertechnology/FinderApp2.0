
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    }
};

app.initialize();
//document.getElementById("img1").src = "img/finderscores.png";

/*
function seleccion(elem){
	alert("Hola: "+ elem);
	var act = document.getElementById(elem).src;
	var part = act.split(".");
	if(part.split("-")[1] == null){
		//document.getElementById(elem).src = part[0]+ "-selected."+ part[1];
	}
}

function deseleccion(elem){
	var act = document.getElementById(elem).src;
	var part = act.split("-");
	if(part[1] != null){
		var part2 = part[1].split(".");
		//document.getElementById(elem).src = part[0]+ "."+ part2[1];
	}
	
}
*/


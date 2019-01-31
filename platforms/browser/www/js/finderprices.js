
	function getBTC(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/btc-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText; 
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("btc");
	 var val = parseFloat(obj.ticker.price).toFixed(0);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	 if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}

	function getETH(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/eth-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("eth");
	 var val = parseFloat(obj.ticker.price).toFixed(0);
	var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}

	function getLTC(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/ltc-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("ltc");
	 var val = parseFloat(obj.ticker.price).toFixed(1);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	 if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}

	function getXRP(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/xrp-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("xrp");
	 var val = parseFloat(obj.ticker.price).toFixed(2);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	 if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}

	function getEOS(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/eos-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("eos");
	 var val = parseFloat(obj.ticker.price).toFixed(2);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	 if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}

	function getXMR(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/xmr-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("xmr");
	 var val = parseFloat(obj.ticker.price).toFixed(1);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}

	function getZEC(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/zec-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("zec");
	 var val = parseFloat(obj.ticker.price).toFixed(1);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}
	
	function getDASH(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/dash-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("dash");
	 var val = parseFloat(obj.ticker.price).toFixed(1);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}
	
	function getIOT(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/iot-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("iot");
	 var val = parseFloat(obj.ticker.price).toFixed(2);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}
	
	function getBCH(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/bch-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("bch");
	 var val = parseFloat(obj.ticker.price).toFixed(1);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}
	
	function getADA(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/ada-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("ada");
	 var val = parseFloat(obj.ticker.price).toFixed(3);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}
	
	function getNEO(){
	 var objHttp=null;
	 if(window.XMLHttpRequest) {
	 objHttp = new XMLHttpRequest(); 
	 } else if(window.ActiveXObject) {
	 objHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	 } 
	 objHttp.open("GET", "https://api.cryptonator.com/api/ticker/neo-eur" , true); 
	 objHttp.onreadystatechange = function() {
	 if (objHttp.readyState == 4 && objHttp.status == 200) {
	 var fichero = objHttp.responseText;
	 var obj = JSON.parse(fichero);
	 var tipe = document.getElementById("neo");
	 var val = parseFloat(obj.ticker.price).toFixed(2);
	 var num = (parseFloat(obj.ticker.change)/val)*100;
	if(obj.ticker.change < 0){
	 tipe.innerHTML = val+ " € <span style='color: red;'><i class='fa fa-chevron-down' aria-hidden='true'></i>( "+ num.toFixed(2)+" % )</span>";
	 }else{
	if(obj.ticker.change == 0){
	tipe.innerHTML = val+" € <span style='color: gray;'><i class='fa fa-minus' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	}else{
	 tipe.innerHTML = val+" € <span style='color: green;'><i class='fa fa-chevron-up' aria-hidden='true'></i>( "+ num.toFixed(2) +" % )</span>";
	 } }
	 } 
	 }
	 objHttp.send(); 
	}
	
	function getPrices(){
	 getBTC();
	 getETH();
	 getLTC();
	 getXRP();
	 getEOS();
	 getXMR();
	 getZEC();
	 getDASH();
	 getIOT();
	 getBCH();
	 getADA();
	 getNEO();
	}
	getPrices();
	setInterval("getPrices()",5000);

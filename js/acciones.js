// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

});

function onDeviceReady(){
	
$('posicion').on('click',function(){
	getPosition();
	});
	
$('#watch').on('click',function(){
	watchPosition();
});

}

	function getPosition(){
	var options={
		enableHighAccuaracy:true,
		maximumAge:3600000
	}
	
	var watchID=navigator.geolocation.getCurrentPosition(onSuccess. onError, options);
	function onSurccess(position){
		
		alert('Latitude:' +position.coords.latitude +'\n'+
		'Longitude:' +position.coords.longitude +'\n'+
		'Altitude:' +position.coords.altitude +'\n'+
		'Accuarcy:' +position.coords.accuarcy +'\n'+
		'Altitude Accuarcy:' +position.coords.altitudeAccuarcy +'\n'+
		'Heading:' +position.coords.heading +'\n'+
		'Speed:' +position.coords.speed +'\n'+
		'Timestamp:' +position.coords.timestamp +'\n');
	};
	
	function onError(error){
		alert('code:' +error.code +'\n'+ 'message:' + error.message +'\n');
	}
}

function watchPosition(){
	var options={
		maximumAge:3600000,
		timeout:3000,
		enableHighAccuarcy:true,
	}
	
	var watchID=navigator.geolocation.watchPosition(onSuccess,onError,options);
	function onSuccess(position){
$('#latitud').html(position.coords.latitude);
$('#longitud').html(position.coords.longitud);
$('#altitud').html(position.coords.altitud);
$('#accuaracy').html(position.coords.accuaracy);
$('#aaccuaracy').html(position.coords.altitudeAccuaracy);
$('#headding').html(position.coords.headding);
$('#speed').html(position.coords.speed);	
$('#timestamp').html(position.coords.timestamp);
};

	function onError(error){
		alert('code:' +error.code +'\n'+ 'message:' + error.message +'\n');
	}
}
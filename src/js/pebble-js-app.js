Pebble.addEventListener('ready', function() {
  console.log('PebbleKit JS ready!');
});

Pebble.addEventListener('showConfiguration', function() {
  var url = 'https://rawgit.com/Obsouleet/PWatch/master/config/index1.html';
  console.log('Showing configuration page: ' + url);

  Pebble.openURL(url);
});

Pebble.addEventListener('webviewclosed', function(e) {
  var configData = JSON.parse(decodeURIComponent(e.response));
  console.log('Configuration page returned: ' + JSON.stringify(configData));
	
	
//  var backgroundColor = configData['background_color'];

//	var app_message_json = {};
/*	if (configData.inverted === null) configData.inverted = 0;
	if (configData.twelvehr === null) configData.twelvehr = 0;
	if (configData.showdate === null) configData.showdate = 0;
*/	
//	 app_message_json.KEY_INVERTED = parseInt(configData.inverted);
//	 app_message_json.KEY_TWELVEHR = parseInt(configData.twelvehr);
//	 app_message_json.KEY_SHOWDATE = parseInt(configData.showdate);
	
	
//	console.log('Inverted: ' + app_message_json.inverted);
	
	
  var dict = {
		0:parseInt(configData['inverted']),
		1:parseInt(configData['twelvehr']),
		2:parseInt(configData['showdate'])
	};
	console.log('Inverted: ' + dict);
	/*
	// Send to watchapp
  Pebble.sendAppMessage(dict, function() {
    console.log('Send successful: ' + JSON.stringify(dict));
  }, function() {
    console.log('Send failed!');
		    console.log(" failed: "+JSON.stringify(dict));
  });*/
	
	
	      Pebble.sendAppMessage(dict,
            function(e) {
              console.log ("\n++++ I am inside of 'Pebble.addEventListener(webviewclosed) callback' Data sent to phone successfully!");
            },
            function(e) {
              console.log ("\n++++ I am inside of 'Pebble.addEventListener(webviewclosed) callback' Data sent to phone failed! = " +  JSON.stringify(e));
            }
         );
});
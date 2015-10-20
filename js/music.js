// Initialize Parse app
Parse.initialize('WI4XeOSVZD1WkWD257wJyT0729AQ1RP00Y3RYKdJ', 'RgmNdpFATeviEdFu1g1xQrZGVDuyieDuBdosMV45');

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// Create a new instance of your Music class 


// Set a property 'band' equal to a band name


// Click event when form is submitted
$('form').submit(function() {
	var musicItem = new Music();

	$(this).find('input').each(function() {
		instance.set($(this).attr('id'), $this.val());
		$this.val('');
	});

	// musicItem.set('band', $('#band').val());
	// musicItem.set('website', $('#site').val());
	// musicItem.set('song', $('#best').val());
	// musicItem.save();

	// $('#band').val("");
	// $('#site').val("");
	// $('#best').val("");

	// Create a new instance of your Music class 


	// For each input element, set a property of your new instance equal to the input's value


	// After setting each property, save your new instance back to your database

	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads



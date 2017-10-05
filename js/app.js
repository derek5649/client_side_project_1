

/* I created four variables.  "wholePrice" and "percent" don't equal anything for now, but I will add on to them later on.  "whole" and "percentage" input both classes, "whole" and "percentage" from my list. */ 
var wholePrice = 0;
var percent = 0;
var whole = document.querySelectorAll('input[class=whole]');
var percentage = document.querySelectorAll('input[class=percentage]');

// I created two loops for loops that will add up the checkboxes and radios


for(var i = 0; i < whole.length; i ++) {
// This for loop, loops around thorough the entire whole variable.

	whole[i].addEventListener('change', function() {
		/* I put in an addEventListener to determine whenever you click on a button, it will check to see if it's actually being clicked on or not. */

		if(this.checked) {

			/* This states that if it is checked, then value whole will be put under the variable wholePrice. The parseInt converts that variable into a string, which will change into a number. */

			wholePrice += parseInt(this.value);

			/* The parseInt converts that variable into a string, which will change into a number. */

			console.log("Whole price is $" + wholePrice);

			// This makes sure that the variable wholePrice is added to the console.

		} else {
			// However, if the input is unchecked..

			wholePrice -= parseInt(this.value);

			// The value instead will subtact from wholePrice.

			console.log("Whole price is $" + wholePrice);
			// Again, this updates the variable wholePrice into the console

		}
	});
}

/* The second loop is a bit trickier because I'm dealing with percentages.  So, this math equation is suppose to convert a percentage into a whole number, which in turn will be easier when I have to add everything together. */
for(var i = 0; i < percentage.length; i++) {
	// This for loop, loops around the variable percentage

	percentage[i].addEventListener('change', function() {
		/* The addEventListener will check to see if what you click is actually been checked */
		
		if(this.checked) {
			// If it is, then the value percent will be placed into the variable percentage

		percentage += parseInt(this.value);

		// parseInt converts the value into a string and then changes it into a number

		console.log("Percentage price is " + percentage + "%");
		// console.log updates the variable percentage into the console

		}
	});
}


function total() {
	/* I created a function so when I hit the submit button, it will add up the total value of whatever I checked on the list */

	var total = document.querySelector('.submit');
	// The document.querySelector will add up all of the numbers together

	total.querySelector('p').textContent = "$" + wholePrice + (percentage / 100) * wholePrice;

	/* This is where it get complicated because this is a complicated math algorithm.  Basically, this takes the wholePrice and percentage variables and adds them together.  However, since percentage carries 'actual percentages', I have to try and convert them into whole numbers.  So, it takes whatever percentage has been checked and will divide by 100 (because the cake base price = 100) to get a decimal value.  Then, I'll take that decimal value and mulitiply it with wholePrice (because wholePrice contains actual whole numbers), which will give me a wholePrice percentage.  Finally, whatever percentage I've received needs to be added to the actual wholePrice value in order to get the total price of the cake. */

}



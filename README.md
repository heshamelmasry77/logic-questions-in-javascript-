# logic-questions-in-javascript-
I am just writing some logic questions people stuck in it.
An array of numbers is given :
[1,2,31,24, -67,5,3,555,79, -4,21,33,89, -90].

Find the maximum and minimum value of the array.
Write all positive and even numbers into another array. Output the results on the screen.

``` var input = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];
		var	min = input[0],
			max = input[0],
			output = [];

		//Find the maximum and minimum value of the array..
		for (var i = 0; i < input.length; i++) {
			if (input[i] > max) {
				max = input[i];
			}
			if (input[i] < min) {
				min = input[i];
			}
			if (input[i] > 0 && input[i] % 2 == 0) {				
				output.push(input[i]);
			}
		}
    

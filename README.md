# logic-questions-in-javascript-
I am just writing some logic questions people stuck in it.
1. An array of numbers is given :
 [1,2,31,24, -67,5,3,555,79, -4,21,33,89, -90].

Find the maximum and minimum value of the array.
Write all positive and even numbers into another array. Output the results on the screen.

``` 
var input = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];
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
```
2.Create the function isEmpty (obj),
which returns true if there are no properties in the object
and false - if at least one property is present.

```
function isEmpty(obj){
		return Object.keys(obj).length === 0;
	}
```

3.Create the function find (arr, value), which searches for the value in the array and returns its number, if found return it, or -1 if not found..
```
function find(arr, value) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === value) {
					return i;
				}
			}
			return -1;
		}
		var array = [1, 2, 3, 4, 5];
		console.log(find(array, 4));
```

4. Sort the array arr using the bubble sort algorithm
var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6]; 
```
var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];

		for (var i = 0; i < arr.length - 1; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					var t = arr[j];
					arr[j] = arr[i];
					arr[i] = t;
				}
			}
		}
```
5. Write the function bigToSmall, which will take one argument arr (two-dimensional array).

Bring the two-dimensional array to one-dimensional.
Sort the array in descending order.
Use the '>' character as a separator when converting an array to a string.
For example:

bigToSmall([[1,2],[3,4],[5,6]])  "6>5>4>3>2>1"

bigToSmall([[1,3,5],[2,4,6]])  "6>5>4>3>2>1"

bigToSmall([[1,1],[1],[1,1]])  "1>1>1>1>1"
	
```

  function bigToSmall(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        arr2.push(arr[i][j]);
      }
    }
    for (var i = 0; i < arr2.length - 1; i++) {
      for (var j = i + 1; j < arr2.length; j++) {
        if (arr2[i] < arr2[j]) {
          var t = arr2[j];
          arr2[j] = arr2[i];
          arr2[i] = t;
        }
      }
    }
    return arr2.join('>');
```

6. What will be the result of this code?
Will the external variable value change? How will the result change
if the var keyword is removed from the string var value = false?
```
var value = 0;
		function f() {
			if (1) {
				value = true;
			} else {
				var	value = false;
			}
			alert( value );
		}
		f();
```

Answer: the alert will print true, since the function
fulfills only the first condition (because 1 is always true),
the else does not work.
Accordingly, the result in the absence of the keyword var will not change,
unless you change the first condition that will not be executed, then value will
be rewritten because it will become global.


7.Write a function that returns the number of its own calls.(like how many times the function been called).

```

  var counterCall = function() {
    var counter = 0;
    return function() {
      return ++counter;
    };
  };

  var numberOfCalls = counterCall();
  numberOfCalls();
  numberOfCalls();
  console.log(numberOfCalls());

```

8. The following code creates an array of shooters.
According to the plan, each shooter should display his number.
Now all the functions-arrows print 10 instead of their number.
Correct the code so that when you call each of them,
it displays its number (the index in the array). Suggest a few options.


```
function makeArmy() {
		var shooters = []; 

		for (var i = 0; i< 10; i++) {
		    var shooter = (function (j) { // arrow function
              return function(){
		    		alert(j); // displays his number
              }
			})(i); 
		
			shooters.push(shooter); 
		} 
		return shooters; 
	}
	var army = makeArmy(); 
	army[0](); //the arrow outputs 10, and should 0
	army[5](); // the shooter outputs 10, but should 5.

```

9.  Write a function that takes 1 parameter. On the first call,
it remembers it, the second - sums the
transmitted parameter with the parameter transmitted during the previous call.

```
function sumAll(){
		var total = 0;
		return function(number){
			return total += number;
		}

	}

	var sum = sumAll();
	alert(sum(3));
	alert(sum(5));
	alert(sum(228)); 
```
10.Create a strCount function
that takes one argument (object) and
counts the number of string type properties

```

  
  function strCount(obj) {
    console.log(obj);
    var num = 0;
    for(var prop in obj){
      var item = obj[prop];
      if(typeof item==='string'){
        ++num;
      }
      if(typeof  item ==='object'){
        num += strCount(item);
      }
    }
    return num;
  }

  var object1 = {
    key1: 2,
    key2: 'name',
    key3: 4,
    key4: 'null',
    key5: ['string', 5, ['adasd', 'asdasd']]
  };
  alert(strCount(object1));
```

11. Write a function that adds up numbers on a double call. we create a function which create another functoin inside it and then the other function alert the sum of the two inputs
```
function makeCounter(a) {
			return function(b) {
				return alert(a+b);
			}
		}
		makeCounter(9)(4); 
```

12.	 Why is the first equality wrong, and the second is true?
```
		 alert( [] == [] ); // false
		alert( [] ==! [] ); // true
```
What transformations occur in the calculation?

1 - the first equation will be false, because two objects can be equal only if it is the same object.


2 - the equation will be true, since the right part! [] will convert the argument to the logical type, the array is the object, therefore, the array will be true, "!" - will change it to false.


equating the array with a primitive causes the array to be converted to a numeric value; the toString method converts it to an empty string, since there is no valueOf in the array. Empty string is false.



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


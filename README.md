By now you know how to write functions. But how should you use functions? And why?

Functions are used for two key reasons...
To simplify complexity. Once they're written you can use them without needing to know how they work on the inside. You can pass parameters (input) to them and get return values (output) from them without needing to know all the code inside. It puts a complex thing in a simple little package. In programming this simplifying of complex things is known as abstraction.

The other reason to use functions is to make it so that you don't have to repeat yourself. You can call a function multiple times reusing the function again and again throughout your code with different parameters without having to type out all of that inside-the-function code. In programming this concept is abbreviated DRY (for "don't repeat yourself") It's also called modularity because your code is organized in reusable modules.

See the function over there called randomHex()?  It is a way to generate a random hexadecimal number from 0-F. Hit run to see it work. Wasn't that nice? It was a tad bit complicated to write the code on lines 2 and 3 but now that I have it I can use it without having to think about the complexity under the hood. That function is an abstraction. It's a simplification of something more complex. You'll have to write about abstraction on the AP CSP exam.

Now scroll down a bit in the code to see a function that makes it print two random hexadecimal numbers in a row. Delete the // on line 22 to uncomment the console.log that will print the result and hit run on the console.log() on line 22 and hit run to see it work. It just calls randomHex() and concatenates the string result with another call to randomHex(). This is an example of how code can be made to be modular. 

**Your task:** Make a function called threeDigitRandomHex() that prints out three random hexadecimal digits in a row.

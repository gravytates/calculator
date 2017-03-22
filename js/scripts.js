
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var division = function(number1, number2) {
  return number1 / number2;
};



$(document).ready(function() {

  var calculator = function(clickedButton, mathOperation) {
    $(clickedButton).click(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#1stNum").val());
      var number2 = parseInt($("#2ndNum").val());
      var result = mathOperation(number1, number2);
      $("#output").text(result);
    });
  };

  calculator("#addBtn", add)
  calculator("#subBtn", subtract)
  calculator("#divBtn", division)
  calculator("#mulBtn", multiply)

});



// BMI CALCULATOR

// var lbs = parseInt(prompt("What is your weight in pounds?"));
// var inches = parseInt(prompt("What is your height in inches?"));
//
// //Separate Variables
//
// var kg = function(lbs) {
// 	return lbs * 0.45;
// };
// var metersq = function(inches) {
// 	return (inches * 0.025) ** 2;
// };
// //EVERYTHING ABOVE WORKS
//
//
// var bmi = function(kg, metersq) {
// 	return kg(lbs) / metersq(inches);
// };
//
// alert("Your BMI is " + bmi(kg, metersq).toFixed(2));

//Conversions all in one

//var bmi = function(lbs, inches) {
	//return (lbs * 0.45) / ((inches * 0.025) ** 2);
//};

//alert(bmi(lbs, inches));

// Fahrenheit to Celsius (and vice versa) converter

// var celsius = parseInt(prompt("What is the temperature in Celsius?"));
//
// var fahrenheit = function(celsius) {
// 	return celsius * (9/5) + 32;
// };
//
// alert(fahrenheit(celsius));
//
// var fahrenheit = parseInt(prompt("What is the temperature in Fahrenheit?"));
//
// var celsius = function(fahrenheit) {
// 	return (fahrenheit - 32) * (5/9);
// };
//
// alert(celsius(fahrenheit));

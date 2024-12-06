
//add a click event listenr to compute the fahrenheit to Celsius button.

//Celsius to Fahrenheit
document.getElementById("compute_to_fahrenheit").addEventListener("click", function() 
{
    var celsius,fahrenheit; 
    celsius = document.getElementById("Celsius").value;

    fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheit result").value = fahrenheit;
});
// Fahrenheit to Celsius
document.getElementById("compute_to_celsius").addEventListener("click",function()
{
    var fahrenheit, celsius;
    fahrenheit = document.getElementById("fahren-to-celsius").value;

    celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("Celsius_result").value = celsius;
});
// Meters to Feet
document.getElementById("compute_to_feet").addEventListener("click", function()
{
    var meters, feet;
    meters = document.getElementById("meters").value;

    feet = meters * 3.28;
    document.getElementById("result to feet").value = feet;
});
// Feet to meters
document.getElementById("compute_to_meters").addEventListener("click", function()
{
    var meters, feet;
    feet = document.getElementById("feet").value;

    meters = feet / 3.28;
    document.getElementById("result to meter").value = meters;
});






//Section Clear//


//Clear fahrenheit
document.getElementById("clear_fahrenheit").addEventListener("click", function()
{
    document.getElementById("Celsius").value ='';
    document.getElementById("fahrenheit result").value ='';
    confirm ("Are you sure?");
});
//Clear celsius
document.getElementById("clear_celsius").addEventListener("click", function()
{
    document.getElementById("fahren-to-celsius").value ='';
    document.getElementById("Celsius_result").value ='';
    confirm ("Are you sure?");
});
// Cleer meters to feet
document.getElementById("clear_feet").addEventListener("click", function(){
    document.getElementById("meters").value ='';
    document.getElementById("result to feet").value ='';
    confirm ("Are you sure?");
});
// Cleer feet to meters
document.getElementById("clear_meters").addEventListener("click", function(){
    document.getElementById("feet").value ='';
    document.getElementById("result to meter").value ='';
    confirm ("Are you sure?");
});

document.getElementById("computeincometax").addEventListener("click", function()
{
    const income = document.getElementById("income").value*1;


    if (income <= 250000)
    {
        taxrate= 0.0;
        basictax=0;
    }
    else if (income >= 250000 && income <= 400000)
    {
        taxrate = 0.2;
        basictax = 250000
    }
    else if (income >= 400000 && income <= 800000){
        taxrate = 0.25;
        basictax = 400000;
    }
    else if (income >=800000 && income <=2000000){
        taxrate = 0.30;
        basictax =800000;
    }
    else if (income >=2000000 && income <=8000000){
        taxrate=0.32;
        basictax= 200000;
    }
    else if (income >= 800000)
    {
        taxrate= 0.35;
        basictax= 800000;
    }
   if (income < 0)
   {
    alert("Enter a valid input!");
   }
    incometax = taxrate * (income - basictax);
   
    document.getElementById("incometax_result").value = incometax;   
});
document.getElementById("Clear").addEventListener("click", function() {
    document.getElementById("income").value='';
    document.getElementById("incometax_result").value='';
    confirm ("Confime to clear all?");
});
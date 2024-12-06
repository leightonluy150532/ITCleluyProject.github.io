/*Button pop up operations*/
function showFactorial(){
    document.getElementById("Factorial").style.display="block";
    document.getElementById("Sum").style.display="none";
    document.getElementById("Average").style.display="none";
};
function showSum(){
    document.getElementById("Sum").style.display="block";
    document.getElementById("Average").style.display="none";
    document.getElementById("Factorial").style.display="none";
};
function showAverage(){
    document.getElementById("Average").style.display="block";
    document.getElementById("Factorial").style.display="none";
    document.getElementById("Sum").style.display="none";
};
function showAll(){
    var show = document.getElementById("documents");

    if (show.style.display ="block")
    {
        show.style.display="block";
    } else
    {
        show.style.display="block";
    }
};
/*Operation*/

/*factorial*/

function computeFactorial(){
    var fact, input;
    input = document.getElementById("input_factorial").value;
    fact = 1;
    let i = 1;
    while (i<= input)
    {
        fact *= i;
        i++;
    }
    document.getElementById("result_factorial").value = fact;
};

document.getElementById("delete_factorial").addEventListener("click", function(){
    document.getElementById("input_factorial").value='';
    document.getElementById("result_factorial").value='';
    confirm("Confirm/Cancel to clear");
});

/* Sum */ 
function computeSum()
{
    var i, input, sum;
    input = document.getElementById("inputsum").value;
    sum = 0;
    i = 0;
    do {
        sum += i;        
        i++;
    }
    while (i <= input);
    
    if (input <= 0)
    {
        alert("Enter Valid Integer");
        document.getElementById("inputsum").value='';
    }
    document.getElementById("sumresult").value = sum;
    
};
document.getElementById("DeleteSum").addEventListener("click", function(){
    document.getElementById("inputsum").value='';
    document.getElementById("sumresult").value='';
    confirm("Confirm/Cancel to clear");
});

/*Average*/
function computeAverage(){
    var n, average;
    n = document.getElementById("inputaverage").value;
    let sum = 0;
    for(let i= 1; i <= n; i++)
    {
        sum += i;
    }
    
    if (n <= 0)
    {
        alert("Enter Valid Integer");
        document.getElementById("inputaverage").value='';
    }
    average = sum / n ;
    document.getElementById("averageresult").value = average;
};

document.getElementById("DeleteAverage").addEventListener("click", function(){
    document.getElementById("inputaverage").value='';
    document.getElementById("averageresult").value='';
    confirm("Confirm/cancel to clear");
});
const buttons = document.querySelectorAll(".button");
const calcAns = document.getElementById("answer");

buttons.forEach(element =>
{
    element.addEventListener("click", myFunc)
});

function myFunc(e)
{
    if (e.target.innerHTML == "c")
    {
        calcAns.value = '';
    }
    else if (e.target.innerHTML == "←")
    {
        calcAns.value = calcAns.value.substr(0, calcAns.value.length - 1);
    }
    else if (e.target.innerHTML == "+" ||
        e.target.innerHTML == "-" ||
        e.target.innerHTML == "/" ||
        e.target.innerHTML == "*"){
        let LastString = calcAns.value.charAt(calcAns.value.length - 1)
        if (LastString == "." || 
            LastString == "+" || 
            LastString == "-" || 
            LastString == "*" || 
            LastString == "/")
            {
                calcAns.value = calcAns.value.substr(0, calcAns.value.length - 1);
                calcAns.value += e.target.innerHTML;
            }
        else
        {
            calcAns.value += e.target.innerHTML;
        }
    }
    else if (e.target.innerHTML == "=")
    {
        calcAns.value = eval(calcAns.value);
    }
    else
    {
        calcAns.value += e.target.innerHTML;
    }
}
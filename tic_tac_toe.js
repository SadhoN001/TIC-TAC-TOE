var restart=document.querySelector("#bt")

var sqr=document.querySelectorAll('td')

function clearboard()
{
    for(var i=0;i<sqr.length;i++)
    {
        sqr[i].textContent=""
    }
}

restart.addEventListener("click",clearboard)

// var one=document.querySelector("#one")
// one.addEventListener("click",function(){
//     if(one.textContent === "")
//     {
//         one.textContent="X";
//     }
//     else if(one.textContent === "X")
//     {
//         one.textContent="O";
//     }
//     else
//     {
//         one.textContent="";
//     }
// })
function Mark()
{
    if(this.textContent === "")
    {
        this.textContent="X";
    }
    else if(this.textContent === "X")
    {
        this.textContent="O";
    }
    else
     {
        this.textContent="";
    }
}
for(var i=0;i<sqr.length;i++)
{
    sqr[i].addEventListener('click',Mark)
}


var H2=document.querySelector("h2")
H2.style.color='red';

function randomcolor()
{
    var letter ="0123456789ABCDEF"
    var color ="#"
    for(var j=0;j<6;j++)
    {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color
}
function changecolor()
{
    col=randomcolor()
    H2.style.color=col
}
setInterval("changecolor()",300)
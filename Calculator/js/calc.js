dis = (val) =>{ 

    document.getElementById("result").value += val 

} 

solve = () =>{ 

    var n1 = document.getElementById("result").value 

    var n2 = eval(n1)

    document.getElementById("result").value = n2

} 

clr = () => { 

    document.getElementById("result").value = "" 

} 

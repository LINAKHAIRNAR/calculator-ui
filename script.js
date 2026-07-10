
    var input=document.getElementById("input")
    function display(value)
    {
        input.value+=value
    }
    function expression()
    {
        
        input.value=eval(input.value)

    }
    function allClear(){
        input.value=""
    }
    function backPress(){
        input.value=input.value.slice(0,-1)
        //input.value=input.value.substring(0,input.value.length-1)
    }


    


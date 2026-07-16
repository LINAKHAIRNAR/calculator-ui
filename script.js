
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
    function colon(){
        let n;
        let arr=input.value.split("")

        let open=arr.filter(ch=>ch==="("
        ).length;

        let close=arr.filter(ch=>ch===")"
        ).length;

        // console.log(open)
        // console.log(close)

        if(open===close)
        {
        arr.push("(")
        n= arr.join("")
        input.value=n
        }
        else{
         arr.push(")")
         n= arr.join("")
         input.value=n

        }

        // if(!arr.includes("("))
        // {
        // arr.push("(")
        // n= arr.join("")
        // input.value=n
        // }
        // else{
        // arr.push(")")
        // n= arr.join("")
        // input.value=n
        // }
        
        
    }

    


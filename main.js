var mouseEvent = "Empty";
    var last_position_of_x, last_position_of_y;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color= "red";
    width_of_line= 5;    

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        

        mouseEvent = "mousedown";
    }

    //Create the addEventListener() function for mouseup(). 


    

    //Create the addEventListener() function for mouseleave(). 

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
        {
              mouseEvent = "mouseUP";
        }





    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouse_Event == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        

        //print the current x and y coordinate.
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

        ctx.moveTo(last_positon_of_x , last_position_of_y);
        

        //print the current x and y coordinate.
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_positon_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke()
        
        
        }
        
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

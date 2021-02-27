//These are the variables we will use in javascript coding
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var width = 1;
var mouse_event="mouseup";
var last_x,last_y;
//This will be used to set the size of the screen on the mobile or tablet
var width = screen.width;
console.log(width);
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
//This is used to add an event listener for "touchstart"
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
     color = document.getElementById("color_input").value;
     width = document.getElementById("width_input").value;
}

//This is used to add an event listener for "touchmove"
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_touch_x = e.touches[0].clientX - offsetLeft;
    current_position_touch_y = e.touches[0].clientY - offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("last position of x and y corresponds to");
    console.log("x = "+last_x+" y = "+last_y);
    ctx.moveTo(current_position_touch_x, current_position_touch_y);
    console.log("current position of x and y corresponds to");
    console.log("x = ",+current_position_touch_x+" y = "+current_position_touch_y);
    ctx.lineTo(current_position_touch_x, current_position_touch_y);
    last_x= current_position_touch_x;
    last_y = current_position_touch_y;
}

//This is used for adding an event listener for "mousedown"
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
    mouse_event ="mousedown";  
}

//This is used for adding an event listener for "mousemove"
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_mouse_y = e.clientY - canvas.offsetTop;
    if(mouse_event == "mousedown"){
        ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("last position of x and y corresponds to");
    console.log("x = "+last_x+" y = "+last_y);
    ctx.moveTo(current_position_mouse_x, current_position_mouse_y);
    console.log("current position of x and y corresponds to");
    console.log("x = ",+current_position_x+" y = "+current_position_y);
    ctx.lineTo(current_position_mouse_x, current_position_mouse_y);

    }
    last_x = current_position_mouse_x;
    last_y = current_position_mouse_y;
    
}

//This is used for adding an event listener for "mouseup"
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup"
}

//This is used for adding an event listener for "mouseleave"
canvas.addEventListener("mouseup", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave"
}

//This is the function for clearing the area
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
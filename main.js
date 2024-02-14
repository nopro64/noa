var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

/* Para saber qué tamaño de pantalla que está usando el usuario 
buscaremos el ancho de la pantalla screen.width; */
var width = screen.width;

/*Almacenar el nuevo ancho y el nuevo alto en new_width y new_height */
new_width =  screen.width - 70; 
new_height = screen.width - 300;

/*Escribir una condición para verificar si el tamaño de la pantalla es inferior*/
	
    if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    /*Propiedad para sobrepasar la pantalla*/
    document.body.style.overflow = "hidden";
	}

/*Insertar Evento "touchstar": es lo mismo que un evento mousedown pero al tocar la pantalla*/
canvas.addEventListener("touchstart", my_touchstart);


function my_touchstart(e) 
{

  /*Imprimir la función “my_touchstart” para que al tocar la pantalla, 
  obtenerla en la consola. */
  console.log("my_touchstart");
  
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

/*Agregar detector de evento */
canvas.addEventListener("touchmove", my_touchmove);

/*Reemplazar el evento my_mousemove por my_touchmove */
function my_mousemove(e) 
{

	console.log("my_touchMove");

    /*Indica que el evento solo pintará las cordenadas de un dedo con e.touches[0] */
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Última posición de las coordenadas X y Y = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Posición actual de las coordenadas X y Y = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
}

   
function clearArea() {
    /*Limpiar el lienzo desde la parte superior izquierda y la parte inferior derecha */
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
   

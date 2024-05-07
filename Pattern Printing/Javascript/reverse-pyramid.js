
// Reverse left-side pyramid
let rows = 5;
let cols = rows;

for ( let i=0; i<rows; i++){

    for ( let j=0; cols>j; j++){
        document.write("*");
    }
    cols -= 1
    document.write("</br>");
}



// Reverse full pyramid
rows = 5;
cols = rows;
let space = 0;
for ( let i=0; i<rows; i++){

    for ( a=0; a<space; a++){
        document.write("&nbsp;")
    }

    for ( let j=0; cols>j; j++){
        document.write("*");
    }
    cols -= 1
    space += 1
    document.write("</br>");
}



// &nbsp; VARIATIONS
rows = 5;
cols = rows;
space = 0;
for ( let i=0; i<rows; i++){

    for ( a=0; a<space; a++){
        document.write("&nbsp;&nbsp;")
    }

    for ( let j=0; cols>j; j++){
        document.write("&nbsp; *");
    }
    cols -= 1
    space += 1
    document.write("</br>");
}



// reverse Right pyramid, just a SIMPLE CHANGE IN ABOVE CODE
rows = 5;
cols = rows;
space = 0;
for ( let i=0; i<rows; i++){

    for ( a=0; a<space; a++){
        document.write("&nbsp;&nbsp;")
    }

    for ( let j=0; cols>j; j++){
        document.write("*");
    }
    cols -= 1
    space += 1
    document.write("</br>");
}


// Using for loop ---- with 1 &nbsp; DON'T DO COL += 2 HERE because you have given only one half space nbsp;

document.write("Using for loop");
document.write("</br>");
let col = 1;
let rows = prompt("Enter the number of rows of stars you want:");
let space = rows - 1;
for (let i = 0; i < rows; i++){
    
    for (let _ = 0; _ < space; _++){
        document.write("&nbsp;");
    }
    for (let j = 0; col > j; j++){
        document.write("*");
    }
    document.write("</br>")
    col += 1
    space -= 1
}

// with 2 &nbsp;
col = 1
rows = 10
space = rows - 1
for (let i = 0; i < rows; i++){
    
    for (let _ = 0; _ < space; _++){
        document.write("&nbsp;&nbsp;");
    }
    for (let j = 0; col > j; j++){
        document.write("&nbsp; *");
    }
    document.write("</br>")
    col += 1
    space -= 1
}

// with 2 &nbsp; just do COL += 2
col = 1
rows = 10
space = rows - 1
for (let i = 0; i < rows; i++){
    
    for (let _ = 0; _ < space; _++){
        document.write("&nbsp;&nbsp;");
    }

    for (let j = 0; col > j; j++){
        document.write("*");
    }


    document.write("</br>")
    col += 2
    space -= 1
}


document.write("Using while loop");
document.write("</br>");

let row = 10;
let white_space = row - 1
let cols = 1;
let a = 0;
while (row > 0){
    
    // 1 &nbsp; = half space, hence give 2 &nbsp; = for 1 full space
    while (a < white_space){
        document.write("&nbsp;&nbsp;");
        a++
    }
    
    a = 0
    while ( cols > a){
        document.write("*");
        a++
    }

    document.write("</br>");
    // No need to decrease white_space again i guess as we are already decreasing the rows
    white_space -= 1
    cols += 2
    row -= 1
    a = 0
}
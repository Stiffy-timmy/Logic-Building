
// Left star pyramid
let row = prompt("Enter the number of rows of stars you want to print:")
for (let i = 1; i <= row; i++) {

    for (let j = 1; j < i+1; j++){
        document.write("* ");
    }
    document.write("</br>")
}
document.write("</br>")


// OR THIS (SMALL DIFFERENCE ONLY)
for (let i = 0; i < row; i++) {

    for (let j = 0; j < i+1; j++){
        document.write("*");
    }
    document.write("</br>")
}
document.write("</br>")


//using WHILE loop
let rows = row;
let col = 1
while (rows > 0){
    let b = 0;
    while (col > b){
        document.write("* ")
        b = b + 1
    }
    document.write("</br>")
    col = col + 1
    rows = rows - 1
}
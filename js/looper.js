var letter;
var k;

while (!letter) {
   letter = prompt("Enter a letter please");
}

console.log();


for(var i=0;i<10;i++){
    for(var k=0;k<=i;k++){
        document.write(letter);
    }
 document.write("<br>");
}

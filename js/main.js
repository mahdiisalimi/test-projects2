//alert("hello from 1899");
console.log("hello agiain");
document.getElementById('content').innerHTML="Welcome";
document.write("This is text from doc");

let fName = 'Mahdi';
fName = 'salimi';
console.log(fName);

const version = 0.1;
console.log(version);

const age =20;
console.log(typeof age);

const fristName = 'Mahdi';
console.log(typeof fristName);

const isDone = false;
console.log(typeof isDone);

let x=null;
console.log(typeof x);

let c = undefined;
console.log(typeof c);

x =age * 5;
console.log(x);
x++
console.log(x);

let name = 'Mahdi ';
let lName = 'Salimi'
let fullName = name + lName;
console.log(fullName);

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.substring(0,5));
console.log(fullName.split(" "));

let className = new Array('javascript' , 'html' , 'c++')
let className2 =['javascript' , 'html' , 'c++']

console.log(className);
className[1]='css'
console.log(className[1]);
className[3]='phyton'
console.log(className);
console.log(className.length);

className.push('c#');
className.unshift('bootstrap')
console.log(className);

console.log(className.indexOf('c#'));

const student= {
    name : 'Mahdi ',
    lastName : 'Salimi',
    id : 22569,
    course : ['javascripte', 'html' , 'css'],
    adress : {country : 'iran' , city : 'kashmar'}
}
console.log(student);

console.log(student.name);
console.log(student.adress);

function log(){
    console.log('hello');
}
log();

function math (x, y){
    return x*y
}

//let result = math(100, 4);
//console.log(result);

let X =0;
if(X<10){
console.log("X is less than 10");
}
else if(x >10){
    console.log("x is greater than 10")
}
else{
    console.log("x is 10")
}

let y =5;
if(x>10 && y=== 5){
    console.log(true);
}

const z =10;
const color = z>10 ? 'red' : 'blue';
console.log(color);

const color2 = 'red'
switch (color2){
    case 'red' :
        console.log("it is red")
        break;
        case 'blue' : 
        console.log("it is blue")
        break;
        default:
            console.log('color is not blue or red');
}

const addNum = num1 => num1 +num1
console.log(addNum(10))

//Loop
for(let i=0 ; i<10 ; i++){
    console.log("loop");
}

//while
let j=0;
while(j<10){
    console.log(`while loop ${j}`)
    j+=1
}
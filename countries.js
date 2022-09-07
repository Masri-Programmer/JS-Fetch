
    //let  x=1
    //const z=3
    //x+=1 or x-=1 or x%2 
    // x=false
    // x=true
    // x='mohamad'
    //    // alert('x');
    // y=2
    //    x=150+y
//alert('x');

document.write('guys <button>hi </button>');


// function test(){
//    alert('khalid');
//     alert('text is clicked');
// }
function change(){
    y=document.getElementById('ektob');
x=document.getElementById('idname');
x.innerText= document.getElementById('ektob').value;
}

function doAdd(){
 val1=document.getElementById('a').value;
 val2=document.getElementById('b').value;
 alert(parseInt(val1)+parseInt(val2));

}

function finish(){
    // alert('all html has been read by browser')
    document.getElementById('Training').innerHTML='This is a Rest API';
}

//objects 
// let masrii={uni:'liu',birthdate:2/4/200,name:'masri'}
// alert(masrii.uni)


let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}




function test(){
// Strings
// let textbox=document.getElementById('ektob');
// alert(textbox.value.lenngth);

//toFixed
//slice

//ARRAYS
    // let x=[123 , 231 , 21, 355];
    // alert(x[x.length-1]);
    // x.push(544);
    // alert(x[x.length-1]);
    // // alert(x[2]);
    // x.pop()

    // x=x.sort();
    // console.log(x) //check inspect


//DATES
alert('open log')
    var d = new Date();
    console.log('The Hours = '+ d.getHours());
    console.log('The Minutes = ' + d.getMinutes());
}



var countries=document.getElementById('countries');
var datatoread= fetch('https://restcountries.com/v3.1/all')

                    .then(x=>x.json())
                    .then(data=> {
                        
                        data.forEach(element => {
                            var country=document.createElement('option');
                            country.innerHTML=element.name.common + '-' + element.capital;
                            countries.appendChild(country);

                            var flag=document.createElement('img');
                            flag.src=element.flags.png;
                            flags.appendChild(flag);
                        });

                    })
                
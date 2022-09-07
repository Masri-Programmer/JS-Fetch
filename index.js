// alert('Hello everyone');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json =>{ json.forEach(element => {
//     console.log(element)   
//   }); 
// })

// <-- API endpoint/URL -->


var mohamad=document.getElementById('names');
var datatoread= fetch('data.json')

                    .then(x=>x.json())
                    .then(data=> {
                        
                        data.forEach(element => {
                            var masri=document.createElement('option');
                            masri.innerHTML=element.name + '-' + element.code;
                            mohamad.appendChild(masri);

                        });

                    })

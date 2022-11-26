const btn = document.getElementById("Calculate");

if (btn)
    btn.addEventListener('click' ,function (){
    let  current = document.querySelector('#CurReading').value;
    let  previous = document.querySelector('#PreReading').value;
    let  kwhrate = document.querySelector('#Rate').value;

    if (current == '' || previous == '' || kwhrate ==''){ 
        alert('Invalid/Missing Inputs')
        return;
    }

    let amount = (current - previous)*kwhrate;
    document.querySelector('#result').innerHTML= amount.toFixed(2);
});
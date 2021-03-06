function covid19(country){
        // proxy for local server
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        // covid-19 api link
        let covid19 = "https://covid-rest.herokuapp.com/";
        let api = `${proxy}${covid19}${country}`;
        // DOM selector

        fetch(api,{
            "method":"GET"
        })
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            
            console.log(data);
            if(data.code =="404"){
                var err = document.querySelector('.error-message');
                err.innerHTML = "enter a valid country name";
            }else {
                var err = document.querySelector('.error-message');
                err.innerHTML = ""; 
           
                // select ------------------------------------
            let countryDom = document.querySelector('.country');
            let cases = document.querySelector('#cases');
            let death = document.querySelector('#death');
            let recovered = document.querySelector('#recovered');
            let active = document.querySelector('#active');
            // execute------------------------------------
            countryDom.innerHTML= data[0].country_name;
            cases.innerHTML = data[0].total_cases;
            death.innerHTML = data.data.total_death;
            recovered.innerHTML = data.data.total_recovered;
            active.innerHTML = data.data.active_cases;
            }
            
        })
}
covid19('india');
let input = document.querySelector('input');
let submitbtn = document.querySelector('button');
window.onload = function(){
    submitbtn.addEventListener('click',()=>{
        let preload = document.querySelector('#preloader');
        preload.style.display= "block";
        setTimeout(()=>{
            preload.style.display= "none";
        },1000)
        let countryInp = input.value;
        if(countryInp == ""){
            var err = document.querySelector('.error-message');
                err.innerHTML = "please fill country name";
        }else {
            covid19(countryInp);
        }
        
    })
}
let d = new Date();
document.getElementById("time").innerHTML = d.toUTCString();








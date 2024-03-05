// console.log("my script")
// let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// let apiUrl = 'https://api.emailvalidation.io/v1/info?apikey=ema_live_HhEMiAK3hmHeUW7x8RYWlk1iaZhOgDiUQxv73pOg&email=hitanshdu@gmail.com';
// let url = proxyUrl + apiUrl;

// // Then continue with your fetch request using the modified URL...

const result=
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "sallubhai456456",
    "email": "sallubhai456456@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}


submitBtn.addEventListener("click",async(e)=>{
    e.preventDefault();
    console.log("Clicked!");

    let apikey="ema_live_HhEMiAK3hmHeUW7x8RYWlk1iaZhOgDiUQxv73pOg";
    let email= document.getElementById("username").value;

    let url = `https://app.emailvalidation.io/https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`
    let res = await fetch(url)
    let result= await res.json()
    let str= ``;
    for(key of Object.keys(result)){
        str = str + `<div>${key}: ${result[key]}</div>`;
    }
    
    console.log(str)
    resultValid.innerHTML = str;
})


const apiKey="9851267876fe0e0390b1ff4679418597";
var temp="https://api.openweathermap.org/data/2.5/weather?q=";
var url;
var city;
document.addEventListener("DOMContentLoaded", function() {
document.querySelector(".search img").addEventListener("click",
()=>{
    city=document.querySelector(".search input").value;
    url= temp+city+"&appid="+apiKey+"&units=metric";
    getdata();
})

})
 

async function getdata(){
    console.log(url);
    const data= await fetch(url);
const val=await data.json();
 
    document.querySelector(".city").innerHTML= val.name;
    document.querySelector(".temp").innerHTML= Math.round(val.main.temp)+" °C";
    document.querySelector("#humi").innerHTML= val.main.humidity+"%";
    document.querySelector("#windy").innerHTML= val.wind.speed+"km/h";
    var t=val.main.temp;
    var humi=val.main.humidity;

    if(t>30)
    document.querySelector(".mainImg").src="hot.png";

   else if(t<10)
    document.querySelector(".mainImg").src="cold.png";

    else 
    document.querySelector(".mainImg").src="sun.png";
    if(humi>80){
        document.querySelector(".mainImg").src="rain.png";
    }
}
 

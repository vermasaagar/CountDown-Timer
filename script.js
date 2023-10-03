
const enddate= "11 Nov 2023 12:00 AM";
document.getElementById("end-date").innerText= enddate;
const inputs= document.querySelectorAll("input")


function clock(){
    const end= new Date(enddate);
    const now= new Date();
    
    // console.log(end);
    // console.log(now);

    const difference= (end-now)/1000;
    // console.log(difference);

    if(difference<0){
        return;
    }


    //Days
    // console.log(Math.floor(difference/3600/24));
    inputs[0].value = Math.floor(difference/3600/24);
    // console.log(Math.floor(difference/3600)%24);
    //hours
    inputs[1].value = Math.floor(difference/3600)%24;
    // console.log(Math.floor(difference/3600)%24);
    //minutes
    inputs[2].value = Math.floor(difference/60)%60 ;
    //second
    inputs[3].value = Math.floor(difference) %60;

    
}
//initial call
clock();
setInterval( ()=>{
    clock()
}, 1000)


// 1 day=24 hours
// 1 hrs=60 mins 
// 60 mins=3600sec

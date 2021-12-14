function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("minute");
    var seconds=document.getElementById("second");
    var am_to_pm=document.getElementById("am-pm-id");

    //to set all time in a container
    var setalltime=document.getElementById("dynamic-block")

    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;

    if(h>12){
        let to_pm=h-12;
        hours.innerHTML=to_pm;
        am_to_pm.innerHTML="PM";
    }
    else if(h==12 && m>=0){
        hours.innerHTML=h;
        am_to_pm.innerHTML="PM";
    }
    else{
        hours.innerHTML=h;
        am_to_pm.innerHTML="AM";
    }

    var wt=document.getElementById("wakeup-time").value;
    var lt=document.getElementById("lunch-time").value;
    var nt=document.getElementById("nap-time").value;
    var current_time=new Date().getHours();
    // wt=i-1;
    if(wt==current_time){
        
        document.getElementById('img-container').style.backgroundImage="url(./wakeup.jpeg)";
        document.getElementById('text-container').innerHTML="Lets have some breakfast";
    }

    else if(lt==current_time){
        
        document.getElementById('img-container').style.backgroundImage="url(./lunch.jpeg)";
        document.getElementById('text-container').innerHTML="Lets have some lunc";
    }
    else if(nt==current_time){
        
        document.getElementById('img-container').style.backgroundImage="url(./night.jpeg)";
        document.getElementById('text-container').innerHTML="Lets sleep";
    }
    // setTimeout(function(){
    //     if(h>=5 && h<12) setalltime.innerHTML="GOOD MORNING";
    //     else if(h>=12 && h<17) setalltime.innerHTML="GOOD AFTERNOON";
    //     else setalltime.innerHTML="GOOD EVENING";

    // },5000);
  
}
setInterval(clock,1000);//10ms

function Makediv(){
   
    var block=document.createElement('div');
    block.style.className="cont1-item";
    block.style.id="dynamic-block";

    document.getElementById("dynamic-block").appendChild(block);

    var blockw=document.getElementById("wakeup-time");
    var blockl=document.getElementById("lunch-time");
    var blockn=document.getElementById("nap-time");
    var blockvalue1=blockw.options[blockw.selectedIndex].text;
    var blockvalue2=blockl.options[blockl.selectedIndex].text;
    var blockvalue3=blockn.options[blockn.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="wake up time"+" - "+blockvalue1+"<br/> lunch time"+" - "+blockvalue2+"<br/> nap time"+" - "+blockvalue3;

    

    
}

function settime(){

   var wt=document.getElementById("wakeup-time").value;
    var lt=document.getElementById("lunch-time").value;
    var nt=document.getElementById("nap-time").value;
    var current_time=new Date().getHours();
    // wt=i-1;
    if(wt==current_time){
        
        document.getElementById('img-container').style.backgroundImage="url(./wakeup.jpeg)";
        document.getElementById('text-container').innerHTML="Lets have some breakfast";
    }

    else if(lt==current_time){
        
        document.getElementById('img-container').style.backgroundImage="url(./lunch.jpeg)";
        document.getElementById('text-container').innerHTML="Lets have somelunch";
    }
    else if(nt==current_time){
      
        document.getElementById('img-container').style.backgroundImage="url(./night.jpeg)";
        document.getElementById('text-container').innerHTML="sleep well";
    }
    Makediv();
}
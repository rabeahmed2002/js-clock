function displayTime() {
    var getTime=new Date();
    var hrs=getTime.getHours();
    var mins=getTime.getMinutes();
    var secs=getTime.getSeconds();
    var session=document.getElementById('session')


    if(hrs<12) {
        session.innerHTML='AM'
    } else {
        session.innerHTML='PM'
    }

    document.getElementById('hours').innerHTML=hrs
    document.getElementById('minutes').innerHTML=mins
    document.getElementById('seconds').innerHTML=secs
}

setInterval(displayTime, 10)
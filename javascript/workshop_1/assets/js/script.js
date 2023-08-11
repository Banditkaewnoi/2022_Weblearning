var statedate = "1 Jan 2023"

const formattdate=(time)=>{
    return(time<10)? "0"+time:""+time
}
function calDate(inpDate){
    let targetDate = new Date(inpDate)
    let currentDate = new Date()
    let totalSeconds = (targetDate-currentDate)/1000

    let days = Math.floor(totalSeconds/3600/24)
    let hours = Math.floor(totalSeconds/3600%24)
    let minutes =Math.floor(totalSeconds/60)%60
    let seconds = Math.floor(totalSeconds)%60
    let dateObj = {
        days : formattdate(days),
        hours: formattdate(hours),
        minutes: formattdate(minutes),
        seconds: formattdate(seconds),
    }
    console.log(dateObj)

        document.getElementById('text-day').innerHTML = dateObj.days
        document.getElementById('text-hour').innerHTML = dateObj.hours
        document.getElementById('text-minute').innerHTML = dateObj.minutes
        document.getElementById('text-second').innerHTML = dateObj.seconds
}
var changeState=(day)=>{
    let ctEl = document.getElementById('content')
    ctEl.removeAttribute('class')
    if(day=='newyear'){
        stateDate = "1 Jan 2023"
        ctEl.classList.add('hny')
    }else if(day=="birthday"){
        statedate = "15 Jan 2023"
        ctEl.classList.add('hbd')
    }else if(day=="sonkarn"){
        statedate = "13 Apr 2023"
        ctEl.classList.add('sk')
    }
}
calDate()
setInterval(()=>calDate(statedate),500)
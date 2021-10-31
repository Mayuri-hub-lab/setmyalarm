const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listner to the submit button
alarmSubmit.addEventListener('click',setAlarm);

// var audio = new Audio('maay Bhavani.mp3');
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3 ');


// function to play the alarm ring tone
function ringBell()
{
    audio.play();
}
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate= new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}....`);

    now = new Date();
    let timeToAlarm = alarmDate - now ;
    console.log(timeToAlarm);

    if(timeToAlarm>=0)
    {
        if(timeToAlarm>=0)
        {
            setTimeout(()=> {
                console.log("Ringing now");
                ringBell();
            } , timeToAlarm);
        }

        else if(timeToAlarm<0){
            alert("Time is not valid, try again.");
            return true;
        }
    }


    
}
function needTime(){
		var months; //Месяц 
	    var days; //День
	    var years; //Год
	    var hours;//Часы
	    var minutes;//Минуты
	    var timeOfEnd;//Сформированное время окончания отсчёта

	    window.months = document.getElementById("month").value-1;
	    window.days = document.getElementById("day").value;
	    window.years = document.getElementById("year").value;
	    window.hours = document.getElementById("hour").value;
	    window.minutes = document.getElementById("minute").value;

	    var checkError = validation(window.months, window.days, window.years, window.hours, window.minutes);

	    if(checkError != -1){
			timeOfEnd = new Date(window.years, window.months, window.days, window.hours, window.minutes);  
			var different = (timeOfEnd/1000.0)-timeNow();
		    var blockday = document.getElementById('daysLeft'); 
		    var blocktime = document.getElementById('timeLeft');
		    timer(different, blockday, blocktime);          
	        }

	    return 0;

}

function timeNow(){//Получение текущего времени
	var today = new Date();
	return today/1000.0;
}

function timer(sec, blockday, blocktime) {
    var time    = sec;
    
    var day = parseInt(time / 86400);
    if ( day < 1 ) day = 0;
    time = parseInt(time - day * 86400);
  	if ( day < 10 ) day = '0'+day;

    var hour    = parseInt(time / 3600);
    if ( hour < 1 ) hour = 0;
    time = parseInt(time - hour * 3600);
    if ( hour < 10 ) hour = '0'+hour;
 
    var minutes = parseInt(time / 60);
    if ( minutes < 1 ) minutes = 0;
    time = parseInt(time - minutes * 60);
    if ( minutes < 10 ) minutes = '0'+minutes;
 
    var seconds = time;
    if ( seconds < 10 ) seconds = '0'+seconds;
 
 	blockday.innerHTML = "Осталось:<br>"+"Дней: "+day;
    blocktime.innerHTML = "Часов: "+hour+"<br>Минут: "+minutes+"<br>Секунд: "+seconds;

    sec--;
       
    if ( sec > 0 ) {
        setTimeout(function(){ timer(sec, blockday, blocktime); }, 1000);
    }
    else {
        alert('Время вышло!');
    }
}

function validation(months, days, years, hours, minutes){//Проверка корректности 
	if(!(/([1-9]{1}|0[1-9]|1[012])/.test(months))){
            alert("Введите месяц.");
            return -1;
    }
    if(!(/(0[1-9]|[1-9]|1[0-9]|2[0-9]|3[0-1])/.test(days))){
    		alert("Введите день.");
    		return -1;
    }
    if(!(/20\d\d/.test(years))){
    		alert("Введите год.");
    		return -1;
    }
    if(!(/([0,1][0-9])|(2[0-3])|[0-9]/.test(hours))){
    		alert("Введите час.");
    		return -1;
    }
    if(!(/[0-5][0-9]/.test(minutes))){
    		alert("Введите минуты.");
    		return -1;
    }
    
}
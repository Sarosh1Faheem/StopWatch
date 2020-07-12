var status = 0; // 0:stop 1:running
    var time = 0;
    var startBtn = document.getElementById("startBtn");
    var timerLabel = document.getElementById('timerLabel');

	function start(){
        status = 1;
        startBtn.disabled = true;
        timer();
    }

    function stop(){
        status = 0;
        startBtn.disabled = false;
    }

    function reset(){
        status = 0;
        time = 0;
        timerLabel.innerHTML = '00:00:00';
        startBtn.disabled = false;
    }

    function timer(){
        if (status == 1) {
            setTimeout(function() {
                time++;

                var min = Math.floor(time/100/60);
                var sec = Math.floor(time/100);
                var mSec = time % 100;

                if (min < 10) min = "0" + min;

                if (sec >= 60) sec = sec % 60;

                if (sec < 10) sec = "0" + sec;

                if (mSec < 10) mSec = "0" + mSec;

                timerLabel.innerHTML = min + ":" + sec + ":" + mSec;

                timer();
            }, 10);
        }
    }

    document.onkeydown = function(event) { 
        if (event) {
            if (event.keyCode == 32 || event.which == 32) {
                if(status == 1) {
                    stop();
                } else if (status == 0) {
                    start();
                }
            }
        }
    };
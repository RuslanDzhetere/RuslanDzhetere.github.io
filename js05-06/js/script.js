var running = 0;
var base = 60;
var clockTimer, dateObj, dh, dm, ds, ms;
var readout='';
var h=1, m=1, tm=1, s=0, ts=0, ms=0, show=true;
var startButton, clearButton;

function startPause() {
    if(running == 0) {
    dateObj = new Date();
    startTime();
    running = 1;
    document.getElementById('startPause').innerHTML = 'Pause';
    btnStart.className = 'btn btn-primary leftButton';
  } else {
    if(show == true) {
    show = false;
    document.getElementById('startPause').innerHTML = 'Cont..';
    btnStart.className = 'btn btn-success leftButton';
  } else {
    show = true;
    document.getElementById('startPause').innerHTML = 'Pause';
    btnStart.className = 'btn btn-primary leftButton';
  }
}
}

function reset() {
  running = 0;
  clearTimeout(clockTimer);
  s = 0;
  ms = 0;
  show = true;
  document.getElementById('startPause').innerHTML = 'Start';
  document.getElementById('outputTime').innerHTML = '00:00:00';
  document.getElementById('outputMs').innerHTML = '0';
  btnStart.className = 'btn btn-success leftButton';
}

function startTime() {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000);
  if (t>999) {
  s++;
  }
  if (s>=(m*base)) {
  ts=0;
  m++;
  } else {
  ts = parseInt((ms / 1000) + s);
  if(ts >= base) {
  ts = ts-((m-1) * base);
  }
  }
  if ( m >(h * base)) {
    tm=1;
    h++;
  } else {
      tm=parseInt((ms / 10000) + m);
      if(tm >= base) {
        tm = tm-((h - 1) * base);
    }
  }
  ms = Math.round(t / 1);
  if ( ms > 999) {
    ms = 0;
  }
  if (ms == 0) {
    ms='000';
  }
  if (ms > 0 && ms <= 9) {
    ms = '00' + ms;
  }
  if (ms >= 10 && ms <= 99) {
    ms = '0' + ms;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
      ds = '00';
    }
    dm = tm-1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
      dm = '00';
    }
    dh = h-1;
    if (dh > 0) {
      if (dh<10) {
        dh = '0' + dh;
      }
    } else {
        dh = '00';
      }
    readout = dh + ':' + dm + ':' + ds;
    if(show == true){
      document.getElementById('outputTime').innerHTML = readout;
      document.getElementById('outputMs').innerHTML = ms;
    }
    clockTimer = setTimeout('startTime()',1);
}
startButton = document.getElementById('startPause');
startButton.addEventListener('click', startPause);

clearButton = document.getElementById('resetButton');
clearButton.addEventListener('click', reset);
var btnStart = document.querySelector('.btn-success');

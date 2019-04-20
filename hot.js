setInterval(function(){localStorage.clear()},1);
setTimeout(function(){
window.location.href=window.location.href
},1000*60*2.95);
setInterval(function(){(!document.fullscreen)&&document.getElementsByClassName("vjs-fullscreen-control")[0].click()
},1000*5);
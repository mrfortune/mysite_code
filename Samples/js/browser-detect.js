$( document ).ready(function() {

if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
 var ffversion=new Number(RegExp.$1) // capture x.x portion and store as a number
 if (ffversion>=6)
  window.alert("You're using FF 5.x or above")
 else if (ffversion>=4)
  document.write("You're using FF 4.x or above")
 else if (ffversion>=3)
  document.write("You're using FF 3.x or above")
 else if (ffversion>=2)
  document.write("You're using FF 2.x")
 else if (ffversion>=1)
  document.write("You're using FF 1.x")
}
else
 document.write("n/a")
	
});

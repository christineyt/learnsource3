function doOPEN(){	
	$("#NAV").removeClass("goOUT").addClass("goIN");
}
	
function doCLOSE(){
	$("#NAV").removeClass("goIN").addClass("goOUT");
}

$("#BTN").on("click", doOPEN );
	
$("#XX").on("click", doCLOSE );


//==當視窗大於 500 變成桌面版，就同時移除 goIN goOUT 動畫====
	
function clearAnimation(){
	
	if( $(window).innerWidth()>500 ){
		
		$("#NAV").removeClass("goIN goOUT");
	}
}
	
$(window).on("resize",clearAnimation);






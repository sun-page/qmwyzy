var tu=["1.jpg","2.jpg","3.jpg"];
    var weizhi=0;
    function huan(){
    	if(weizhi==2){
    		weizhi=0;
    	}else{
    		weizhi++;
    	}
    	document.getElementById("lbt").src=tu[weizhi];
    }
    function ok(){
    	setInterval("huan()",1000);
    }
    ok()
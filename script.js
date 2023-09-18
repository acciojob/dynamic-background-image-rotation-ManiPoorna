window.addEventListener("resize",changeBackgroundImage);
changeBackgroundImage();
function changeBackgroundImage(){
    console.log("resize")
	const body = document.body;
	if(window.innerWidth > window.innerHeight){
		body.classList.add("landscape");
		body.classList.remove("portrait");
	}
    else{
        body.classList.remove("landscape");
		body.classList.add("portrait");
	}
}
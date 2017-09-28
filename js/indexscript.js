var imageIndex = 0;
var imageArray = ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg","image-7.jpg","image-8.jpg","image-9.jpg"];


function slider()
{
	var x = document.getElementById("image-slider-id");
	imageIndex++;
	if(imageIndex > imageArray.length)
	{
		imageIndex = 1;
	}
	x.style.backgroundImage = "url('images/"+imageArray[imageIndex-1]+"')";
	setTimeout(slider,2000);
}

window.onload = slider;
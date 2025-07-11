const colors = ['#FF0000', '#008000', '#0000FF'];
let currentColorIndex = 0;


function decrease(balloon)
{
	const currentWidth = parseInt(window.getComputedStyle(balloon).width);
	const currentHeight = parseInt(window.getComputedStyle(balloon).height);
	balloon.style.width = (currentWidth - 5) + 'px';
	balloon.style.height = (currentHeight - 5) + 'px';
	if (balloon.style.width == '195px')
	{
		balloon.style.width = '200px';
		balloon.style.height = '200px';
		return ;
	}
	currentColorIndex = (currentColorIndex - 1) % colors.length;
	if (currentColorIndex < 0)
		currentColorIndex = 2;
	balloon.style.backgroundColor = colors[currentColorIndex];
}

function handleClick(balloon)
{
	currentColorIndex = (currentColorIndex + 1) % colors.length;
	balloon.style.backgroundColor = colors[currentColorIndex];

	const currentWidth = parseInt(window.getComputedStyle(balloon).width);
	const currentHeight = parseInt(window.getComputedStyle(balloon).height);
	balloon.style.width = (currentWidth + 10) + 'px';
	balloon.style.height = (currentHeight + 10) + 'px';
	if (balloon.style.width == '430px')
	{
		balloon.style.width = '200px';
		balloon.style.height = '200px';
	}
}

/* const balloon = document.getElementById("balloon");
balloon.addEventListener("click", handleClick); */

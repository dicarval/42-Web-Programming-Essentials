document.getElementById('Click').addEventListener('click', function()
{
	let randomColor = '#';
	const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	for (let i = 0; i < 6; i++)
	{
		randomColor +=  hexChars[Math.floor(Math.random() * hexChars.length)];
	}
	document.body.style.backgroundColor = randomColor;
});

const jokes= document.querySelector('.joke');
const getJokes = document.querySelector('#button');

getJokes.addEventListener('click',()=>
{
	let api='https://v2.jokeapi.dev/joke/Programming,Miscellaneous?type=single';
	fetch(api)
.then(response => {
	return response.json();
})

.then (data=>
	{
		jokes.textContent=data.joke;
	})
})



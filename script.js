const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//USING .then

// getJokes = () => {
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   };
//   fetch('https://icanhazdadjoke.com/',config)
//   .then(res => res.json())
//   .then((data) => {
//     jokeEl.innerHTML = data.joke;
//   })
// }
// getJokes();
// jokeBtn.addEventListener('click', getJokes);



// USING async/await
getJokes = async() => {
  const config = {
    headers:{
      'Accept':'application/json'
    }
  };
  const res = await fetch('https://icanhazdadjoke.com/',config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke
}
getJokes()
jokeBtn.addEventListener('click', getJokes);

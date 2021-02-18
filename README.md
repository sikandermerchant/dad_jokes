# dad_jokes

- Fetching dad jokes from API documentation - https://icanhazdadjoke.com/api
- Endpoints
  Fetch a random dad joke
  GET https://icanhazdadjoke.com/ fetch a random dad joke.

Fetching a random joke as JSON:

$ curl -H "Accept: application/json" https://icanhazdadjoke.com/
{
"id": "R7UfaahVfFd",
"joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
"status": 200
}
Fetching a random joke as text:

$ curl -H "Accept: text/plain" https://icanhazdadjoke.com/
My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.

- fetching in ES6 is done using both .then and async/await for variety.

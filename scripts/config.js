// MovieDB API Example
const response = await fetch('https://www.themoviedb.org/documentation/api', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

const data = await response.json();
console.log(data);
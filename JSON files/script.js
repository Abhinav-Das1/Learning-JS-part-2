/* JSON = (JavaScript Object Notation) data-interchange format
          Used for exchanging data between a server and a web application
          JSON files {key:value} OR [value1, value2, value3]

          JSON.stringify() = converts a JS object to a JSON string.
          JSON.parse() = converts a JSON string to a JS object
*/

// const jsonNames = `["Naruto", "Sasuke", "Kakashi"]`;
// const jsonPerson = `{"name": "Naruto","age": 37,"isEmployed": true,"hobbies": ["Eating Ramen"]}`;
// const jsonPeople = `[{"name": "Naruto","age": 37,"isEmployed": true},
//                     {"name": "Sasuke""age": 37,"isEmployed": true},
//                     {"name": "Kakashi","age": 47,"isEmployed": true}]`;

// const parsedData = JSON.parse(jsonNames);

// console.log(parsedData);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));
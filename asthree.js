/*Using promises/async await/fetch get the random todos from the json placeholder api. And log all the
completed todos to the console.
API Endpoint : https://jsonplaceholder.typicode.com/todos
*/

fetch(‘https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
  .then(json => console.log(json))

fetch(‘https://jsonplaceholder.typicode.com/todos/5')
.then(response => response.json())
  .then(json => console.log(json))




const kee = async userName => {
 const url = "https://jsonplaceholder.typicode.com/todos/6";
 try {
  const response = await axios.get(url);
  return response.data
 } catch (err) {
  return false;
 }
};

kee("user")
 .then(data => console.log(data))
 .catch(reason => console.log(reason.message))








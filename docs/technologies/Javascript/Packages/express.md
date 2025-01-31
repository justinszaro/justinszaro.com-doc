Learn Express Routes:

* Express \- A powerful and flexible javascript framework for creating web servers and APIs.  
* To create a server, you must invoke the express object. 

const express \= require('express');  
const app \= express();

* You must specify which port the express object is listening on.

| const PORT \= 4001;app.listen(PORT, () \=\> {  console.log(\`Server is listening on port ${PORT}\`);}); |
| :---- |

* You determine what the Express does by establishing routes.   
* Routes define the control flow for requests based on the request’s *path* and HTTP verb.  
* You use app.get() to set up a route and what the route should return.

| const moods \= \[{ mood: 'excited about express\!'}, { mood: 'route-tastic\!' }\];app.get('/moods', (req, res, next) \=\> {  // Here we would send back the moods array in response}); |
| :---- |

* If no routes are found, it will return a 404 error.   
* app.use() will ensure the express is used once the browser is loaded.

app.use(express.static('public'));

* Requests and responses are 1:1. One request returns one response  
* res.send(input) will return any input to the client.   
* res.json() will return any json formatted or (javascript object) back to the client.  
* When an API request is called, it will search top to bottom for the correct route.  
* Routes can be used dynamically. Route parameters start with :   
  * /monsters/:id will take any route that includes monsters and a parameter.  
  * Parameters are stored in req.params

| app.get('/expressions/:id', (req, res, next) \=\> {console.log(req.params.id);res.send(getElementById(req.params.id, expressions));}); |
| :---- |

* Status codes can be attached to responses before being returned to the client.  
* Doing res.status() before res.send will change the response code sent back to the client. 

| res.status(404).send('Monster not found'); |
| :---- |

ON 7/15 ON LEARN EXPRESS CODEcademy
# Practice Server
## A simple node+express app to practice making AJAX queries from the browser against a RESTful API.

The simple server exposes several APIs with mock data so you can practice writing AJAX queries. There are also APIs that
simulate error codes and other HTTP status codes, as well as an API that randomly succeeds or fails so you can practice
your error handling.

### Usage
- Install Node and NPM
- Clone this repository
- Run the command: npm install

There are two ways of running this application from the project root:
1) "npm start"
2) "npm start-with-cors" (Note: this will start the server with Cross Origin Resource Sharing turned on for all requests.)

The application should be listening on port 3000.

### APIs

#### /api/states
This returns a list of 50 states in the United States

#### /api/people
This returns a list of people objects with various attributes

#### /api/error
This returns a 404 error code

#### /api/http/(###)
This returns with a status code provided by the url parameter.
For example, /api/http/301 would return with a 301 code.
The default code is 200.


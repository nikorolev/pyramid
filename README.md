# pyramid
Repository for JavaScript program that verifies whether a word is a pyramid.

Repository contains index.js file. It is NodeJS web server that.
Steps to run it:
1. Install NodeJS.
2. Create a directory <dir name> and copy index.js file there.
3. Create node-modules directory in <dir name>.
4. Install two packages: express and body-parser from <dir name>. They be located in node-modules directory. 
5. Start the server: node index.js. The web server has port 8090.
6. Send POST HTTP request with URL "localhost:8090/pyramid/" that has body in JSON format: {"input": "string to be verified as a pyramid"}
7. The response will have JSON format: {"result": true/false}

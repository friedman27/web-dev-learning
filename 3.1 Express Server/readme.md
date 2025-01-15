# Instructions for setting up an Express server

## Set up directory with Express

1. Initialize npm
   `npm init`
2. Install express
   `npm i express`
3. Change the type in the package.json file to module
   `"type": "module"`
4. Create an index.js file and import express
   `import express from "express"`

## Set up server

5. Set up localhost at port 3000 in js file

   ```
   const app = express();
   const port = 3000;

   app.listen(port, () => {
   console.log(`Server running on port ${port}.`);
   });
   ```

   _Access in browser at localhost:3000_

6. Run server on local machine using bash cmd line (in project directory)
   `nodemon index.js`

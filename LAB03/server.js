const connect = require('connect');
const url = require('url');

function calculate(req, res) {
    const urlParts = url.parse(req.url, true);

    // get the method, x, and y from the query string
    // valid methods: ['add', 'subtract', 'multiply', 'divide']
    const method = urlParts.query.method;
    const x = parseInt(urlParts.query.x);
    const y = parseInt(urlParts.query.y);
    
    // validate the input
    // make sure the method, x, and y are valid
    if (!method || !x || !y || isNaN(x) || isNaN(y)) {
      res.writeHead(400);
      res.end('Invalid request');
      return;
    }
  
    let result;
    let tempMethod;

    switch (method) {
      case 'add':
        result = x + y;
        tempMethod = '+';
        break;
      case 'subtract':
        result = x - y;
        tempMethod = '-';
        break;
      case 'multiply':
        result = x * y;
        tempMethod = '*';
        break;
      case 'divide':
        // TODO: handle divide by zero
        // implemented valid check for y while parsing

        // if (y === 0) {
        //   res.writeHead(400);
        //   res.end('Cannot divide by zero');
        //   return;
        // }
        result = x / y;
        tempMethod = '/';
        break;
      default:
        res.writeHead(400);
        res.end('Invalid method');
        return;
    }
  
    res.writeHead(200);
    res.end(`${x} ${tempMethod} ${y} = ${result}`);
  }

  const app = connect();

//   though this is lab3, i am using the same "lab2" path due to instructions
  app.use('/lab2', calculate);
  
app.listen(3000, () => {
    console.log('Server started on port 3000');
    console.log("Click on the link to test the calculator: http://localhost:3000/lab2?method=add&x=5&y=3");
    console.log("Click on the link to test the calculator: http://localhost:3000/lab2?method=subtract&x=5&y=3");
    console.log("Click on the link to test the calculator: http://localhost:3000/lab2?method=multiply&x=5&y=3");
    console.log("Click on the link to test the calculator: http://localhost:3000/lab2?method=divide&x=5&y=3");
  });
const moduleA = require('./module-a');

const index = {
  doThing: () => moduleA.hello()
}

console.log(index.doThing());

module.exports = index;

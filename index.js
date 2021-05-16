import { hello } from './module-a';

const index = {
  doThing: () => hello()
}

console.log(index.doThing());

export default index;

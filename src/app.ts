import { Server } from "./presentation/server";

/*self-invoked function*/
(() => {
  main();
})();

function main () {
  Server.start();
}


const Repository = require("./Models/Repository");

const repository = new Repository();

repository.createActivity("Salir a pasear", "Es muy bueno para la salud");
repository.createActivity("Jugar Halo", "Con los pibes")

console.log(repository.getAllActivities());




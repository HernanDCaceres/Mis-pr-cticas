const Activity = require("./Activity");

class Repository{
    constructor() {
        this.activties = [];
        this.id = 0;
    }

    createActivity(title, description, imgUrl){
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.id++;
        this.activties.push(newActivity);
    }

    getAllActivities(){
        return this.activties;
    }
}

module.exports = Repository;
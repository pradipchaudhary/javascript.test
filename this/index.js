const person = {
    name: "Pradip",
    age: 29,

    activity: function (something) {
        console.log(
            `This person name is ${person.name} and age is ${this.age} and ${something}`
        );
    },
};

person.activity("do something here...");

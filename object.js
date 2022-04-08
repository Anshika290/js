var person = new Object({
    name : "Anshika",
    age : 19,
    country : "India",
    city : "Bhopal",
    gender : "F",
    skills : ["javascript","mysql"],
    profession : function(){
        console.log("Engineer");
    }
});
//console.log(person.name);
console.log(`my name is ${person.name} and profession is `);
person.profession();

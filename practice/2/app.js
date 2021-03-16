var person = {
    firstName: "John",
    lastName: 'Doe',
    id: 5566,
    fullName: function () {
        return this.lastName + " " + this.lastName;
    }
};

//nested for loops works tho
console.log(person);
document.write("\n");
for (i = 0; i < 10; i++) {

    console.log(i);

    for (j = 0; j < i; j++) {
        console.log(j);

    }
    console.log("\n");
}

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

    document.write(i);

    for (j = 0; j < i; j++) {
        document.write(j);

    }
    document.write("\n");
}

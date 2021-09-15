var Employee = [{ name: "Abhishek Sharma", age: 22, salary: 20000, DOB: "23/08/1999" },
{ name: "Deepak Sharma", age: 25, salary: 10000, DOB: "09/08/1996" },
{ name: "vijay singh", age: 24, salary: 500, DOB: "12/06/1997" },
{ name: "Shyam verma", age: 28, salary: 900, DOB: "05/11/1993" },
{ name: "Chetan Sharma", age: 21, salary: 700, DOB: "12/08/2001" },
{ name: "Ashish ", age: 22, salary: 10000, DOB: "24/09/1999" },
{ name: "Atul Bhardwaj", age: 28, salary: 10000, DOB: "24/09/1993" },
{ name: "Aman Chauhan", age: 30, salary: 10000, DOB: "24/09/1991" },
];


//filter all employees with salary greater than 5000
console.log("filter all employees with salary greater than 5000")
Employee.forEach((element) => {


    if (element.salary > 5000) {
        console.log(element.name , '=' , element.salary)
    }

});


console.log(" ")
console.log("group employee on the basis of their age")


//group employee on the basis of their age
Employee.forEach((element) => {

    if (element.age >= 20 && element.age < 25) {
        console.log("group A ", element.name)
    }
    else if (element.age >= 25 && element.age <= 30) {
        console.log("group B ", element.name)
    }
    else {
        console.log("group C ", element.name)
    }
});


console.log(" ")
console.log(" fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.")


//==>> fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
Employee.forEach((element) => {
    if (element.salary < 1000 && element.age > 20) {
        console.log(element.name, "old salary = ", element.salary)
        element.salary = element.salary * 5;
        console.log("incremented salary : ", element.salary)
    }
});
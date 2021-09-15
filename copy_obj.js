let myobj={
    Name:"Pranav Mishra",
    Id: 5202,
    Role: "Software Engineer Trainee",
    Location: "Noida",
}
let mynewobj = Object.assign({}, myobj);
console.log("new_copy_obj",mynewobj);
console.log(myobj);
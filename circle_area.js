function circle (radius){
    let area;
    area=Math.PI * radius *radius;
    return area;
}
let c = prompt("enter the radius of circle: ");
alert(circle(c).toFixed(2));


function setup(){
    let groceries = ["apples", "bread", "milk"];
    groceries.push("orange");
    groceries.push("butter");
    groceries.shift();
    groceries.splice(1, 1, "Kaya");
    console.log(groceries)
}
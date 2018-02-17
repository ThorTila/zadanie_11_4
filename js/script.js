function Phone(brand, model, price, color) {
	this.brand = brand;
    this.model = model;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", model name is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}
var XStyle = new Phone("Motorola", "Moto X Style", 1200, "Bamboo");
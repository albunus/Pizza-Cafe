function OrderList(type, crust, toppings, numberOfPizza, delivery, size) {
    this.type = type;
    this.crust = crust;
    this.toppings = toppings;
    this.numberOfPizza = numberOfPizza;
    this.delivery = delivery;
    this.size = size;
    this.sizePrice = 0;
    this.crustPrice = 0;
    this.toppingPrice = 0;
    this.deliveryPrice = 0;
    this.price = 0;
};

//adding new property to object with a method to calculate prices
OrderList.prototype.finalPrice = function () {
    if (this.size === "small") {
        this.sizePrice = 500;
    } else if (this.size === "medium") {
        this.sizePrice = 800;
    } else if (this.size === "large") {
        this.sizePrice = 1000;
    };
    if (this.crust === "flat bread") {
        this.crustPrice = 150;
    } else if (this.crust === "thin") {
        this.crustPrice = 80;
    } else if (this.crust === "stuffed") {
        this.crustPrice = 100;
    } else if (this.crust === "cheese") {
        this.crustPrice = 200;
    };
    if (this.toppings === "sausages") {
        this.toppingsPrice = 150;
    } else if (this.toppings === "onions") {
        this.toppingsPrice = 80;
    } else if (this.toppings === "mushroom") {
        this.toppingsPrice = 100;
    } else if (this.toppings === "cheese") {
        this.toppingsPrice = 200;
    };
    this.price = (this.sizePrice + this.crustPrice + this.toppingsPrice) * this.numberOfPizza;

};
OrderList.prototype.makeDelivery = function () {
    if (this.delivery === "deliver") {
        this.price += 150;
    } else if (this.delivery === "pick") {
        this.price += 0;
    };
};


function resetFieldValues() {
    $("#size").val("");
    $("#type").val("");
    $("#toppings").val("");
    $("#crust").val("");
    $("#quantity").val("");
    $("#name").val("");
    $("#address").val("");
};

$(document).ready(function () {
    $(".order").submit(function (event) {
        event.preventDefault();
        var size = $("#size").val();
        var type = $("#type").val();
        var crust = $("#crust").val();
        var toppings = $("#toppings").val();
        var numberOfPizza = parseInt($("#quantity").val());
        var delivery = $("#delivery").val();
        var newOrderList = new OrderList(type, crust, toppings, numberOfPizza, delivery, size);
        newOrderList.finalPrice();

        newOrderList.makeDelivery();
        $("#tush").text("You have ordered " + numberOfPizza + " " + size + " " + type + " pizza(s) with a  " + crust + " crust and  " + toppings + " topping");
        $("#output").text("YOUR BILL IS " + newOrderList.price + " /= ." + " For Delivery fill the delivery form");
        // resetFieldValues();

    });

    $("#checkOut").click(function (event) {
        event.preventDefault();
        var inputtedName = $("#name").val();
        var inputtedaddress = $("#address").val();
        window.alert("Hey" + " " + inputtedName + " " + " Your order will be ready in 20mins and will be delivered to" + " " + inputtedaddress + " " + "in the next 30 mins.")
        window.alert("Your total order will be" + newOrderList.price + delivery);

        resetFieldValues();
    });

    $('.gallery').click(function () {
        $('#gallery').show();
        $("#aboutUs").hide();
        $('#order').hide();
    });
    $('.aboutUs').click(function () {
        $('#aboutUs').show();
        $("#gallery").hide();
        $('#order').hide();
    });
    $('.btn1').click(function () {
        $('#order').show();
        $("#gallery").hide();
        $("#aboutUs").hide();
    });
});

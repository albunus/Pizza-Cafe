

    // //////////////////////////////////////////////order form activities/////////////////////////////

    function Order(name,email,number,type,crust,toppings,quantity,size,address) {
        this.name = name;
        this.email = email;
        this.number =number;
        this.type = type;
        this.crust = crust;
        this.topping = toppings;
        this.quantity = quantity;
        this.size = size;
        this.address = address;
      };
      Order.prototype.totalPrice = function () {
        if (this.size === "small") {
            this.sizePrice = 500;
        } else if (this.size === "medium") {
            this.sizePrice = 800;
        }else if (this.size === "large") {
            this.sizePrice = 1000;
        };
        if (this.crust === "flat bread") {
            this.crustPrice = 100;
        } else if (this.crust === "stuffed") {
            this.crustPrice = 150;
        }else if (this.crust === "Cheese") {
            this.crustPrice = 200;
        }else if (this.crust === "thin") {
          this.crustPrice = 80;
        };
        if (this.toppings === "Sausage.") {
            this.toppingPrice = 100;
        }else if (this.toppings === "onions") {
            this.toppingPrice = 80;
        }else if (this.toppings === "Meat.") {
            this.toppingPrice = 200;
        }else if (this.toppings === "mushrooms") {
            this.toppingPrice = 150;
        };
        this.Price =(this.sizePrice +this.crustPrice + this.toppingPrice) * this.quantity;
      };
      
      ///////////////////////////determine prices when delivered

      $(document).ready(function () {
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
    
    $("#form").submit(function (event) {
    event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var type = $("#one").find("option:selected").val();
        var size = $("#two").find("option:selected").val();
        var toppings = $("#three").find("option:selected").val();
        var crust = $("#four").find("option:selected").val();
        var quantity = $("#five").val();
        var number = $("#number").val();
        var address = $("#address").val();
        var newOrder = new Order(name,email,number,type,crust,toppings,quantity,size,address)
        newOrder.totalPrice();
        alert("Cost is"+" "+totalPrice);
        alert(quantity);
        alert(number);
    });
    // $("#output").click(function(){
    //     return totalPrice;
    // })

});


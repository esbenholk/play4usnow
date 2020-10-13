function initPayPalButton() {
    var description = document.querySelector('#smart-button-container #description');
    var amount = document.querySelector('#smart-button-container #amount');
    var descriptionError = document.querySelector('#smart-button-container #descriptionError');
    var priceError = document.querySelector('#smart-button-container #priceLabelError');

    var elArr = [description, amount];


    var purchase_units = [];
    purchase_units[0] = {};
    purchase_units[0].amount = {};

    function validate(event) {

      return event.value.length > 0;
    }

    paypal.Buttons({
      style: {
        color: 'black',
        shape: 'pill',
        size: 'small',
        label: 'pay',
        height: 25,
        layout: 'horizontal',
        tagline: 'false'
        
      },

      onInit: function (data, actions) {
        actions.disable();

        elArr.forEach(function (item) {
          item.addEventListener('keyup', function (event) {
            var result = elArr.every(validate);
            if (result) {
              actions.enable();
            } else {
              actions.disable();
            }
          });
        });
      },

      onClick: function () {
        if (description.value.length < 1) {
          descriptionError.style.display = "block";
        } else {
          descriptionError.style.display = "none";
        }

        if (amount.value.length < 1) {
          priceError.style.display = "block";
        } else {
          priceError.style.display = "none";
        }

    
        purchase_units[0].description = description.value;
        purchase_units[0].amount.value = amount.value;

       



      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: purchase_units,
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          alert('Transaction completed!');

          updateUser(details, description.value, amount.value)
        });
      },

      onError: function (err) {
        console.log(err);
      }



    }).render('#paypal-button-container');
  }


  initPayPalButton();

  function updateUser(details, description, amount){
    $.post("/payment",{
      amount: amount, 
      performer: description,  
      paypal_username: details.payer.name.given_name + " " +details.payer.name.surname,
      _csrf : $('meta[name="_csrf"]').attr('content')
    }, function(data){
      console.log(data);
   
    });
  }

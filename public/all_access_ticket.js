
let all_access_ticketButtonTogglers = $(".all_access_ticketButtonToggler");
for (let index = 0; index < all_access_ticketButtonTogglers.length; index++) {
  const element = all_access_ticketButtonTogglers[index];
  element.addEventListener("click", function(ev){
    console.log("click open all access", ev.target.parentNode);
    ev.target.parentNode.children[2].style.display = "block";
  
  })
}
let all_access_ticketButtonUntogglers = $(".all_access_ticketButtonUntoggler");
for (let index = 0; index < all_access_ticketButtonUntogglers.length; index++) {
  const element = all_access_ticketButtonUntogglers[index];
  element.addEventListener("click", function(ev){
    let tipcontainer = $(".all_access_ticketButton");
    for (let index = 0; index < tipcontainer.length; index++) {
      const element = tipcontainer[index];
      element.style.display = "none";
    
      
    }
  
  })
}


$(".all_access_ticketButton").each(function(index){
   createTipButton(index);
  });


async function createTipButton(index){
    let ticketButton = await $(".all_access_ticketButton")[index]
    initPayPalButton(ticketButton);
}

function initPayPalButton(element) {
  var description = element.querySelector('#all_access_ticket-button-container #description');
//   var amount = 8;


  var elArr = [description];


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
    //   actions.disable();

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
  
      purchase_units[0].description = description.value;
      purchase_units[0].amount.value = 8;



    },

    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: purchase_units,
      });
    },

    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert('Transaction completed!');

        updateUser(details, description.value, 8)
        let tipcontainer = $(".all_access_ticketButton");
            for (let index = 0; index < tipcontainer.length; index++) {
              const element = tipcontainer[index];
              element.style.display = "none";
            
              
            }
       
      });
    },

    onError: function (err) {
      console.log(err);
    }



  }).render(element);
}

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


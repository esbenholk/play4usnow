
let tipsButtonTogglers = $(".tipButtonToggler");
for (let index = 0; index < tipsButtonTogglers.length; index++) {
  const element = tipsButtonTogglers[index];
  element.addEventListener("click", function(ev){
    ev.target.parentNode.children[1].style.display = "block";
  
  })
}
let tipsButtonUntogglers = $(".tipButtonUntoggler");
for (let index = 0; index < tipsButtonUntogglers.length; index++) {
  const element = tipsButtonUntogglers[index];
  element.addEventListener("click", function(ev){
    ev.target.parentNode.style.display = "none";
  
  })
}


$(".tipButton").each(function(index){
   createTipButton(index);
  });


async function createTipButton(index){
    let tipButton = await $(".tipButton")[index]
    initPayPalButton(tipButton);
}

function initPayPalButton(element) {
  var description = element.querySelector('#tip-button-container #description');
  var amount = element.querySelector('#tip-button-container #amount');


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
        closeTipping();
       
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

function closeTipping(){
  let tipcontainer = $(".tipButton");
  for (let index = 0; index < tipcontainer.length; index++) {
    const element = tipcontainer[index];
    element.style.display = "none";
  
    
  }
}
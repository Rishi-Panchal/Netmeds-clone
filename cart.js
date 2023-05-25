var cartData = JSON.parse(localStorage.getItem("cartProduct"));


count = JSON.parse(localStorage.getItem("count"));

function showCart(data) {
  var cartCont = document.getElementById("cartCont");
  var leftCart = document.getElementById("leftCart");
  var rightCart = document.getElementById("rightCart");

  var cartH1 = document.createElement("h1");
  cartH1.textContent = `${count} Items in Cart`;
  cartCont.insertBefore(cartH1, leftCart);

  var cartSlider = document.createElement("div");
  cartSlider.setAttribute("class", "cartSlider");

  var cartImg = document.createElement("img");

  var mainCart = document.createElement("div");
  mainCart.setAttribute("class", "mainCart");

  var mainCartH5 = document.createElement("h5");
  mainCartH5.textContent = `ORDER SUMMARY`;
  mainCart.append(mainCartH5);

  cartSlider.append(cartImg);
  leftCart.append(cartSlider, mainCart);

  var cartImgArr = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1623246675_Web_homevdas.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1619783794_Web_homertte.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1619784158_Home_bannerma25.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1622469732_free_webhomed.jpg",
  ];

  cartImg.src = cartImgArr[0];

  var i = 0;
  setInterval(function () {
    if (i == cartImgArr.length) {
      i = 0;
    }
    cartImg.src = cartImgArr[i++];
  }, 2500);

  var sum = 0;
  // sum.toFixed(2);
  for (item in data) {
    var el = data[item];

    sum += el.price2;

    var cartDivPro = document.createElement("div");
    cartDivPro.setAttribute("class", "cartDivPro");
    mainCart.append(cartDivPro);

    var cartIconDiv = document.createElement("div");
    var detailsDiv = document.createElement("div");
    cartDivPro.append(cartIconDiv, detailsDiv);

    var cartIconImg = document.createElement("img");
    cartIconImg.src = `${el.image}`;
    cartIconDiv.append(cartIconImg);

    var detailDivChild1 = document.createElement("div");
    var detailDivChild2 = document.createElement("div");
    var detailDivChild3 = document.createElement("div");

    detailsDiv.append(detailDivChild1, detailDivChild2, detailDivChild3);

    var p1Child1 = document.createElement("p");
    p1Child1.textContent = `${el.name}`;
    var p2Child1 = document.createElement("p");
    p2Child1.textContent = `Rs.${el.price2}`;
    detailDivChild1.append(p1Child1, p2Child1);

    var pChild2 = document.createElement("p");
    pChild2.textContent = `Mfr: ${el.mfr}`;
    var divChild2 = document.createElement("div");
    divChild2.textContent = `QTY:`;
    detailDivChild2.append(pChild2, divChild2);

    var select = document.createElement("select");
    divChild2.append(select);

    for (var i = 1; i <= 10; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.append(option);
    }

    select.addEventListener("change", function () {
      var getValue = +select.value;
      

      var getP = p2Child1.textContent;
      var oldPrice = Number(getP.split("Rs.")[1]);

      var total = el.price2 * getValue;
      total = total.toFixed(2);
      p2Child1.textContent = `Rs.${total}`;

      sum += total - oldPrice;
      sum.toFixed(2);

      localStorage.setItem("totalPrice", JSON.stringify(sum));

    
      p2PayChild1.textContent = `Rs. ${sum}`;
      p2PayChild2.innerHTML = `<p><strong>Rs. ${sum}</strong></p>`;
      h3Child3.textContent = `Rs. ${sum}`;
    });

    var pChild3 = document.createElement("p");
    pChild3.textContent = `Delivery between Feb 25th-27th`;
    var btnChild3 = document.createElement("button");
    btnChild3.textContent = `Remove`;
    detailDivChild3.append(pChild3, btnChild3);


    btnChild3.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.parentNode.remove();
      removeData(el.id);

      let getP = p2Child1.textContent;
      let oldPrice = Number(getP.split("Rs.")[1]);

      sum -= oldPrice;


      localStorage.setItem("totalPrice", JSON.stringify(sum));

      p2PayChild1.textContent = `Rs. ${sum}`;
      p2PayChild2.innerHTML = `<p><strong>Rs. ${sum}</strong></p>`;
      h3Child3.textContent = `Rs. ${sum}`;

      localStorage.setItem("count", JSON.stringify(--count));

      cartH1.textContent = `${count} Items in Cart`;

      itemsInCart.textContent = count;
    });
  }
  console.log(`PriceSum`, sum);
  localStorage.setItem("totalPrice", JSON.stringify(sum));

  //! Payment Division

  var paymentH5 = document.createElement("h5");
  paymentH5.textContent = `PAYMENT DETAILS`;

  var payDiv = document.createElement("div");
  var payChild1 = document.createElement("div");
  var payChild2 = document.createElement("div");
  var payChild3 = document.createElement("div");

  rightCart.append(paymentH5, payDiv);
  payDiv.append(payChild1, payChild2, payChild3);

  var p1PayChild1 = document.createElement("p");
  p1PayChild1.textContent = `MRP Total`;
  var p2PayChild1 = document.createElement("p");
  p2PayChild1.textContent = `Rs. ${sum}`;
  payChild1.append(p1PayChild1, p2PayChild1);

  var p1PayChild2 = document.createElement("p");
  p1PayChild2.innerHTML = `<p><strong>Total Amount<sup>*</sup></strong></p>`;
  var p2PayChild2 = document.createElement("p");
  p2PayChild2.innerHTML = `<p><strong>Rs. ${sum}</strong></p>`;
  payChild2.append(p1PayChild2, p2PayChild2);

  var h3Child3 = document.createElement("h3");
  h3Child3.textContent = `Rs. ${sum}`;
  var btnPayChild3 = document.createElement("button");
  btnPayChild3.textContent = `PROCEED`;
  payChild3.append(h3Child3, btnPayChild3);

  btnPayChild3.onclick = function () {
    if (count == 0) alert("Please add item in cart!");
    else window.location.href = ``;
  };

  var pSmallPay = document.createElement("p");
  pSmallPay.textContent = `Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions`;
  rightCart.append(pSmallPay);
}
showCart(cartData);

function removeData(el) {
  var inputId = el;
  console.log(inputId);
  for (var i = 0; i < cartData.length; i++) {
    if (cartData[i].id == inputId) {
      cartData.splice(i, 1);
      localStorage.setItem("cartProduct", JSON.stringify(cartData));
      console.log(cartData);
    }
  }
}



var itemsInCart = document.getElementById("itemsInCart");

var getCount = JSON.parse(localStorage.getItem("count"));
console.log(getCount);
itemsInCart.textContent = getCount;

// ----------------Logged User ----------------//
var user = JSON.parse(localStorage.getItem("user_data"));

var userLoginName = document.getElementById("userLoginName");
userLoginName.textContent = ` ${user.username}`;
var cartLinkArray = document.querySelectorAll(".buy-link");
var cartPopup = document.querySelector(".modal-cart");
var closeCartPopup = cartPopup.querySelector(".modal-close");

for (var i = 0; i < cartLinkArray.length; i++) {
  cartLinkArray[i].addEventListener("click", function(evt) {
    cartPopup.classList.add("modal-show");
  });
}

closeCartPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var closeMapPopup = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

closeMapPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

 window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

var contactLink = document.querySelector(".btn-contact");
var contactPopup = document.querySelector(".modal-writeus");
var closeContactPopup = contactPopup.querySelector(".modal-close");



var contactForm = document.querySelector(".contacts-form")
var login = document.querySelector(".contacts-login");
var password = document.querySelector(".contacts-password");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

 contactLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");
    contactPopup.classList.add("modal-appereance");

    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });



 closeContactPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");

});

  window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});

  contactForm.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      contactPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });











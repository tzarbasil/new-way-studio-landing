let addButton = document.querySelector('.footer__button');
let popup = document.querySelector('.popup');
let gratitudePopup = document.querySelector('.popup_type_thanks')
let closeButton = document.querySelector('.popup__close-button');
let gratitudeButton = document.querySelector('.popup_type_thanks-button')
let submitButton = document.querySelector('.popup__submit')
let whriteToUsButton = document.querySelector('.subscribe__submit')
import FormValidator from "./FormValidator.js";

import {
    popupSignupForm, options
} from './constants.js';

const placeFormValidation = new FormValidator(options, popupSignupForm);
placeFormValidation.enableValidation();

addButton.addEventListener('click', function () {
    popup.classList.add('popup_opened')
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
}); 

gratitudeButton.addEventListener('click', function () {
    gratitudePopup.classList.remove('popup_opened');
}); 

submitButton.addEventListener('click', function (evt) {
    popup.classList.remove('popup_opened');
    gratitudePopup.classList.add('popup_opened');
    evt.preventDefault()
}); 

whriteToUsButton.addEventListener('click', function (evt) {
    gratitudePopup.classList.add('popup_opened');
    evt.preventDefault()
}); 

import {renderErrorMessage} from"../view/index";
import { createNewUser,singInNewUser, updateProfile} from "../model/index";
// regex, regular expression
  // email regex
export let validateLoginInfo=(email, password)=>{
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("loginEmail-error", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("loginEmail-error", "Invalid email");
  } else {
    renderErrorMessage("loginEmail-error", "");
  }

  if (!password) {
    renderErrorMessage("loginPassword-error", "Please enter your password");
  } else {
    renderErrorMessage("loginPassword-error", "");
  }
  if (email && password) {
    singInNewUser(email,password)
  }
};

export let validateRegisterInfo=(email, password, lastName, firstname, confirm)=>{
    const emailRegex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      renderErrorMessage("error-email", "Please enter your email");
    } else if (!emailRegex.test(email)) {
      renderErrorMessage("error-email", "Invalid email");
    } else {
      renderErrorMessage("error-email", "");
    }
 
    if (!firstname) {
        renderErrorMessage("error-firstName", "Please enter your first name");
      } else {
        renderErrorMessage("error-firstName", "");
    }

    if (!lastName) {
        renderErrorMessage("error-lastName", "Please enter your last name");
      } else {
        renderErrorMessage("error-lastName", "");
      }

    if (!password) {
      renderErrorMessage("error-password", "Please enter your password");
    } else {
      renderErrorMessage("error-password", "");
    }

    if (!confirm) {
        renderErrorMessage("error-confirm", "Please enter your confirm");
    } else{
        if(confirm !== password){
            renderErrorMessage("error-difPass", "Please enter your confirm");
        } else{
            renderErrorMessage("error-confirm", "");
        }
    }
    if(
        firstname &&
        lastName &&
        email &&
        password &&
        confirm === password
    ){
        createNewUser(firstname, lastName, email, password, confirm)
    }
    
    
  };

  export let validateResetInfo=(password)=>{
    const emailRegex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;  
    if (!password) {
      renderErrorMessage("error-reset", "Please enter your password");
    } else {
      renderErrorMessage("error-reset", "");
    }
  };
      //   } else if (!emailRegex.test(firstname)) {
    //     renderErrorMessage("error-firstName", "Invalid email");

   //   } else if (!emailRegex.test(lastName)) {
    //     renderErrorMessage("error-lastName", "Invalid email");

   // if (!email) {
    //   renderErrorMessage("loginEmail-error", "Please enter your email");
    // } else if (!emailRegex.test(email)) {
    //   renderErrorMessage("loginEmail-error", "Invalid email");
    // } else {
    //   renderErrorMessage("loginEmail-error", "");
    // }
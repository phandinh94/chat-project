import { loginPage } from "../pages/loginPage/index";
import { chatPage } from "../pages/chatPage/index";
import { registerPage } from "../pages/registerPage/index";
import { resetPassword } from "../pages/resetPassword/index";
import { validateLoginInfo } from "../controller/index";
import { validateRegisterInfo } from "../controller/index";
import { validateResetInfo } from "../controller/index";
import { createNewUser } from "../model/index";
import {singInNewUser} from "../model/index";
export let setActiveScreen=(screenName)=>{
    let app = document.getElementById("app")
    switch (screenName) {
        case "loginPage":
            if(app){
                app.innerHTML=loginPage;
            }
            const loginForm = document.getElementById("login-form");
                if (loginForm) {
                  console.log(loginForm);
                  loginForm.addEventListener("submit", (event) => {
                    event.preventDefault();
          
                    const email = loginForm.email.value;
                    const password = loginForm.password.value;
                    console.log(email);
                    console.log(password);
                    validateLoginInfo(email, password);
                });
            }
            break;
        case "chatPage":
            if(app){
                app.innerHTML=chatPage;
            }
            
            break;   
        case "registerPage":
            if(app){
             app.innerHTML=registerPage;
            }
            const registerForm = document.getElementById("register-page");
                if (registerForm) {
                  console.log(registerForm);
                  registerForm.addEventListener("submit", (event) => {
                    event.preventDefault();
          
                    const email = registerForm.email.value;
                    const password = registerForm.password.value;
                    const lastName = registerForm.lastname.value ;
                    const firstname = registerForm.firstname.value;
                    const confirm = registerForm.confirm.value;
                    // console.log(email);
                    // console.log(password);
                    // console.log(lastName);
                    // console.log(firstname);
                    // console.log(confirm);
                    validateRegisterInfo(email, password, lastName, firstname, confirm);
                });
            }
            break;
        case "resetPassword":
            if(app){
            app.innerHTML=resetPassword;
            }
            const resetPasswordForm = document.getElementById("resetPass");
                if (resetPasswordForm) {
                  console.log(resetPasswordForm);
                  resetPasswordForm.addEventListener("submit", (event) => {
                    event.preventDefault();
          
                    const password = resetPasswordForm.password.value;
                    // console.log(email);
                    console.log(password);
                    validateResetInfo( password);
                })
            }
            break;

        default:
            break;
    }
};
export let renderErrorMessage = (id, text) => {
    const errorMessage = document.getElementById(id);
    if (errorMessage) {
      errorMessage.innerText = text;
    }
  };



            // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó
         
           
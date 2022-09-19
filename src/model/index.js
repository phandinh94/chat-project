import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { renderErrorMessage } from "../view/index";

export let createNewUser = (firstname, lastName, email, password)=>{

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        console.log(userCredential);
        const completed = userCredential.message;
        renderErrorMessage("completed", completed);          
    })
    .catch((err)=>{
        const errorCode = err.code;
        const errorMessage = err.message;
        renderErrorMessage("server-error-user", errorMessage);  
    });    
};

export let singInNewUser = (email, password)=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
      }    
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    renderErrorMessage("server-error-user", errorMessage);
    
    });
}

  // hiển thị thành công
        // xoá phần tử lỗi
        // hiển thị lời chào ghép tên
        // điều hướng qua login
        // điều hướng qua chat
        // logic chat: gửi chat, hiện màn hình... 
import "./style.css";
export let loginPage =/*html*/`
<div id="loginPage" >
     <div class="login" >
        <div class="login-name">
            <h4>Sigin in to the Chat</h4>
        </div>
        <div class="title">
            <div class="area-login" >
                <form id="login-form">
                    <div class="login-title">Email address</div>
                    <div class="login-title"><input class="login-input" type="text" placeholder="Please enter your email" name="email"></div>
                    <div id = "loginEmail-error"></div>
                    <div class="login-title">Password</div>
                    <div class="login-title"><input class="login-input" type="text" placeholder="Please enter your password" name="password"></div>
                    <div id = "loginPassword-error"></div>
                    <div class="login-title"><button class="login-button">Login</button></div>
                    <div id ="server-error-user"></div>
                    <div id ="completed"></div>
                <form>
            </div>
            <button class="change">New to ... Chat? Create an account </button>
            <div class="change-pass">Forget your Chat? <button class="change-button">Click here</button></div>    
        </div>
     </div>
</div>
`
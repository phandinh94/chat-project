import "./style.css";
export let resetPassword = /*html*/`
<div id="resetPassword">
    <div class="reset-pass">
        <h4>Reset your password</h4>
        <div class="title-reset">
            <div class="area-reset" >
                <p class="reset-title">Email address</p>
                <form id="resetPass">              
                    <div class="reset-title"><input class="reset-input" type="text" placeholder="Please enter your email" name="password"></div>
                    <div id = "error-reset"></div>
                    <div class="reset-title"><button class="reset-button">Reset Password</button></div>
                </form>
            </div>
            <button class="change-reset">Already have an account? Login here </button>
        </div>
    </div>
</div> 
`
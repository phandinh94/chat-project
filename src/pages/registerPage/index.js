import "./style.css";
export let registerPage = /*html*/`
<div id="registerPage">
        <div class="create" >
            <h4>Create an acount</h4>
            <div id = "completed"></div>
            <div class="title-create">
                <div class="area-create" >
                    <form id="register-page">
                        <div class="create-title">First Name</div>
                        <div class="create-title"><input class="create-input" type="text" placeholder="Please enter your first name" name="firstname"></div>
                        <div id = "error-firstName"></div>
                        <div class="create-title">Last Name</div>
                        <div class="create-title"><input class="create-input" type="text" placeholder="Please enter your last name" name="lastname"></div>
                        <div id = "error-lastName"></div>
                        <div class="create-title">Email address</div>
                        <div class="create-title"><input class="create-input" type="text" placeholder="Please enter your email" name="email"></div>
                        <div id = "error-email"></div>
                        <div class="create-title">Password</div>
                        <div class="create-title"><input class="create-input" type="text" placeholder="Please enter your password" name="password"></div>
                        <div id = "error-password"></div>
                        <div class="create-title">Confirm Password</div>
                        <div class="create-title"><input class="create-input" type="text" placeholder="Confirm your email" name="confirm"></div>
                        <div id = "error-confirm"></div>
                        <div id = "error-difPass"></div>
                        <div class="create-title"><button class="create-button">Rigister</button></div>
                        <div id = "server-error-user"></div>
                    </form>
                </div>
                <button class="change-create">Already have an account? Login here </button>
            </div>
        </div>
</div>
` 
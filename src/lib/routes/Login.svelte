<script>
    import { API_URL } from "../modules/settings.js";
    import { fetchPostJsonFormData } from "../modules/utils.js";
    import toastr from "toastr";

    
    document.addEventListener("DOMContentLoaded", function () {
        let initialized = false;
        init();

        async function init() {
            const form = document.querySelector("#form");
            toastr.options = {
                positionClass: 'toast-bottom-left'
            };
            
            if (!initialized) {
                form.addEventListener("submit", async (event) => {
                    event.preventDefault();
                    console.log("Tried to log in");
                    try {
                        const response = await fetchPostJsonFormData(API_URL + "login", form);
                        console.log("api/login response:", response);
                        if (response.data !== undefined) {
                            toastr.success("Logged in successfully!")
                            window.location.href = "/";
                        } else {
                            if (response.message !== undefined) {
                                toastr.error(response.message);
                            } else {
                                toastr.warning("Bad credentials");
                            }
                        }
                    } catch (error) {
                        toastr.error(error.message);
                    }
                });
                initialized = true;
            }
        }
    });
</script>

<div class="container">
    <div class="text-center">
        <h1>Login</h1>
        <br />
        <form class="form" id="form">
            <div class="row">
                <div class="col-1">
                    <label for="username">Username</label>
                </div>
                <div class="col-6">
                    <input type="text" id="username" name="username" />
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-1">
                    <label for="password">Password</label>
                </div>
                <div class="col-6">
                    <input type="password" id="password" name="password" />
                </div>
            </div>
            <br />
            <a href="/register"><button class="btn btn-primary" type="button" id="register"><strong>Register</strong></button></a>
            <button class="btn btn-success" type="submit" id="submit"><strong>Submit</strong></button>
        </form>
        <br />
        <div id="result" />
    </div>
</div>

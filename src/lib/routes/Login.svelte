<script>
    import { API_URL } from "../modules/settings.js";
    import { fetchPostJsonFormData } from "../modules/utils.js";
    import { onMount } from "svelte";
    import toastr from "toastr";

    onMount(() => {
        const form = document.querySelector("#form");
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            toastr.info("Logging in...");
            try {
                const response = await fetchPostJsonFormData(API_URL + "login", form);
                if (response.data !== undefined) {
                    toastr.success("Logged in successfully!");
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 1500);
                } else {
                    if (response.message !== undefined) {
                        toastr.error(response.message);
                    } else {
                        toastr.warning("Bad credentials!");
                    }
                }
            } catch (error) {
                toastr.error(error.message);
            }
        });
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
                    <input type="text" id="username" name="username" required/>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-1">
                    <label for="password">Password</label>
                </div>
                <div class="col-6">
                    <input type="password" id="password" name="password" required/>
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

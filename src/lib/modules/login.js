import { API_URL } from "./settings.js";
import { fetchPostJsonFormData } from "./utils.js";
import toastr from "toastr";
import 'toastr/build/toastr.css';

document.addEventListener("DOMContentLoaded", function () {
    let initialized = false;
    init();

    async function init() {
        const form = document.querySelector("#form");
        if (!initialized) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
                console.log("Tried to log in");
                try {
                    const response = await fetchPostJsonFormData(API_URL + "login", form);
                    console.log("api/login response:", response);
                    if (response.data !== undefined) {
                        toastr.success("Logged in successfully");
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
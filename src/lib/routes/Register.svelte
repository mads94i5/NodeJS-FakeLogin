<div class="container">
    <div class="text-center">
        <h1>Register</h1><br>
            <form class="form" id="form">
                <div class="row">
                    <div class="col-1">
                        <label for="username">Username</label>
                    </div>
                    <div class="col-6">
                        <input type="text" id="username" name="username">
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-1">
                        <label for="email">Email</label>
                    </div>
                    <div class="col-6">
                        <input type="email" id="email" name="email">
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-1">
                        <label for="password">Password</label>
                    </div>
                    <div class="col-6">
                        <input type="password" id="password" name="password">
                    </div>
                </div><br>
                <a href="/login"><button class="btn btn-primary" type="button" id="login"><strong>Login</strong></button></a>
                <button class="btn btn-success" type="submit" id="submit"><strong>Register now!</strong></button>
            </form>
            <br>
            <div id="result"></div>
    </div>
</div>
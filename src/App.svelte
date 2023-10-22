<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./lib/routes/Home.svelte";
  import Login from "./lib/routes/Login.svelte";
  import Register from "./lib/routes/Register.svelte";
  export let url = "";
</script>

<Router {url}>
  <header>
      <div>
          <h2 class="no-margin text-center"><strong>Login Mockup</strong></h2>
      </div>
      <nav>
          <Link to="/"><button class="btn nav-btn btn-success"><strong>Home</strong></button></Link>
          <div class="login-area">
              <Link to="/login"><button class="btn btn-success"><strong>Login</strong></button></Link>
              <Link to="/register"><button class="btn btn-success"><strong>Register</strong></button></Link>
          </div>
      </nav>
      <div>
          <Route path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
      </div>
  </header>
</Router>

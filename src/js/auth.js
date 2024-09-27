document.getElementById("switchToRegister").addEventListener("click", () => {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("welcomeMessage").innerHTML = `
        <h2>Welcome New User!</h2>
        <p>Create your account to start using Spello and improve your spelling skills.</p>
    `;
});

document.getElementById("switchToLogin").addEventListener("click", () => {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("welcomeMessage").innerHTML = `
        <h2>Welcome Back!</h2>
        <p>Login to continue learning and improving your spelling ability.</p>
    `;
});

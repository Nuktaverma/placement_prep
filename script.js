function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // You MUST use these exact values to log in
  if (user === "vermanukta@gmail.com" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Try again.");
  }
}

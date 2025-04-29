function registerOrLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("points", "0");
  location.href = "dashboard.html";
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

function goTo(page) {
  location.href = page + ".html";
}

window.onload = function () {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  if (document.getElementById("userEmail")) {
    document.getElementById("userEmail").innerText = email;
  }
  if (document.getElementById("dashboardEmail")) {
    document.getElementById("dashboardEmail").innerText = email;
    document.getElementById("userPoints").innerText = localStorage.getItem("points") || "0";
    if (email === "shamindranathroy681@gmail.com" && password === "S89000r&") {
      document.getElementById("ownerBtn").style.display = "block";
      document.getElementById("ownerSection").style.display = "block";
      document.getElementById("totalPoints").innerText = localStorage.getItem("points") || "0";
    }
  }
  if (document.getElementById("points")) {
    document.getElementById("points").innerText = localStorage.getItem("points") || "0";
  }
};

function submitCaptcha() {
  const input = document.getElementById("captchaInput").value;
  if (input.trim() !== "") {
    let currentPoints = parseInt(localStorage.getItem("points") || "0");
    currentPoints += 1;
    localStorage.setItem("points", currentPoints);
    document.getElementById("points").innerText = currentPoints;
    document.getElementById("captchaInput").value = "";
    document.getElementById("message").innerText = "সঠিক উত্তর! আপনি ১ পয়েন্ট অর্জন করেছেন।";
  } else {
    document.getElementById("message").innerText = "সঠিকভাবে CAPTCHA পূরণ করুন।";
  }
}

function sendWithdraw() {
  const upi = document.getElementById("upi").value;
  const amount = document.getElementById("amount").value;
  document.getElementById("message").innerText = "অনুরোধ পাঠানো হয়েছে। হোয়াটসঅ্যাপে মালিকের কাছে পৌঁছাবে।";
}
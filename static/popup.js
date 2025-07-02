document.addEventListener('DOMContentLoaded', () => {
  console.log("Popup JS loaded");

  if (window.location.pathname === "/") {
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.style = `
      position: fixed; 
      top: 20%; 
      left: 35%; 
      background: white; 
      border: 1px solid #ccc; 
      padding: 20px; 
      z-index: 9999; 
      width: 300px;
    `;
    popup.innerHTML = `
      <h2>Join our mailing list</h2>
      <input type="text" id="popup-name" placeholder="Your name" /><br><br>
      <input type="email" id="popup-email" placeholder="Your email" /><br><br>
      <button id="submit-btn">Submit</button>
    `;
    document.body.appendChild(popup);

    document.getElementById("submit-btn").addEventListener("click", () => {
      const name = document.getElementById("popup-name").value.trim();
      const email = document.getElementById("popup-email").value.trim();

      if (!name || !email) {
        alert("Please enter both name and email.");
        return;
      }

      fetch("https://8e2d-217-150-213-29.ngrok-free.app/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      })
      .then(res => {
        if (!res.ok) throw new Error("Failed to register");
        alert("✅ Thank you!");
        popup.remove();
      })
      .catch(() => alert("❌ Error, try again."));
    });
  }
});

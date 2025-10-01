const API_BASE = process.env.API_BASE;
 // Change to your backend URL

// Handle form submission
const form = document.getElementById("userForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
    };

    // Send data to backend
    const res = await fetch(`${API_BASE}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // Redirect to receipt page with ID
    window.location.href = `receipt.html?id=${data.id}`;
  });
}

// Load receipt details
async function loadReceipt(id) {
  if (!id) {
    document.getElementById("receiptContainer").innerText = "No receipt found.";
    return;
  }

  const res = await fetch(`${API_BASE}/users/${id}/`);
  const data = await res.json();

  document.getElementById("receiptContainer").innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
  `;
}

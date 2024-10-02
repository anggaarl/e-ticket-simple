document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ticketType = document.getElementById("ticketType").value;

    const ticketDetails = `
        <h3>Detail Pemesanan Tiket</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Jenis Tiket:</strong> ${ticketType}</p>
    `;

    const detailsContainer = document.getElementById("ticketDetails");
    detailsContainer.innerHTML = ticketDetails;
    detailsContainer.style.display = "block";
});

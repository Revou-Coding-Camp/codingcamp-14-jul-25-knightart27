const nama = prompt("Masukkan Nama Anda:");
document.getElementById("welcomeText").innerText = `Hi ${nama}, Welcome To Website`;

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("messageInput").value;

    const currentTime = new Date().toString();

    document.getElementById("output").innerHTML = `
        <p><b>Current time :</b> ${currentTime}</p>
        <p><b>Nama :</b> ${nama}</p>
        <p><b>Tanggal Lahir :</b> ${birthdate}</p>
        <p><b>Jenis Kelamin :</b> ${gender}</p>
        <p><b>Pesan :</b> ${pesan}</p>
    `;
});

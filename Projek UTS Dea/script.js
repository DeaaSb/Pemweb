function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({ behavior: 'smooth' });
}

function submitBooking(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectedPackage = document.getElementById("package").value;
    const date = document.getElementById("date").value;

    alert(Terima kasih ${name}!\nPemesanan untuk paket wisata ${selectedPackage} pada tanggal ${date} telah berhasil. Kami akan mengirimkan detail ke ${email}.);
    
    document.getElementById("bookingForm").reset();
}
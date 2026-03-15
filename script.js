document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('patientName').value;
    const messageBox = document.getElementById('welcomeMessage');
    
    if(name.trim() !== "") {
        messageBox.innerHTML = `Halo <strong>${name}</strong>, mohon tunggu sebentar. Kami sedang menghubungkan Anda dengan dokter yang tersedia.`;
        messageBox.classList.remove('hidden');
        
        // Opsional: Reset form setelah submit
        document.getElementById('patientName').value = "";
    }
});

const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();


        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirm').value;

        if (password !== confirm) {
            alert('Password dan Konfirmasi Password tidak cocok!');
            return;
        }

        alert(`Halo ${nama}, pendaftaran berhasil! Menuju Halaman Utama...`);
        
        window.location.href = 'index.html';
    });
}
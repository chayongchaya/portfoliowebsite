// ฟังก์ชันสำหรับเปิด Pop-up
function openPopup(imageSrc) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupImage = document.getElementById('popupImage');

    popupImage.src = imageSrc; // ตั้งค่าภาพสำหรับ Pop-up
    popupOverlay.style.display = 'flex'; // แสดง overlay
}

// ฟังก์ชันสำหรับปิด Pop-up
function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none'; // ซ่อน overlay
}

// เพิ่ม event listener ให้กับรูปภาพใน About Me
document.querySelectorAll('.about-image img').forEach(image => {
    image.addEventListener('click', function() {
        openPopup(this.src); // เรียกใช้ฟังก์ชัน openPopup เมื่อคลิกที่ภาพ
    });
});

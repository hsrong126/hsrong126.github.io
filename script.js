// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 影片交互：點擊影片外框可切換播放/暫停
document.getElementById('project-video').addEventListener('click', function () {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});

// 聯繫表單驗證
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
        formMessage.textContent = '訊息已發送！感謝您的聯繫。';
        this.reset();
    } else {
        formMessage.textContent = '請填寫所有欄位！';
        formMessage.style.color = 'red';
    }
});
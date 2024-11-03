window.addEventListener('load', () => {
  const clickToEnter = document.querySelector('.click-to-enter');
  const container = document.querySelector('.container');
  const bgMusic = document.getElementById('bgMusic');
  const audioIcon = document.getElementById('audioIcon');
  const bgVideo = document.getElementById('bg-video');
  let isMuted = false;

  // เช็คว่าเป็น iOS หรือไม่
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  // เริ่มต้นให้เสียงปิด
  bgMusic.volume = 0;
  
  // ฟังก์ชันควบคุมเสียงสำหรับ iOS
  const toggleSound = () => {
    if (isMuted) {
      if (isIOS) {
        bgMusic.play();
      }
      bgMusic.volume = 1;
      audioIcon.className = 'fas fa-volume-up';
    } else {
      if (isIOS) {
        bgMusic.pause();
      }
      bgMusic.volume = 0;
      audioIcon.className = 'fas fa-volume-mute';
    }
    isMuted = !isMuted;
  };

  // เริ่มต้นการทำงานเมื่อกดปุ่ม Click to Enter
  clickToEnter.addEventListener('click', () => {
    clickToEnter.style.display = 'none';
    container.style.display = 'block';
    
    bgVideo.play().catch(console.warn);
    
    // เล่นเสียงเมื่อกดปุ่ม
    bgMusic.volume = 1;
    bgMusic.play().catch(error => {
      console.warn('Cannot play audio:', error);
      audioIcon.className = 'fas fa-volume-mute';
      isMuted = true;
    });
    
    audioIcon.className = 'fas fa-volume-up';

    setTimeout(() => {
      container.classList.add('fade-in');
    }, 100);
  });

  // ปุ่มควบคุมเสียงที่ปรับปรุงใหม่
  audioIcon.addEventListener('click', () => {
    toggleSound();
  });
});

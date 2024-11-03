window.addEventListener('load', () => {
  const clickToEnter = document.querySelector('.click-to-enter');
  const container = document.querySelector('.container');
  const bgMusic = document.getElementById('bgMusic');
  const audioIcon = document.getElementById('audioIcon');
  const bgVideo = document.getElementById('bg-video');
  let isMuted = false;
  
  // เริ่มต้นให้เสียงปิดจนกว่าจะกดปุ่ม Click to Enter
  bgMusic.volume = 0;
  
  // เริ่มต้นการทำงานเมื่อกดปุ่ม Click to Enter
  clickToEnter.addEventListener('click', () => {
    // ซ่อนปุ่ม Click to Enter และแสดง container
    clickToEnter.style.display = 'none';
    container.style.display = 'block';
    
    // เล่นวิดีโอพื้นหลัง
    bgVideo.play().catch(console.warn);
    
    // เล่นเสียงเพลงเมื่อกดปุ่ม
    bgMusic.volume = 1;
    bgMusic.play().catch(error => {
      console.warn('Cannot play audio:', error);
      // ถ้าเล่นเสียงไม่ได้ ให้แสดงไอคอนปิดเสียง
      audioIcon.className = 'fas fa-volume-mute';
      isMuted = true;
    });
    
    // ตั้งค่าไอคอนเสียงเป็นเปิด
    audioIcon.className = 'fas fa-volume-up';

    // เพิ่มเอฟเฟกต์ fade-in
    setTimeout(() => {
      container.classList.add('fade-in');
    }, 100);
  });

  // ปุ่มควบคุมเสียง
  audioIcon.addEventListener('click', () => {
    if (isMuted) {
      bgMusic.volume = 1;
      audioIcon.className = 'fas fa-volume-up';
    } else {
      bgMusic.volume = 0;
      audioIcon.className = 'fas fa-volume-mute';
    }
    isMuted = !isMuted;
  });
});

window.addEventListener('load', () => {
  const clickToEnter = document.querySelector('.click-to-enter');
  const container = document.querySelector('.container');
  const bgMusic = document.getElementById('bgMusic');
  const audioIcon = document.getElementById('audioIcon');
  const bgVideo = document.getElementById('bg-video');
  let isMuted = false;

  // เริ่มต้นการทำงานเมื่อกดปุ่ม Click to Enter
  clickToEnter.addEventListener('click', () => {
    clickToEnter.style.display = 'none';
    container.style.display = 'block';

    // เล่นวิดีโอและเสียง
    bgVideo.play();
    bgMusic.play().catch(error => {
      console.warn('เสียงอาจจะไม่ได้เล่นโดยอัตโนมัติบน iOS:', error);
    });

    // เพิ่มคลาส fade-in ให้กับ container เพื่อให้มีเอฟเฟกต์แสดงอย่างนุ่มนวล
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

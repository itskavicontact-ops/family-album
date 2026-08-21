/* =========================================================================
   EDIT THIS SECTION to add your own albums, photos, videos and milestones.
   Everything below the "STOP EDITING" line is just the code that makes
   the page work — you shouldn't need to touch it.
   ========================================================================= */

const albumsData = [
  {
    title: "Frame of Favorites",
    description: "Everyone together at the lake house",
    cover: "url('asset/images/pic1.jpg')",
    photos: [
      { src: "asset/images/pic1.jpg", caption: "The heart of our family" },
      { src: "asset/images/pic2.jpg", caption: "The loudest corner of the room" },
      { src: "asset/images/pic3.jpg", caption: "Pure happiness in one frame" },
      { src: "asset/images/pic4.jpg", caption: "Always laughing together" },
      { src: "asset/images/pic5.jpg", caption: "Yercaud diaries" },
      { src: "asset/images/pic6.jpg", caption: "Mountain air, family care" },
      { src: "asset/images/pic7.jpg", caption: "Three generations of smiles in one frame" },
      { src: "asset/images/pic8.jpg", caption: "Double the love" },
      { src: "asset/images/pic9.jpg", caption: "The core three" },
      { src: "asset/images/pic10.jpg", caption: "The core lineage" },
      { src: "asset/images/pic11.jpg", caption: "Cousins squad goals" },
      { src: "asset/images/pic12.jpg", caption: "Good times with the guys" },
      { src: "asset/images/pic13.jpg", caption: "The German contingent" },
      { src: "asset/images/pic14.jpg", caption: "The cousin crew" },
      { src: "asset/images/pic20.jpg", caption: "The mega family selfie " },
    ]
  },
  {
    title: "Life in Low-Key",
    description: "Lights, sweets, and family",
    cover: "url('asset/images/pic25.jpg')",
    photos: [
      { src: "asset/images/pic21.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic22.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic23.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic24.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic25.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic26.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic27.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic28.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic29.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic30.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic31.jpg", caption:"No Theme, Just Vibes" },
      { src: "asset/images/pic32.jpg", caption:"No Theme, Just Vibes" },
    ]
  },
  {
    title: "Our Travel Diary",
    description: "A little bit of everyone, over the years",
    cover: "url('asset/images/pic27.jpg')",
    photos: [
      { src: "asset/images/pic33.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic34.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic35.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic36.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic37.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic38.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic39.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic40.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic41.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic42.jpg", caption:"Unpacked memories" },
      { src: "asset/images/pic43.jpg", caption:"Unpacked memories" },
    ]
  },
];

const videosData = [
  {
    title: "Family",
    description: "The toast that made everyone cry (happy tears)",
    poster: "linear-gradient(135deg,#B5651D,#7C4413)",
    
    src: "videos/fish.mp4"
  },
  {
    title: "cousins",
    description: "Recital from last spring",
    poster: "linear-gradient(135deg,#6B7A5E,#3F4A36)",
    src: "videos/dance-recital.mp4"
  },
  {
    title: "Family Trip Highlights",
    description: "Two weeks on the road, in three minutes",
    poster: "linear-gradient(135deg,#5B7C99,#2E4557)",
    src: "videos/road-trip.mp4"
  },
];

const timelineData = [
  { year: "", title: "Where it all began", description: "Grandma and Grandpa bought the house on Maple Street." },
  { year: "", title: "A new generation", description: "The first grandchild was born, and the family kept growing." },
  { year: "", title: "Our first big reunion", description: "Four generations under one roof for the first time." },
  { year: "", title: "Still going strong", description: "This website — a little home for all our memories." },
];

/* ============================ STOP EDITING ============================= */

const siteHeader = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 12);
});

const albumGrid = document.getElementById('album-grid');
const videoGrid = document.getElementById('video-grid');

albumsData.forEach((album, i) => {
  const card = document.createElement('button');
  card.className = 'card reveal';
  card.setAttribute('aria-label', `Open album: ${album.title}`);
  card.innerHTML = `
    <div class="card-thumb" style="background-image:${album.cover}">
      <span class="count">${album.photos.length} photos</span>
    </div>
    <div class="card-body">
      <h3>${album.title}</h3>
      <p>${album.description}</p>
      <span class="card-link">View album →</span>
    </div>`;
  card.addEventListener('click', () => openAlbum(i));
  albumGrid.appendChild(card);
});

videosData.forEach((v, i) => {
  const card = document.createElement('button');
  card.className = 'card reveal';
  card.setAttribute('aria-label', `Play video: ${v.title}`);
  card.innerHTML = `
    <div class="card-thumb" style="background-image:${v.poster}">
      <div class="play-badge">▶</div>
    </div>
    <div class="card-body">
      <h3>${v.title}</h3>
      <p>${v.description}</p>
      <span class="card-link">Watch now →</span>
    </div>`;
  card.addEventListener('click', () => openVideo(i));
  videoGrid.appendChild(card);
});

const timelineList = document.getElementById('timeline-list');
timelineData.forEach((item) => {
  const el = document.createElement('div');
  el.className = 'timeline-item reveal';
  el.innerHTML = `
    <span class="timeline-year">${item.year}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>`;
  timelineList.appendChild(el);
});

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

const statNums = document.querySelectorAll('.stat-num');
function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  const duration = 900;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statsSection = document.querySelector('.stats');
if (statsSection && 'IntersectionObserver' in window) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statNums.forEach(animateCount);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statsObserver.observe(statsSection);
} else {
  statNums.forEach((el) => { el.textContent = el.dataset.count; });
}

const photoModal = document.getElementById('photo-modal');
const albumPicker = document.getElementById('album-picker');
const photoMediaWrap = document.getElementById('photo-media-wrap');
const photoMedia = document.getElementById('photo-media');
const photoCaption = document.getElementById('photo-caption');
const photoNav = document.getElementById('photo-nav');

let currentAlbum = null;
let currentPhotoIndex = 0;

function openAlbum(albumIndex){
  currentAlbum = albumsData[albumIndex];
  albumPicker.hidden = false;
  photoMediaWrap.hidden = true;
  photoNav.hidden = true;
  photoCaption.textContent = currentAlbum.title;
  albumPicker.innerHTML = '';
  currentAlbum.photos.forEach((photo, idx) => {
    const thumb = document.createElement('button');
    thumb.style.backgroundImage = `url('${photo.src}')`;
    thumb.style.backgroundColor = '#ddd';
    thumb.setAttribute('aria-label', photo.caption || `Photo ${idx+1}`);
    thumb.addEventListener('click', () => showPhoto(idx));
    albumPicker.appendChild(thumb);
  });
  photoModal.classList.add('open');
}

function showPhoto(index){
  currentPhotoIndex = index;
  const photo = currentAlbum.photos[index];
  albumPicker.hidden = true;
  photoMediaWrap.hidden = false;
  photoNav.hidden = false;
  photoMedia.src = photo.src;
  photoMedia.alt = photo.caption || currentAlbum.title;
  photoCaption.textContent = photo.caption || '';
}

document.getElementById('photo-prev').addEventListener('click', () => {
  showPhoto((currentPhotoIndex - 1 + currentAlbum.photos.length) % currentAlbum.photos.length);
});
document.getElementById('photo-next').addEventListener('click', () => {
  showPhoto((currentPhotoIndex + 1) % currentAlbum.photos.length);
});
document.getElementById('photo-close').addEventListener('click', () => {
  photoModal.classList.remove('open');
});
photoModal.addEventListener('click', (e) => {
  if (e.target === photoModal) photoModal.classList.remove('open');
});

const videoModal = document.getElementById('video-modal');
const videoMedia = document.getElementById('video-media');
const videoCaption = document.getElementById('video-caption');

function openVideo(index){
  const v = videosData[index];
  videoMedia.src = v.src;
  videoCaption.textContent = v.title;
  videoModal.classList.add('open');
  videoMedia.play().catch(() => {});
}
document.getElementById('video-close').addEventListener('click', () => {
  videoModal.classList.remove('open');
  videoMedia.pause();
});
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal){
    videoModal.classList.remove('open');
    videoMedia.pause();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    photoModal.classList.remove('open');
    videoModal.classList.remove('open');
    videoMedia.pause();
  }
  if (photoModal.classList.contains('open') && !photoMediaWrap.hidden){
    if (e.key === 'ArrowLeft') document.getElementById('photo-prev').click();
    if (e.key === 'ArrowRight') document.getElementById('photo-next').click();
  }
});
function arrangeThumbnails() {
  const thumbnailsContainer = document.getElementById('thumbnailsContainer');
  thumbnailsContainer.innerHTML = ''; // 기존 콘텐츠 초기화

  const mainWidth = window.innerWidth;
  const thumbnailWidth = mainWidth > 768 ? mainWidth / 4 : mainWidth / 2; // 트위치 썸네일 비율

  const uploaderData = [
    // 예시 데이터
    {
      profileImage: 'uploader1_profile.jpg',
      uploaderID: "Uploader 1's ID",
      thumbnails: [
        { thumbnailSrc: 'uploader1_thumbnail1.jpg', thumbnailTitle: 'Uploader 1 Thumbnail 1' },
        { thumbnailSrc: 'uploader1_thumbnail2.jpg', thumbnailTitle: 'Uploader 1 Thumbnail 2' }
      ]
    },
    // 추가적인 업로더 정보
  ];

  uploaderData.forEach(uploader => {
    const uploaderDiv = document.createElement('div');
    uploaderDiv.classList.add('uploader');

    const profileImg = document.createElement('img');
    profileImg.src = uploader.profileImage;
    profileImg.alt = `${uploader.uploaderID}'s Profile`;
    profileImg.classList.add('profile-picture');

    const uploaderID = document.createElement('h2');
    uploaderID.textContent = uploader.uploaderID;

    const thumbnailsWrapper = document.createElement('div');
    thumbnailsWrapper.classList.add('thumbnails-wrapper');

    const thumbnailRow = document.createElement('div');
    thumbnailRow.classList.add('thumbnail-row');

    uploader.thumbnails.forEach(thumbnail => {
      const thumbnailBox = document.createElement('div');
      thumbnailBox.classList.add('thumbnail-box');

      const profileThumbnail = new Image();
      profileThumbnail.src = thumbnail.thumbnailSrc;
      profileThumbnail.alt = `${uploader.uploaderID}'s Video Thumbnail`;
      profileThumbnail.classList.add('thumbnail-image');

      profileThumbnail.onload = function() {
        const aspectRatio = this.width / this.height;
        const calculatedHeight = thumbnailWidth / aspectRatio;

        this.style.width = `${thumbnailWidth}px`;
        this.style.height = `${calculatedHeight}px`;
      };

      const thumbnailTitle = document.createElement('h3');
      thumbnailTitle.textContent = thumbnail.thumbnailTitle;
      thumbnailTitle.classList.add('thumbnail-title');

      thumbnailBox.appendChild(profileThumbnail);
      thumbnailBox.appendChild(thumbnailTitle);
      thumbnailRow.appendChild(thumbnailBox);
    });

    thumbnailsWrapper.appendChild(thumbnailRow);
    uploaderDiv.appendChild(profileImg);
    uploaderDiv.appendChild(uploaderID);
    uploaderDiv.appendChild(thumbnailsWrapper);
    thumbnailsContainer.appendChild(uploaderDiv);
  });
}

const menuButton = document.getElementById('menuButton');
const menuButton2 = document.getElementById('menuButton2');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('open');
  menuButton.classList.toggle('hidden');
  menuButton2.classList.toggle('show');
  if (menuButton2.classList.contains('hidden')) {
    menuButton2.disabled = true; // 버튼 비활성화
  };
  if (menuButton2.classList.contains('show')) {
      menuButton2.disabled = false; // 버튼 다시 활성화
    }; 
});

menuButton2.addEventListener('click', function() {
  menu.classList.toggle('close');
  menuButton2.classList.toggle('hidden');
  menuButton.classList.toggle('show');
  if (menuButton.classList.contains('hidden')) {
    menuButton.disabled = true; // 버튼 비활성화
  };
    if (menuButton.classList.contains('show')) {
      menuButton.disabled = false; // 버튼 다시 활성화
    };   
});

const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', function() {
  // 업로드 버튼이 클릭되었을 때 실행할 동작을 여기에 작성합니다.
  window.location.href = 'upload.html'; // 업로드 페이지로 이동
});

arrangeThumbnails(); // 썸네일 배치 함수 호출

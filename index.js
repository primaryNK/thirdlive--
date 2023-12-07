// index.js

function arrangeThumbnails() {
  const thumbnailsContainer = document.getElementById('thumbnailsContainer');
  thumbnailsContainer.innerHTML = ''; // 기존 콘텐츠 초기화

  const mainWidth = window.innerWidth;
  const thumbnailWidth = mainWidth > 768 ? mainWidth / 2 : mainWidth;

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

    uploader.thumbnails.forEach(thumbnail => {
      const thumbnailBox = document.createElement('div');
      thumbnailBox.classList.add('thumbnail-box');

      const profileThumbnail = new Image();
      profileThumbnail.src = thumbnail.thumbnailSrc;
      profileThumbnail.alt = `${uploader.uploaderID}'s Video Thumbnail`;
      profileThumbnail.classList.add('thumbnail-image');

      profileThumbnail.onload = function() {
        const aspectRatio = this.width / this.height;

        if (this.width > this.height) {
          this.style.width = '100%';
          this.style.height = 'auto';
        } else {
          this.style.width = 'auto';
          this.style.height = '100%';
        }
      };

      const thumbnailTitle = document.createElement('h3');
      thumbnailTitle.textContent = thumbnail.thumbnailTitle;
      thumbnailTitle.classList.add('thumbnail-title');

      thumbnailBox.appendChild(profileThumbnail);
      thumbnailBox.appendChild(thumbnailTitle);
      thumbnailsWrapper.appendChild(thumbnailBox);
    });

    uploaderDiv.appendChild(profileImg);
    uploaderDiv.appendChild(uploaderID);
    uploaderDiv.appendChild(thumbnailsWrapper);
    thumbnailsContainer.appendChild(uploaderDiv);
  });
}

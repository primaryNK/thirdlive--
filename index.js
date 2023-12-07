document.getElementById('uploadButton').addEventListener('click', function() {
  window.location.href = 'upload.html'; // 영상 업로드 페이지로 이동
});

// 화면 로드 시, 썸네일 및 제목 동적 배치
window.onload = function() {
  arrangeThumbnails();
};

// 화면 크기 조절 시, 썸네일 및 제목 동적 배치
window.onresize = function() {
  arrangeThumbnails();
};

// 썸네일과 제목 동적 배치 함수
function arrangeThumbnails() {
  const thumbnailsContainer = document.getElementById('thumbnailsContainer');
  thumbnailsContainer.innerHTML = ''; // 기존 콘텐츠 초기화

  const mainWidth = window.innerWidth;
  const thumbnailWidth = mainWidth > 768 ? mainWidth / 2 : mainWidth;

  const numberOfThumbnails = 5; // 썸네일 개수

  for (let i = 0; i < numberOfThumbnails; i++) {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('thumbnail');
    thumbnailDiv.style.width = `${thumbnailWidth}px`;

    // 실제 썸네일 이미지는 여기에 추가하거나 생성할 수 있습니다.
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = 'example.jpg'; // 썸네일 이미지 경로

    // 썸네일 이미지 추가
    thumbnailDiv.appendChild(thumbnailImage);

    // 썸네일 제목 추가 (입력 필드 등)
    const thumbnailTitle = document.createElement('input');
    thumbnailTitle.setAttribute('type', 'text');
    thumbnailTitle.setAttribute('placeholder', 'Enter Thumbnail Title');

    // 썸네일 제목 추가
    thumbnailDiv.appendChild(thumbnailTitle);

    // 썸네일 컨테이너에 추가
    thumbnailsContainer.appendChild(thumbnailDiv);
  }
}


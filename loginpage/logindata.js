// 가상 데이터베이스
let users = [
  { id: 1, username: 'user1', password: 'password1', videos: [1, 2] },
  { id: 2, username: 'user2', password: 'password2', videos: [3] },
];

let videos = [
  { id: 1, title: 'Video Title 1', thumbnail: 'thumbnail1.jpg', url: 'video1.mp4', userId: 1 },
  { id: 2, title: 'Video Title 2', thumbnail: 'thumbnail2.jpg', url: 'video2.mp4', userId: 1 },
  { id: 3, title: 'Video Title 3', thumbnail: 'thumbnail3.jpg', url: 'video3.mp4', userId: 2 },
];

// 사용자 로그인
function loginUser(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

// 새로운 사용자 생성
function createUser(username, password) {
  const newUser = { id: users.length + 1, username, password, videos: [] };
  users.push(newUser);
  return newUser;
}

// 아이디에 따른 영상 정렬
function getVideosByUserId(userId) {
  return videos.filter(video => video.userId === userId);
}

// 간단한 테스트
console.log(loginUser('user1', 'password1')); // 로그인
console.log(createUser('user3', 'password3')); // 사용자 생성
console.log(getVideosByUserId(1)); // 아이디에 따른 영상 가져오기

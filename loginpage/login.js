document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 여기서 서버로 로그인 정보를 보내고, 데이터베이스에서 확인하는 작업을 시뮬레이션합니다.
  // 실제로는 서버 요청과 데이터베이스 검증이 필요합니다.
  // 여기에서는 간단히 username이 'user'이고 password가 'password'일 때만 로그인이 성공한다고 가정합니다.
  if (username === 'user' && password === 'password') {
    window.location.href = 'dashboard.html'; // 로그인 성공 시 이동할 페이지
  } else {
    document.getElementById('errorMessage').style.display = 'block'; // 로그인 실패 시 에러 메시지 표시
  }
});

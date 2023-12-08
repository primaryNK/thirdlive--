document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // 여기서는 간단하게 새로운 회원을 만들고 성공했다는 메시지만 출력합니다.
  // 실제로는 데이터베이스에 새로운 회원 정보를 저장하고, 회원가입이 성공하면 로그인 페이지로 이동시켜야 합니다.
  console.log(`New user created - Username: ${newUsername}, Password: ${newPassword}`);
  alert('Account created successfully! Please login.'); // 회원가입 성공 메시지

  // 회원가입 성공 후 로그인 페이지로 이동
  window.location.href = 'login.html';
});

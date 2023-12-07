document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // 여기서는 간단하게 새로운 회원을 만들고 성공했다는 메시지만 출력합니다.
  // 실제로는 데이터베이스에 새로운 회원 정보를 저장해야 합니다.
  console.log(`New user created - Username: ${newUsername}, Password: ${newPassword}`);
  alert('Account created successfully!');
});

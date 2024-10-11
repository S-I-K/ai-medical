// 비밀번호 표시/숨기기 토글 기능
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'hidden'; // 아이콘 변경
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'visible'; // 아이콘 변경
    }
}
// 로그인 처리 함수
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // 예시로 이메일과 비밀번호를 하드코딩된 값과 비교
    if (email !== "test@example.com" || password !== "password123") {
        errorMessage.style.opacity = 1;
    } else {
        errorMessage.style.opacity = 0;
        alert('로그인 성공!');
        // 실제로는 서버로 요청을 보내는 코드가 필요합니다.
    }
}
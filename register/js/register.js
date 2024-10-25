// 이메일과 비밀번호 입력 요소 및 버튼 가져오기
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordSection = document.getElementById('password-section');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const nextBtn = document.getElementById('next-btn');
const createAccountBtn = document.getElementById('create-account-btn');
const emailSection = document.getElementById('email-section');
const editEmailBtn = document.getElementById('edit-email-btn');
const togglePasswordBtn = document.getElementById('toggle-password');
const checkboxSection = document.getElementById('checkbox-section');

// 환영 메시지 부분 가져오기
const userNameSpan = document.getElementsByClassName('user-name')[0]; // 사용자 이름을 담을 span
const welcomeMessageSpan = document.getElementsByClassName('welcome-message')[0]; // "님 환영합니다"를 담을 span

// "다음" 버튼 클릭 시
nextBtn.addEventListener('click', function() {
    const email = emailInput.value;
    if (email === '') {
        emailError.textContent = '* 필수입력 항목입니다.';
    } else {
        // 이메일 입력 후 페이지 내 변동
        emailError.textContent = '';
        emailInput.disabled = true; // 이메일 입력칸 비활성화
        emailInput.style.backgroundColor = '#e0e0e0'; // 회색으로 채움
        editEmailBtn.style.display = 'inline'; // 수정 버튼 표시
        passwordSection.style.display = 'block'; // 비밀번호 입력칸 표시
        checkboxSection.style.display = 'block'; // 체크박스 표시
        nextBtn.style.display = 'none'; // 다음 버튼 숨김
        createAccountBtn.style.display = 'inline'; // 계정 생성 버튼 표시

        // 이메일에서 @ 앞부분만 추출하여 환영 메시지 표시
        const username = email.split('@')[0];
        userNameSpan.textContent = username; // 사용자 이름만 따로 span에 설정
        welcomeMessageSpan.textContent = '님 환영합니다'; // "님 환영합니다" 문구 따로 span에 설정
    }
});

// 이메일 수정 버튼 클릭 시
editEmailBtn.addEventListener('click', function() {
    if (emailInput.disabled) {
        // 이메일 수정 가능하게 전환
        emailInput.disabled = false;
        emailInput.style.backgroundColor = '#ffffff'; // 원래 색상으로
        emailInput.focus();
        editEmailBtn.textContent = '완료'; // 수정 중일 때 버튼 텍스트 변경
    } else {
        // 수정 완료 후 비활성화 및 다시 회색 처리
        emailInput.disabled = true;
        emailInput.style.backgroundColor = '#e0e0e0'; // 다시 회색으로 채움
        editEmailBtn.textContent = '수정';

        // 수정된 이메일로 환영 메시지 업데이트
        const updatedUsername = emailInput.value.split('@')[0];
        userNameSpan.textContent = updatedUsername; // 수정된 이름만 업데이트
    }
});

// 비밀번호 보이기/숨기기 버튼 클릭 시
togglePasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = '숨기기';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = '보이기';
    }
});

// 계정 생성 버튼 클릭 시
createAccountBtn.addEventListener('click', function() {
    const password = passwordInput.value;
    
    // 비밀번호 유효성 검사
    if (password === '') {
        passwordError.textContent = '* 필수입력 항목입니다.';
    } else if (password.length < 8) {
        passwordError.textContent = '비밀번호는 최소 8자 이상이어야 합니다.';
    } else {
        passwordError.textContent = ''; // 오류 메시지 초기화
        alert('계정이 생성되었습니다!');
        // 추가적인 계정 생성 로직 처리
    }
});

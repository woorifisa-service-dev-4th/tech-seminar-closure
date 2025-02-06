function createAccount(password) {
    let privatePassword = password; // 비공개 변수

    return {
        checkPassword: function (input) {
            return privatePassword === input; // 비밀번호 확인
        },
        updatePassword: function (oldPassword, newPassword) {
            if (privatePassword === oldPassword) {
                privatePassword = newPassword; // 비밀번호 업데이트
                return true;
            }
            return false;
        }
    };
}

const account = createAccount("secure123");

console.log(account.checkPassword("wrongPass")); // false
console.log(account.checkPassword("secure123")); // true
account.updatePassword("secure123", "newPass123");
console.log(account.checkPassword("newPass123")); // true

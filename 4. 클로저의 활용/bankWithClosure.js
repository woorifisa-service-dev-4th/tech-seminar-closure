function createBankAccount(initialBalance) {
    // 비공개 데이터
    let balance = initialBalance; // 잔액

    return {
        // 입금
        deposit(amount) {
            balance += amount;
            return balance;
        },

        // 출금
        withdraw(amount) {
            if (balance >= amount) {
                balance -= amount;
                return amount;
            } else { throw new Error('Insufficient balance'); }
        },

        // 잔액 조회
        getBalance() { return balance; }
    };
}

// 계좌 생성
const myAccount = createBankAccount(1000);

myAccount.deposit(1000);      // 2000
myAccount.withdraw(500);      // 1500
console.log(myAccount.getBalance());  // 1500

// balance 변수는 createBankAccount 함수 스코프 내부에 존재하기 때문에 외부에서 접근 불가
myAccount.balance = 1000000;
console.log(myAccount.getBalance());  // 1500


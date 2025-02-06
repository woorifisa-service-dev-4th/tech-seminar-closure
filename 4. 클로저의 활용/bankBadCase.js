let globalBalance = 1000; // 외부에 상태 노출

function createBankAccountWithoutClosure() {
    return {
        // 입금
        deposit(amount) {
            globalBalance += amount; // 외부 변수에 직접 접근
            return globalBalance;
        },
        // 출금
        withdraw(amount) {
            if (globalBalance >= amount) {
                globalBalance -= amount; // 외부 변수 수정
                return amount;
            } else { throw new Error('Insufficient balance'); }
        },
        // 잔액 조회
        getBalance() {
            return globalBalance; // 외부 변수를 그대로 반환
        }
    };
}

const myAccount = createBankAccountWithoutClosure();
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // 1500
console.log(myAccount.getBalance()); // 1500

// 외부 변수(globalBalance)에 누구나 접근 가능
globalBalance = 1000000;
console.log(myAccount.getBalance()); // 1000000 (비정상적인 결과)


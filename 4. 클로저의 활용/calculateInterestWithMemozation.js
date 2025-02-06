function createBankAccount(initialBalance, interestRate) {
    let balance = initialBalance;       // 비공개 데이터
    let lastInterestDate = null;        // 마지막으로 이자가 계산된 날짜
    let cachedInterest = 0;             // 메모제이션된 이자 값

    return {
        // 이자 계산 (메모제이션 활용)
        calculateInterest(currentDate) {
            // 클로저를 이용하여 날짜와 계산된 이자를 기억
            if (lastInterestDate === currentDate) {
                return cachedInterest; // 메모제이션된 값을 반환
            }

            // 날짜가 변경되면 새로 계산
            const daysSinceLastInterest = lastInterestDate
                ? (new Date(currentDate) - new Date(lastInterestDate)) / (1000 * 60 * 60 * 24)
                : 0;

            const newInterest = daysSinceLastInterest > 0
                ? balance * (interestRate / 100) * daysSinceLastInterest : 0;

            // 새로 계산된 값을 저장
            cachedInterest = newInterest;   // 클로저 덕분에 이 값은 외부에서 접근할 수 없지만 기억됨
            lastInterestDate = currentDate; // 마지막 날짜 갱신
            return newInterest;
        }
    };
}

// 이자 계산 호출
console.log(myAccount.calculateInterest("2025-01-25")); // 새로 계산된 이자
console.log(myAccount.calculateInterest("2025-01-25")); // 메모제이션된 이자 반환
console.log(myAccount.calculateInterest("2025-01-26")); // 새로 계산된 이자

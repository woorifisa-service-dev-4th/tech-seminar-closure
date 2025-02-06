function createCounter() {
    let count = 0; // 외부 변수 (상태)
    return function() {
        count++; // 외부 변수에 접근하여 상태 변경
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

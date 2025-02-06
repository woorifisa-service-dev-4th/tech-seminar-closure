# UseState사용시 클로저가 필요한 이유

### 클로저 사용 전
```java
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount((count+ 1); // 첫 번째 업데이트
    setCount(count+ 1); // 두 번째 업데이트
  };
```

### 함수형 업데이트(클로저 형성) 사용 후

```java
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount((prevCount) => prevCount + 1); // 첫 번째 업데이트
    setCount((prevCount) => prevCount + 1); // 두 번째 업데이트
  };
```
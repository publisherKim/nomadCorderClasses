# let
```
  재할당 가능
```

# const 
```
  상수
    - 안정적
    - 재할당 불가
```

# Data Types onJs
```
  Boolean, string, number, function, object, array, regexp
```

# array
```javascript
  const dayOfWeeks = [
    "Mon", 
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ];

  console.log(dayOfWeeks[4], dayOfWeeks);
```

# object
```javascript
  const nicoInfo = {
    name: 'Hong',
    age: 33,
    gender: 'Male',
    isHandsome: false
  };

  console.log(nicoInfo.gender);
  nicoInfo.gender = "Female";
  console.log(nicoInfo.gender);
```

## 총평
```
  vanila 자바스크립트를 통해 의식적으로 굉장히 빠르게 모듈을 만들어 내는 모습은 좋았으나,
  깊이는 조금 떨어지는 약팔이 느낌이 들었다.
  
  입문자 대상으로는 자바스크립트와 돔 자료구조를 어떻게 활용하여 구현하는지는 배울수 있으나,
  production 레벨이나 큰 뮤모의 서비스에서는 통할지 전반적으로 의구심이 들긴하나,
  초심자라면 흥미롭게 배울수 있는 무료 강좌라고 생각한다.
```
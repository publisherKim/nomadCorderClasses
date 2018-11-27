# 타입스크립트
```
  typscript is javascript: 
    - superset
    - compile language
  
  strong point 
    - strict rule
    - bug minimize
    - use simple
    - easy reading
    - big project
    - cooperation
```

## block change make it
```
  블록 체인을 만들면서 타입스크립트 배우기
    - typescript sample
    - after: block chain mak it
  yarn init
    : package.json
```

## setting Typescript
```
  yarn global add typescript

  tsconfig.json make it
  compileOptions: 컴파일 할때의 옵션들
  include: 컴파일 과정에서 포함할 파일의 배열

  tsc (컴파일 명령어)

  tsc compile after node index.js excute:
    "scripts": {
      "start": "node index.js",
      "prestart": "tsc"
    }

  tsonfig 파일의 작성들은 인터넷을 참고해야 한다.
```

## first steps with typescript
```typescript
  /*
    규칙에 맞지 않을 경우 타입스크립트는 경고 메세지를 알려주고
    컴파일 명령을 수행하지 않는다.

    사람이 실수하는걸 미연에 방지 할 수 있다.
  */
  // correct
  const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };

  sayHi(name, age, gender);

  // incorret
  const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };

  sayHi(name, age);

  // optional parameters
  const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };

  sayHi(name, age);
```

## Types in Typescript
```typescript
  /*
    vscode plugin tsLint install
    type을 지정함으로 이언어는 보다 어떤 것을 하는지 정확하게 알수 있다.
  */
  // parmater: type
  const sayHi = (name: string, age: number, gender: string) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };

  sayHi('Nicolas', 444, 'male');

  // window10은 아직 적용 안됨
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\""
  },
  "devDependencies": {
    "tsc-watch": "^1.0.30"
  }
  // tsconfig
  {
  "compileOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"  // folder path setting
  },
  "include": ["src/**/*"],  // 하위폴더 다 적용
  "exclude": ["node_modules"]
}
```

## Interfaces on Typescript
```typescript
  /*
    interface:
      타입을 간결하게 정리할수 있다.
  */
  interface Human {
    name: string,
    age: number,
    gender: string
  }

  const person = {
    name: 'nicolas',
    gender: 'male',
    age: 22
  };


  const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
  };
```

## Classes on Typesript part One
```typescript
  /*
    인터페이스를 자바스크립트에 넣기 위해서 클래스를 활용함
    public: default public
    private: 밖에서 접근할수 없는 변수
    protected: 파생클레스에서 접근가능, 외부접근 불가
    readonly: 읽기 전용
    static: 정적(공개) 변수(외부 접근 가능)
  */
```

## Blockchain Creating Block
```
  simple blockchain create with typescript
  Block chain spec
    - index
    - hash
    - previousHash
    - timestamp

  class를 통해 인스턴스를 생성에 배열에 할당
```

## creatingBlok part Two
```typescript
  /*
    yarn add crypto-js
    를 활용하여 해시 만들기
  */
  /*
    simple function create
      - getBlockchain
      - getLatestBlock
      - getNewTimeStamp
  */
```

## creating a Block part three
```
  class를 활용해서 
  어떻게 함수를 통해 새로운 인스턴스를 생성하는지 알수 있다.
```

## validating Block Structure
```
  블럭의 구조가 올바른지 유효성 검사하기
    - stati previousBlock func create(type check)
    - isBlockValid 이전 블록과 현재 블록의 조건 검사하기

  addBlock func
    - valid check after 블록 생성
  
  *** validateStructure 조건 검사할 필요 있음 ***
```
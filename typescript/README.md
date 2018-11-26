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
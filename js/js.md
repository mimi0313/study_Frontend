# Javascript
- 문법
  - javascript 언어 문법
  - 문법의 내용
    - 데이터 / 변수 / 연산자
    - 명령문
    - 함수
    - 배열 / 객체 / Class
    - 추가 문법

- 활용
  - HTML DOM
  - HTML / CSS / JS 종합 활용
  - Open API : 객체

## JS basic
- version
  - ES5
  - ES6

- 작성방식
  - External : js 파일 생성 (기본적으로 가장 좋은 방법)
    - 위치 : head영역에 넣어주는 것을 추천.   
            (실행 시점을 미루기위해 'defer 태그' 사용 / 외부파일에서만 사용가능)
  - internal  (부득이한 상황에따라 사용하게 되는 방법)
    - THML 파일에 js 코드를 작성
    - js 코드 블럭을 따로 구분해서 작성 (작성하는 위치가 중요함)
      - 위치 : 적용시킬 html태그 밑에 작성해줘야 적용됨.
                html와 구분되게 하단에 작성하는 것을 추천 (이유 아래에)
  - Inline
    - HTML Tag에 js 코드를 작성

- 작성 위치
  - js만 작성하는 파일은 위치가 상관없고, html와 혼합해서 사용할때 위치가 중요.
  - js 실행되는 시점에 html이 로딩(렌더링) 되어 있어야 함
  - js 실행 방식 : 최초 한번만 실행되기 때문에 js가 실행되는 시점에 
                  적용받을 html이 있으면 적용되고, 없으면 적용이 안됨.
  

## js 문법

###  데이터 / 변수 / 연산자
- 데이터 
  - 숫자
  - 문자
```
숫자 : 0,1,2,3,4,5 ...
문자 : 가,나,다,라... a,b,c,d...
```
  - 데이터 타입(종류)
    - 숫자 : 정수, 실수 ...
    - 문자 
      - 코드상에서 문자는 따옴표로 묶임 
      - 낱개 글자, 순서대로 나열되는 묶음 글자...
    - 불리언 (boolean, 논리값)
      - ture/false (참/거짓)
```
1 + 1 = 2

'a' + 1 = a1

'1' + 1 = 11

```

## 자바스트립트(js 또는 es 라고 부름)는 데이터 타입을 엄격하게 구분하지 않는다.
  (EX. 아래 자바와 비교)

- 변수 (variable)
  - 데이터를 저장하는 공간
  - 변수를 선언/정의를 한 이후에 사용
  - 변수 선언 예약어(키워드) 사용
    - var(es5) : 타입 구분 안함, 데이터 변경 자유로움
    - let(es6) : 타입 구분 안함, 데이터 변경 자유로움
    - const(es6) : 타입 구분 안함, 데이터 변경 불가능(상수변수 사용)
                (대문자로 표기해서 상수 변수임을 인지하기 쉽게 하기도 함).
    
```
JAVA
정수 변수 선언 : int number1;
실수 변수 선언 : float number2;
문자 변수 선언 : char text;

ES5 | ES6 (js=es)
정수 변수 선언 : var number1; | let number1; | const number1; 
실수 변수 선언 : var number2; | let number1; | const number2; 
문자 변수 선언 : var text;    | let text;    | const text; 

```

- 연산자
  - 산술연산자
    - +, *, -, /
    - % : 나머지 연산

  - 할당(대입)연산자
    - = : 값을 변수에 저장
    - 값이 길거나 복잡할때 주로 사용하는데, 지정한 변수를 반복적으로 코딩할때 편하게 사용.
      
  ```
  const PI = 3.141592;
  ```
  
  - 산술 + 대입연산 (재귀)
  ```
  let a = 10;
  a = a+5; | 를 아래처럼 표기하기도 한다.
  a += 5 
  ```
    ** 산술 + 대입연산이 반복 실행되면 일정 값을 지속적으로 연산
  
  - 카운터
  ```
  a += 1 => a++
  a -= 1 => a--
  ```

  - 비교 연산자
    - ==, === : 같다
    - !=, !== : 다르다
    - 비교 연산자를 사용한 식의 결과는 참 또는 거짓

  - 논리 연산자
    - 논리값(참 / 거짓)을 연산
    - 논리식 : 논리값이 결과로 나오는 식
    - AND : && - 연산하는 여러개의 논리값들이 모두 조건에 맞을때 참
    - OR : || - 연산하는 여러개의 논리값들이 모두 조건에 맞지 않을때 거짓
    - NOT : ! -  연산 결과의 반대값 표시 (반대로 부정해줌)


### 명령문
- 프로그래밍 언어의 실행 흐름에 관여
- 조건문/분기문
  - if : 조건/상황에 따라 각각 적용되는 방식이 다름
    - if
    - else if
    - else
```
if(결과값에 bool데이터인 식){
  결과참이 참일때 실행하는 코드
}
```
```
if(bool1){
  bool1이 참일때 실행하는 코드
} 
else if(bool2){
  bool2이 참일때 실행하는 코드
}
else {
  bool1, bool2이 거짓일때 실행하는 코드
}
```
```
if(bool1){
  bool1이 참일때 실행하는 코드
} 
else if(bool2){
  bool2이 참일때 실행하는 코드
```
```
if(bool1){
  bool1이 참일때 실행하는 코드
}
else {
  bool1이 거짓일때 실행하는 코드
}
```

```
if(a>10){}
if(true){} : 무조건 참이기때문에 무조건 실행
if(a+1){} : 값이 숫자 - 0 :false / 정수 : ture
if(1){} : 정수이기때문에 ture
```

  - switch
    - 식의 결과값에 따라 실행 분기
```
let a=0;
switch(a+1){
  case 1;
        실행코드
        break;
  case 2;
        실행코드
        break;
}
```


- 반복문
  - for : 결정된 반복횟수만큼 반복 실행 구문
    - 구문1, 구문2, 구문3이 유기적으로 연결되어 반복횟수를 결정
```
for(초기값구문1; 비교식구문2; 수식구문3){
  반복 실행 코드
}

1) 초기값구문1이 최초 한번 실행
2) 비교식구문2가 실행 -> 참(일때는 반복문 실행 진행) / 거짓(일때는 실행 종료) 
3) 참일때 실행코드 실행
4) 수식구문3 실행
5) 2)번부터 다시 반복 실행 반복
```
```
// i=i+1 -> i+=1 -> i++

for(let i=0; i<3; i++){
  코드 블럭
}

1) i=0
2) i<3 -> ture
3) 코드 블럭 실행
4) i++ -> i=1
5) 2번으로 돌아가서 실행
6) 반복하다가 i<3 -> false 멈춤
```
```
for(let i=0; i<5; i++){} : 5번 반복
for(let i=1; i<=5; i++){} : 5번 반복
for(let i=0; i<10; i+=2){} : 5번 반복
```


- while
  - 조건식의 결과값이 참일때 반복 실행
```
while(조건식){
  실행코드
}

조건식의 결과값이 참일때 계속 반복 실행
```

### 함수
- 특정작업을 실행할수 있도록 만들어진 코드 블럭
- 함수 하나가 독립적으로 실행될 수 있음
- 코드를 그룹화
- 함수를 실행하기 위해서 해당 함수를 호출
- 매개변수 : 외부로부터 값을 받아서 실행할 때 사용하는 변수
- Return(반환) : 


### 배열 / 객체 / Class
- 데이터 세트 형태

#### 배열
- 같은 타입의 데이터들을 나열해서 패키지화 한 것
```
let array = [1,2,3,4,5]
let arr = [1,2,3,4,'a']
```

#### 객체
- 어떤 대상을 데이터화 시킨 집합 데이터

객체 테이터
- Property : 객체 데이터화 시킨 것, 객체가 가지고 있는 성질/형태
- method : 객체에 포함된 함수, 객체에 기능 정의

#### class
- 객체 데이터를 만들 수 있게 하는 설계도
 
### 추가 문법

#### 변수 Scope

- Scope
  - Global Scope
    - 변수는 모든 범위에서 접근 가능
  - Function Scope (주로 명령문)
    - 해당 함수 번위에서만 접근 가능
  - Block Scope
    - 해당 블럭 범위에서만 접근 가능
```
<script>
// gbobal scope
let a = 1;
var _a = 1;

function myFuntion(){
  //function scope
  let b = 2;
  var _b = 2;

  for(statment){
    //block scope (1)
    let c = 4;
    var _c = 3;
  }
}

if(condition){
    //block scope (2)
    let d = 4;
    var _d = 4;
}

</script>
```

## JS 활용

- 데이터 입출력
- UI 효과


### HTML DOM
- DOM (Document Object Model) : HTML Element등을 객체화 시킨 모델
- HTML DOM을 사용하여 HTML Element를 제어

### DOM 접근 API
- DOM API : DOM 객체 매소드
```
html4
document.getElementById('id') : id로 DOM 접근
document.getElementsByClassName('class') : class로 DOM 접근
document.getElementsByTagName('tagname') : tag로 DOM 접근

html5
document.querySelector('#id')
document.querySelector('.class')
document.querySelector('tag')

document.querySelectorAll('.class')
document.querySelectorAll('tag')
```

### HTML / CSS / JS 종합 활용
### Open API : 객체


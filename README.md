# Front End Develop Class

- md 파일 문법

```
# ~ ###### : 제목

- : 목록

``` ~ ``` : 코드 블럭 (backtick)

```

## 클라이언트 서버 모델

- 소프트웨어, IT서비스 개발시 복잡한 네트워크 하드웨어를 배제한 
  공급자, 사용자 양쪽 부분만 고려하는 모델
- 클라이언트의 요청(request)과 서버의 응답(response)의 사이클을 통해
  서비스와 데이터 처리 등의 기능이 실행 됨

### Front End Develop VS Back End Develop

- Front End, Back End

   - Front : 사용자를 기준으로 사용자와 맞닿을수 있는 화면 영역
      - FE Dev : 사용자가 볼 수 있는 화면 개발, 그래서 디자인이랑 연결되어있음
        - Web FE Dev : 브라우저에서 처리되고 렌더링되는 언어를 사용해서 개발
        - 언어 : HTML, CSS, Javascript

   - Back : 사용자가 보지 못하고, 서버상에서 데이터처리, 기능 동작 등이 이루어지는 영역 
      - BE Dev : 사용자가 보지 못하는 여역에서 데이터 처리
        - 서버에서 처리되는 언어를 사용해서 개발
        - Java, PHP, Python, nodejs


## naming 표기법
- naming하는 경우
   - HTML / CSS : id, class
   - js : 변수, 함수
   - 파일, 폴더

- 표기법의 의미
   - 2단어 이상의 조합으로 네이밍할때 단어와 단어 사이를 구분해야함. 

- 표기법의 종류 (- 사용 용도는 선생님의 실무노하우 / 네이밍으로 파일을 구분하기위해)
   - section_content : snake case - 파일, 폴더
   - section-content : kebab case - id, class 
                        / 외국업체들 , css에서 Sass에서 사용하기때문에 맞추는 것이 좋음
   - sectionContent : camel case - js
   - SectionContent : pascal case - js의 class




# HTML
- Contents

  - Text
  - Media
    - Image, Vidio, Audio

- Structure
  - Semantic : 의미있는 구조
  - Layout

## HTML basic
- HTML : Hyper Text Markup Language : 웹 페이지를 표시하는 언어

  - Hyper Text : 하이퍼링크로 연결되어 있는 문서 => 웹 페이지(콘텐츠,구조)
  - Markup : 표시
  - Language : 언어

- HTML 문법
  - 명칭 : Tag, Element
  - 구성 : 시작태그 ~ 종료태그
  - 종료태그가 없는 태그 : 빈태그 (Empty Element)

```
<tag> contents </tag> : Element

 <tag ...> : Empty Element
```

- HTML 속성 (attrbute)
  - HTML Element 표시할때 필요한 추가정보 입력
  - name="value"

```
<a href="https://www.naver.com">네이버</a>
<img src="photo.jpg">
```

## HTML Basic Structure
```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

### DOCTYPE
- HTML 문서타입
  - HTML 버젼
  - HTML5 표준

### Head - 웹사이트 기본 정보
- meta : 웹사이트 관련 정보 (검색엔진 노출관련)
- title : 웹사이트 제목 (웹 페이지 전체 제목 - 탭에 보이는 내용)

### Body - 웹사이트 콘텐츠 (실제 화면에 보이는 내용)
- 웹사이트에 Contents, Structure... 표시하는 모든 태그

## HTML Contents

### Text

#### heading (제목 - 콘테츠의 제목)

- h(heading 앞글자) : 제목 태그
- 1~6 단계로 표시됨

#### paragraph (단락)
- p(paragraph 앞글자) : 단락 태그
  - 강제줄바꿈, 강제공백은 인식되지 않음 (코딩 자체에서 보여지는 스타일은 의미없고, 단락의 변화를 주고싶은 지점마다 해당 태그를 입력해주야함)
  - line break : br (강제 줄바꿈 태그)
  - space : &nbsp; (강제 공백 엔터티 / Entity)
- hr(horizontal rule) : 수평선 긋기
  - 단락을 선의 형태로 구분

#### list (목록)
- ul(Unordered List 앞글자) : 순서있는 목록
- ol(Ordered List 앞글자) : 순서있는 목록
- li(List Item) : 목록 항목
- 순서 있는지, 없는지에 따라 ol/ul 태그로 지정해주고 -> 
  리스트의 항목은 <li>내용으로 각각 표기 

** 포함관계(Nested structure)
- 태그안에 다른 태그들이 포함되는 것을 의미
- 포함하는 요소
  - 조상요소(Ancestor)
  - 부모요소(Parent)
- 포함되는 요소
  - 자식요소(Child)
  - 자손요소(Descendant)
- 옆에 나란히 있는 요소
  - 형제요소 (sibling)
```
(1)<html>
(2)  <body>
(3)    <h1>내용 제목</h1>
(4)    <p>
(5)      단락내용 <br>
      </p>
    </body>
  </html>
```
(1) 조상 요소 | 기준 요소
(2) 조상 요소 | 자식 요소
(3) 관련없음  | 자손 요소
(4) 부모 요소 | 자손 요소
(5) 기준 요소 | 자손 요소

- Description list (설명 목록)
  - dl(description list)
  - dt()
  - dd


#### table (표)
- table
- thead : 표상단, 헤드 그룹 
- tbody : 컨텐츠, 데이터 그룹
- tr(table row) : 행
- th(table header) : 제목 (각 항목의 타이틀)
- td(table data) : 칸(열)

#### hyper link (하이퍼 링크)
- a(anchor)
- 기본 속성 : href(hypertext reference) : 연결한 웹 페이지 주소

- 링크 이동 위치
  - 외부 링크 : href="이동할 주소"
               href="" target="_blank" 새탭으로 열어준다
  - 내부 링크 : 북마크 (동일한 페이지 내에서 이동)
              id="name" 으로 위치를 id값으로 지정해주고
              href="#name" #을 사용해서 내부 링크 위치 지정
              href="#" #만 입력하면 페이지에서 가장 상단으로 이동


### Media

#### image (이미지)
- img(image) : 태그 사용
  - 빈 요소 : 시작태그만 있는 태그
- src(source) : 이미지 정보(이미지의 위치주소)
- alt(alternate text) : 이미지 내용(이미지가 화면에 표시되지 않을때, 
                스크린 리더리가 이미지를 전달할때 읽어주는 내용
```
  <img src="이미지 정보(이미지의 위치주소).jpt" alt="22년 여름 설악산 사진" />
```

#### video (영상)
- video, source
- 속성
  - video 태그 (속서 on/off 형태. ="" 사용하지 않고 이름만 작성하면 작동) 
    - controls : 동영상 제어 버튼  
    - autoplay : 자동 재생
    - muted : 브라우저에따라 소리때문에 자동 재생을 제어하기도 함.  
              그래서 음속어를 같이 해주면 자동 재생 기능 활성화됨. 
    - loop : 반복 재생
  - source 태그  
    - src : 파일 위치의 경로와 이름.
    - type : 미디어 형식
  
- youtube 영상불러오기
  - youtube에서 제공하는 소스 사용
    - url 뒤에 ?자동재생=1&반복=1&플레이할영상코드를 입력해준다.
    - https://www.youtube.com/embed/EFavUiSnABg?autoplay=1&mute=1&loop=1&playlist=해당영상고유코드

## HTML Structure

### Semantic
- 화면의 구조(뼈대)를 나타내고 컨텐츠의 내용 구분을 위해 사용하는 태그
- 시맨틱한 태그를 사용하여야 검색엔진에서 검색이 가능함.

- header
  - logo, login ...
- nav(igation)
  - menu
- section
  - 본문영역
- article
  - 본문영역
- aside
  - 본문영역 (사이트 영역으로 광고 등 부수적인 컨텐츠에 활용되는 영역)
- footer
  - 연락처, 주소, 회사이름 ...

### Layout

- Block & Inline
  - Block 요소
    -
  - Inline 요소

## 경로지정
- 파일의 위치, 인터넷 주소(url)
- 상대 경로
  - 리소스 파일을 사용하는 HTML 파일 기준
  - html파일 위치에 따라 주소(url) 변경됨
  - root(/)폴더를 기준으로 주소 적용
```
폴더 뎁스에 따라 경로가 찾아가 파일을 찾음

- 보여줄 페이지'기준' 동일한 폴더가 아니면 빠져나가 ../ 해당 파일 지정 
  ../../images/logo.png

- /projet/images/logo.png

```
- 절대 경로
  - 이미지를 표시하는 html 페이지가 기준이 아니고, 해당 서비가 기준
  - 서버부터 주소(url)를 사용하기때문에 변동이 없음.
```
- www.image.com/projet/images/logo.png
```

## 강조태그, 기타태그
- 텍스트 특정 부분 강조
  - strong : 강한 강조
  - em(phasize) : 일반 강조
  - mark : html5버젼, block 강조

- 텍스트를 표시할 떄 부족한 태기를 보완하는 태그
  - i(talic)
  - b(old)


# CSS

- content styling
  - text styling
  - media styling


- layout(structure styling)
  - 가로배치 (flexbox)

## CSS Basic
- css : cascading style sheet

```
h1{color:blue;font-size:20px;}

h1{
    color:blue;
    font-size:20px;
}

```

## Selecrot(선택자)
- 선택자로 THML 요소를 선택
- HTML 요소 선택 방법
  - Simple Selection(요소 선택자)
    - Tag/Element 이름 사용
    - class 이름 사용
    - id 이름 사용

```
<a class="naver" href="http://naver.com">네이버</a>
<a id="daum" href="http://daum.net">다음</a>

/* a태그는 모두 빨간색 적용 */
a{
  color:red;
}

/* 네이버는 녹색 , 다음은 빨간색 적용 */
.naver{
  color:green;
}

#daum{
  color:red;
}

```

### id, class 이용의 특성
- id 
  - 같은(한) html페이지에서 고유(유일/ 한번만 사용 )해야 됨
  - html 요소에 여러 개의 id 이름을 복합적으로 사용 불가능
    (프로그램 언어의 변수에게 영향을 줄 수 있어 오류가 될 수있기때문)

- class (css명은 class로만 사용하는 것을 권장)
  - 같은(한) html페이지에서 여러번 반복 사용 가능함
  - html 요소에 여러 개의 class 이름을 복합적으로 사용 가능

```
/* id와 class의 사용 차이*/
<p class="paragraph">단락1</p>
<p class="paragraph">단락2</p> (O)
<p id="content">단락3</p>
<p id="content">단락4</p> (X 잘못됨)

/* 클래스명 예시 / 연결할때 _보다 -를 권장. 이유는 빌드툴 사용에서 인식이 안됨 */
<p class="gnb-list-item">회사소개</a>
```

### CSS 선택자 우선순위

- cascading 규칙
  - 동일한 대상에 여러 스타일이 전용될 때 제일 마지막에 적용된 스타일이 반영
  
- 선택자 우선순위 
  - 선택자 종류에 따라 css 적용 우선순위가 다르게 정의
  - cascading 규칙에 따르지 않고 CSS를 적용할 때 사용
  - inline : 1000
  - id : 100
  - class : 10
  - tag : 1

### 상속의 규칙
- 조상요소나 부모요소의 내용이 자식요소에게 상속 적용됨
  - HTML Element 중에 상속되지 않는 태그가 있음
  - CSS 속성중에 상속되지 않는 속성이 있음


### Text Styling

#### Color
```
h1{
  color:blue;
}
```

#### Text aligment
- 정렬 값 : left, center, right, justify(안쪽맞춤)
```
p{
  text-align:center;
}
```

- 단어 중간에 줄 바꿈
```
p{
  word-break:break-all;
}
```

#### Text-decoration
- 글에 라인 넣어주기.
```
h1 {
  text-decoration: underline;
}
h1 {
  text-decoration: line-through;
}
h1 {
  text-decoration: overline;
}

a {
  text-decoration:none;
}
```

#### Text Transformation
```

```
#### line-height
- 텍스트 높이를 포함하여 텍스트 위 아래 여백 전체높이
- 값 : 
  - px
  - 배수 : 폰트 크기를 기준으로 몇 배, 소수점을 포함한 숫자 가능
    (브라우져 확대/축소 시킬때 폰트 크기와 연결되어 같이 변화하기 때문에 사용성이 좋아져 배수 사용을 많이 사용하는 편)



#### text-indent
- 단락 처음 들여쓰기
```
p{
  text-indent:16px;
}
```

#### letter-spacing
- 자간 조절
```
p{
  letter-spacing:5px;
}
```

#### word-spacing
- 단어 간격
```
p{
  word-spacing:10px;
}
```

#### white-space
- 줄바꿈. 
  기본적으로 가로 사이즈보다 내용이 길면 밑으로 줄바꿈 하면서 내용을 보여주지만, 줄바꿈을 하고싶지 않을때 사용 해줌
```
p {
  white-space: nowrap;
}
```

#### Font
- CSS 파일이 브라우저에서 렌더링되기 때문에 폰트 파일을 클라이언트 PC에서 찾음.
  - 다수의 클라이언트 PC에 설치될 만한 폰트를 선택(Web safe)
- font-family 속성에 값으로 정해준 폰트 종류를 차례대로 찾음(Fallback)

- 서버에서 폰트를 사용할 수 있게 하는 기능
  - Web font
- 구글 폰트(저작권에 위배되지않는 폰트 검색 가능)
- 폰트 종류(저작권)
  - 폰트 파일 포함 여부 (웹경로의 폰트라면 html에 폰트파일 url 넣어주기)

- Font size
  - font-size
  - 폰트 크기
  - px

- Font Style
  - font-style
  - 기울임꼴 설정
  - italic 값

- Font weight
  - font-weight
  - 굵기
  - normal/bold
  - 단위없는 100단위 숫자 값 사용

#### Link style
- a 태그가 4가지 상태를 구분함
- link, visited, hover, active
```
<a href="https://www.naver.com" class="link">naver</a>

a:link{}
.link:visited{}
a:hover{}
a:active{}
```


### Layout styling

- Element 영역
  - Block, Inline, Element
- Element 영역 styling
  - Box model
- Element 배치
  - 배치 지정
    - 인접해있는 박스들의 관계
    - 인접해있는 박스들 사이에 영향
  - 위치 지정
    - 박스의 위치를 단독으로 지정

#### Box Model
- Box Model 구성요소
  - content (width/height), padding, border, margin

- inline 요소에 box model 적용


##### width/height
  - block 요소
    - width는 부모요소 기준으로 100% 채워짐
    - height는 contents 또는 자식요소에 맞춰짐
  - px
  - %
    - width는 부모 요소의 기준으로 설정한 비율 크기만큼 사이즈 계산됨
    - height는 적용이 되지 않음
  - auto
    - width/height 자동으로 크기 지정
    - width/height의 원래 특성으로 적용되어 굳이 사용하지 않음

##### padding

- 블럭의 안쪽 여백
```
padding-top
padding-right
padding-bottom
padding-left

(** 방향순서 - top을 기준으로 시계방향 순서)
padding:10px 25px 10px 25px; - 4방향 각각 사용

padding:10px 25px 10px; - - 2번째 값 좌/우 공통

padding:10px 25px; - 1번쨰 위/아래 2번쨰 좌/우 공통

padding:10px; - 4방향 공통
```

##### margin

- 블럭의 바깥쪽 여백
- maring collapse(겹침/상쇄)
  - 위 아래의 인접한 박스의 margin이 상쇄(제거)되는 현상 있음
    (두 여백 크기 중 큰 사이즈만 적용됨)
  - 좌우로 인접한 박스는 margin이 모두 적용됨 (좌우값이 더해짐)

##### border
- 굵기, 모양, 색
```
border:1px sold red;

border-top
border-right
border-bottom - 1px sold red; 특정 방향에만 적용시키고 싶을경우 방향을 입력해줌
border-left
```

##### background
- 배경은 Box model 요소의 content, padding 영역까지 적용
- 배경색
- 배경 이미지
  (이미지를 사용할 경우, 아래 배경이미지 설정을 추가로 사용 가능)
  - background-repeat
    - norepeat(반복 안한다) / x-repeat(가로만 반복) / y-repeat(세로만 반복)
  - background-position
    - px
    - left, center, right
    - top, center, bottom
    - 배경이미지의 위치 지정은 이미지를 반복하지 않을때 사용
  - background-attachment
    - fixed 사용하여 위치를 고정 /  
      (배경이 고정되면서 스크롤이 긴 컨텐츠의 경우 배경 위의 떠있는거 같은 느낌.)
- 축약하여 사용 가능
```
background-color-red;

background-image:url(이미지파일); 
background-repeat:norepeat
background-position:10px 20px -
background-attachment:fixed;

background: #ffffff url("img_tree.png") no-repeat right top;
```

#### display
- 박스의 표시 송석을 변경해서 표시
```
display:inline; /* block 요소가 inline요소의 특성으로 화면에 표시 */
display:block; /* inline 요소가 block요소의 특성으로 화면에 표시 */
display:inline-block; /* inline과 block의 특성을 모두 표시 : 나란히 표시, 박스모델 */
```

### layout 배치
- float
- flex
- grid

#### flexbox
- Html Element가 포함 관계고 구성
- 부모요소에 flex 설정, 배치관련 속성들을 적용

```
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

.flex-container{
  display:flex;
  flex-direction :column /* 위에서 아래로 */
  flex-wrap:wrap /* 플렉스 항목이 래핑되도록 지정 */
}
```

#### position
- 박스 위치를 단독 지정
- top, right, bottom, left 위치 지정 속성과 같이 사용

- relative
  - 박스의 원래 위치에서 좌표 크기만큼 이동
  - 요소의 일반적인 흐름에서 제외되지 않음
    (레이어로 치면, 동일한 레벨에 위치)

- absolute
  - 위치 지정을하고자 하는 곳의 조상요소에 position:relative 속성을   
    적용시켜 기준으로 지정해주어야 함
  - 요소의 일반 흐름에서 제외됨 (레이어를 겹쳐 쌓는 개념)
  - 문서에서 제외되지 않음
  - z-index 
    - 블럭이 겹칠때(유리판이 쌓인다고 생각) 보여지는 앞뒤 순서
    - 같은 단위없는 정수(양수/음수 모두) 사용
    - z-index를 사용할떄는 position:absolute 적용 되어있어야 함
    - 숫자가 클수록 레벨이 높아 제일 앞쪽에 노출되어 가려지는 것이 없음.

- fixed
  - browser를 기준으로 위치 지정
  - 요소의 일반 흐름에서 제외됨
  - 문서에서 제외됨



## 반응형 웹
- 다양한 디바인스의 환면에 컨텐츠, 레이아웃이 잘 보이도록 스타일 구현
- OSMU(One Source Multi Use)
  - 하나의 HTML Source, 여러개의 CSS Source

### 뷰포트
- 모바일 디바이스 화면에 웹 페이지 컨텐츠나 레이아웃이 잘 보일 수 있도록 하는 기능
- 뷰포트가 없을 때는 PC에 최적화된 레이아웃이 모바일 디바이스 화면에 보이게 됨

### 미디어 쿼리
- 특정 조건(상황)에 맞는지 비교 체크
- 조건에 맞으면 포함되어 있는 CSS코드 블럭을 실행

```
@midia screen and (max-width:600px;){}
  - max-width:600 -> 600px보다 작으면 코드블럭 실행
@midia screen and (min-width:600px;){}
  - min-width:600 -> 600px보다 크면 코드블럭 실행
```

#### 디바이스 스크린의 해상도
  디바이스 스크린의 해상도는 가로 해상도를 기준

- PC Monitor
  - 1920px * 1080px : Full HD (1K)
  - 3040px * 2160px : 4K
  - 1280 * 720(1024) ★ - 노트북때문에 작은 해상도 기준으로 한다.
  - 1024 * 768

- Tablet (가로비율과 세로비율이 크지않아서 세로모드로 고려함)
  - 1920 * 1080
  - 1280 * 720 ★ - PC랑 동일하게 화면을 돌리기도해서 세로기준도 따져준다.
  - 1024 * 768

- Phone
  - 400 * 800
  - 320 * 640 ★ - 작은 해상도를 기준으로 함.
  - pc 픽셀크기와 모바일 픽셀크기가 달라서 해상도가 달라짐
    pc보다 모바일의 픽셀크기가 작아서 동일한 이미지의 경우 모바일에서 더 작게보임. (pixel ratio 만큼 작음)
    https://www.mydevice.io/#compare-devices

- Breakpoint
  - 화면 크기에 따라 CSS가 다르게 적용되는 행상도 지점
  - 위 해상도 사례에서 1024, 720, 320 해상도가 breakpoint로 선택될 수 있음
 
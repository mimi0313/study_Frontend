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

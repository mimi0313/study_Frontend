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


#### table (표)

#### hyper link (하이퍼 링크)

### Media

#### image (이미지)

#### video (영상)

## HTML Structure

### Semantic

### Layout

# CSS

# 기본 JPA 내용정리

<details>
    <summary> 기본 JPA (자세히)</summary>
   
      JPA와 CRUD
    
      ◎ 저장 : jpa.persist(member)
      ◎ 조회 : Member member = jpa.find(memberId)
      ◎ 수정 : member.setName("변경할 이름")
      ◎ 삭제 : jpa.remove(member)
      

</details>  



# studySpringboot

<details>
    <summary> studySpringboot (자세히)</summary>
    
    JPA공부를 하고 나서 인프런 강의듣기 인프런 강의는 JPA를 기본적으로 쓰고 활용하는 방법에 대한
    강의 이기 때문이다
    
</details>  

# Lombok 내용정리

<details>
    <summary> Lombok 내용정리 (자세히)</summary>

    1. @ToString : toString 메소드를 자동으로 생성해주는 어노테이션이다 (System.out.println(">>>" + user.toString()); 가능하게 해줌)
    2. @Getter : 해당 클래스의 필드값들의 getter메소드를 자동으로 만들어주는 어노테이션이다. (데이터의 캡슐화 이유로 필수) 
    3. @Setter : 해당 클래스의 필드값들의 setter메소드를 자동으로 만들어주는 어노테이션이다. (데이터의 캡슐화 이유로 필수) 
    4. @NoArgsConstructor : 아무값도 존재하지 않는 생성자를 만들수 있게 만드는 어노테이션이다. (기본 생성자를 만들어줌) ex) User user = new User();
    5. @AllArgsConstructor : 전체의 값을 넣는 생성자를 만들수 있게 만드는 어노테이션이다. (여기에 필드에 쓴 모든생성자만 만들어줌) 
       ex) User user1 = new User("martin", "martin@nate.com", LocalDateTime.now(), LocalDateTime.now());
    6. @RequiredArgsConstructor : 초기화 되지않은 final 필드나, @NonNull 이 붙은 필드에 대해 생성자를 생성해 줍니다. @NonNull을 필드값위에 붙인다
       ex)  @NonNull
            private String name;
            @NonNull
            private String email;
    7. @Data : @ToString, @Getter, @Setter, @RequiredArgsConstructor, @EqualsAndHashCode 를 합쳐놓은 기능이다
    8. @Builder : 빌더 기능을 사용 가능하게 하는 어노테이션이다.
       ex) User user3 = User.builder().name("martin").email("martin@nate.com").build();
</details>
   
# React 내용정리


<details>
    <summary> React 내용정리 (자세히)</summary>
    
    실시간으로 코딩 한 소스들 확인하는 법
    Terminal에서 NewTerminal클릭 한 후 밑에 입력창에 npm start 입력한다

    state
    state 변수로 저장하고 사용할 시 변경된 점이 있다면 자동 렌더링이 된다 마치 Ajax처럼 스무스하게 홈페이지 이동이 가능하다 
    <Array, Object state데이터 수정 방법>
        
    ex) 

    `let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '다모토리']);`

    - 일단 변경함수 써야함 ex)글제목변경
    - 변경함수(대체할 데이터)

    state는 직접 건들지말고 deep copy해서 그걸 건드려야함
    ex)	

    `var newArray = [...글제목];   ([...] 신문법임 그냥 '글제목'카피하면 값공유만 하게됨)
        newArray[0] = '여자코트 추천';
        글제목변경( newArray );`

    순서정리
    1. 일단 기존 state카피본 만들고
    2. 카피본에 수정사항 반영하고
    3. 변경함수()에 집어넣기
        
    
    
    Component 사용법과 유의사항
    사용법
        
   해당 태그를 '사용자 지정'함수로 묶어 사용가능 (App() 태그 밖에다 만든다. App()도 하나의 펑션이기 때문이다)
  
      ex)

      `function Modal(){
      return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
          </div>
        )
      }`
      
      
        ####유의사항
        
        1. 이름은 대문자로 시작
        2. return() 안에 있는건 태그하나로 묶어여함
        3. 반복출현하는 HTML덩어리들, 자주 변경되는 HTML UI들, 다른페이지 만들 때 이와 같을 때 Component로 만드는게 좋다
        4. 상위 component에서 만든 state를 쓰려면 props 문법 이용해야함
        
        
        ### React에서 클릭시 등장하는 UI만드는법

        - UI가 보임/안보임 정보를 state로 저장해둠
        - if문을 이용해 state가 true일 때 UI를 보여줌


        ### map()함수 사용법

         `var array = [2,3,4];

          var newArray = array.map(function(a){
            return a * 2
          });`

        결과값 [4,6,8]이 나오게 된다 파라미터 a가 array안에 값들이다(반복문이랑 유사)
        
</details>


  
  
  
<details>
    <summary> git bash 사용법 (자세히)</summary>
   
      ### git bash 사용법
      1. 올리고 싶은 폴더에 마우스 오른쪽 버튼을 눌러 git Bash here를 클릭
      2. git init 입력
      3. git add . 입력
      4. git commit -m "커밋메세지 입력"
      5. git push -u origin +master 입력 끝
      6. 초기 설정 방법 및 git bash설치는 구글링

</details>  



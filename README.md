# 기본 JPA 내용정리

<details>
    <summary> 기본 JPA (자세히)</summary>
   
      ◎ JPA와 CRUD
    
      · 저장 : jpa.persist(member)
      · 조회 : Member member = jpa.find(memberId)
      · 수정 : member.setName("변경할 이름")
      · 삭제 : jpa.remove(member)
</details>  

◎ JPA
![image](https://user-images.githubusercontent.com/100402443/233082114-9d896bbe-d761-4a42-8bc2-56d499798169.png)


◎ 데이터 베이스 방언
      · 데이터베이스 방언이란? -> MySQL은 LIMIT, ORACLE은 ROWNUM으로 표현하듯 SQL표준이 아닌 특정 데이터베이스만의 고유한 기능
      · hibernate.dialect 속성에 지정 
      
◎ @Entity
- 테이블과의 매핑

- @Entity가 붙은 클래스는 JPA가 관리하는 것으로, 엔티티라고 불림

![image](https://user-images.githubusercontent.com/100402443/233094922-48903040-8f96-4cc9-882b-a4c3244035e3.png) @Table
- 엔티티와 매핑할 테이블을 지정

- 생략 시 매핑한 엔티티 이므로 테이블 이름으로 사용

◎ @Column
객체 필드를 테이블 컬럼에 매핑

속성 중 name, nullable이 주로 사용되고 나머지는 잘 사용되지 않음

![image](https://user-images.githubusercontent.com/100402443/233090725-d52c9835-3f16-4a88-ad6c-a57e53ea3ee9.png)


find 조회를 할 때 where 조건절에 primaryKey Id를 넣으려면
![image](https://user-images.githubusercontent.com/100402443/233092100-332fe656-8d1e-486d-b854-a4734e8b67f7.png)

이와같이 사용한다

결과
![image](https://user-images.githubusercontent.com/100402443/233092249-2635fa14-c637-46a2-bf28-daf945ccfea2.png)


◎ JPQL

- 쿼리문을 짤 때 join이나 group by나 등등등 할 때 createQuery을 사용해 만들수 있다
- JPQL은 엔티티 객체를 대상으로 쿼리
- SQL은 데이터베이스 대상으로 쿼리
- 테이블이 아닌 객체를 대상으로 검색하는 객체 지향 쿼리 이기 때문에 데이터베이스 방언도 설정만 바꾼다면 알아서 다 적용된다 (신세계,,,)

◎ 영속성 컨텍스트
- JPA를 이해하는데 가장 중요한 용어
- "엔티티를 영구 저장하는 환경"이라는 뜻
- EntityManager.persist(entity);
- 영속성 컨텍스트는 논리적인 개념으로 눈에 보이지 않는다
- 엔티티 매니저를 통해서 영속성 컨텍스트에 접근

◎ 영속성 컨텍스트의 이점
- 1차 캐시
- 동일성(idenrtity) 보장 
ex)

![image](https://user-images.githubusercontent.com/100402443/233402530-d615fc51-37af-422c-8457-91376b2de710.png)

- 트랜잭션을 지원하는 쓰기 지연
- 변경 감지(Dirty Checking)
- 지연 로딩(Lazy Loading)

◎ 엔티티의 생명주기

- 비영속(new/transient)

    영속성 컨텍스트와 전혀 관계가 없는 새로운 상태
    
- 영속(managed)

    영속성 컨텍스트에 관리되는 상태
    
- 준영속(detached)

    영속성 컨텍스트에 저장되었다가 분리된 상태
    
    
- 삭제(removed)

    삭제된 상태
    
 ex) 비영속 
 
 ![image](https://user-images.githubusercontent.com/100402443/233378059-32e74800-c9d9-49ba-a587-259b748e9d68.png)

◎ 준영속 상태

- 영속 상태의 엔티티가 영속성 컨텍스트에서 분리(detached)
- 특정 엔티티만 준영속 상태로 전환 em.detach(entity)
- 영속성 컨텍스트를 완전히 초기화 em.clear()
- 영속성 컨텍스트를 종료 em.close()

 ◎ 한 트랜잭션 안에서 1차 캐시의 데이터를 먼저 찾고 없으면 DB에 접근한다 
 
 ![image](https://user-images.githubusercontent.com/100402443/233382338-9026d978-2953-4e2a-a525-6aa686457d4e.png)

 ◎ 플러시
 
 - 영속성 컨텍스트의 변경내용을 데이터베이스에 반영

 ◎ 플러시 발생
 
 - 변경 감지하고 수정된 엔티티 쓰기 지연 SQL 저장소에 등록
 - 쓰기 지연 SQL저장소의 쿼리를 데이터베이스에 전송 (등록, 수정, 삭제 쿼리)

 ◎ 플러시는!
 - 영속성 컨테스트를 비우지 않음
 - 영속성 컨테스트의 변경내용을 데이터베이스에 동기화
 - 트랜잭션이라는 작업 단위가 중요 -> 커밋 직전에만 동기화 하면 됨


---------------------------------------------------------------------------------------------------------------------
  
  




































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


# 함수형 프로그래밍 특징
1. 순수함수 (Pure function)
- 동일한 입력에는 항상 같은 값을 반환해야 하는 함수
- 함수의 실행이 프로그램의 실행에 영향을 미치지 않아야 하는 함수
- 함수 내부에서 인자의 값을 변경하거나 프로그램 상태를 변경하는 Side Effect가 없는 것


예제)

 let num = 1;

    function add(a) {
        return a + num;
    }

위와 같은 예제에서는 add라는 함수 안에서 전역으로 선언된 변수인 num을 참조하기 때문에 순수함수라고 볼 수 없다.








  
  
  
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



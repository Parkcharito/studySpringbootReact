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
 ◎ @Column
 
 ![image](https://user-images.githubusercontent.com/100402443/234045679-424639b6-cd9b-4791-b0dc-b4ddaaf7249c.png)



◎ @Enumerated

![image](https://user-images.githubusercontent.com/100402443/234046178-8ae043f9-6265-4de6-85e7-2d00818bdd3e.png)

 ex)
설정

 ![image](https://user-images.githubusercontent.com/100402443/234046783-b9e01020-a226-49d7-832e-e00530154ff5.png)
 
 ![image](https://user-images.githubusercontent.com/100402443/234047471-5f4b6a5b-9d23-4793-ac5b-942c5d4baff4.png)


셋팅
 
 ![image](https://user-images.githubusercontent.com/100402443/234047037-8e4f73e0-afdc-4b81-8857-5a64ad813cbf.png)

 
 
 ◎ @Table
- 테이블을 지정해주는 어노테이션이다 @Table(name = "테이블명")으로 DB에 지정할 테이블명 설정이 가능하다
 
 ◎ @GeneratedValue
 엔티티의 기본키 생성 전략
 
 
 ◎ IDENTITY 전략 -특징
- 기본 키 생성을 데이터베이스에 위임
- 주로 MySQL, PostgreSQL, SQL Server, DB2에서 사용됨 ex) MySQL의 AUTO_INCREMENT
- JPA는 보통 트랜잭션 커밋 시점에 INSERT SQL 실행
- AUTO_INCREMENT는 데이터베이스에 INSERT SQL을 실행한 이후에 ID값을 알 수 있음
- IDENTITY전략은 em.persist() 시점에 즉시 INSERT SQL 싱행하고 DB에서 식별자를 조회

◎ SequenceGenerator -속성
- sequenceName 데이터베이스에 등록되어 있는 시퀀스 이름
- initialValue DDL 생성 시에만 사용됨, 시퀀스 DDL을 생성할 때 처음 1 시작하는 수를 지정한다
- allocationSize 시쿼스 한 번 호출에 증가하는 수 (성능 최적화에 사용됨)
  데이터베이스 시퀀스 값이 하나씩 증가하도록 설정되어 있으면 이 값을 반드시 1로 설정해야 한다 (기본값 50)

◎ TableGenerator는 따로 하나의 table에 시퀀스라고 지정하고 쓰는 방식인데 잘 안쓰이는듯,,





◎ 단방향 연관관계

![image](https://user-images.githubusercontent.com/100402443/234587578-ea9d502e-9782-49ce-adef-19aaf5632d07.png)


- 적용 방법

![image](https://user-images.githubusercontent.com/100402443/234587354-d0b38821-fc7c-45e2-93f1-459ba18c6be4.png)

◎ 양방향 연관관계



◎ 연관관계의 주인(Owner)

![image](https://user-images.githubusercontent.com/100402443/234591298-acd0a725-11a8-49bb-b447-969c4b1add05.png)

누구를 주인으로 지정하느냐? -> 주로 외래 키가 있는 곳을 주인으로 정한다

![image](https://user-images.githubusercontent.com/100402443/234592013-4250f90e-6ffd-4d20-ad88-6b1d965954a3.png)

여기서는 Member.team이 연관관계의 주인! (1: 다쪽이라고 생각했을 때 다쪽이 연관관계의 주인이라고 생각하면 된다)

※주의점

![image](https://user-images.githubusercontent.com/100402443/234594657-452b3e61-97e6-4216-812b-fef65d7c6c25.png)


![image](https://user-images.githubusercontent.com/100402443/234596265-444aad6c-64a1-4e78-b317-1b628fc813d9.png)



연관관계의 주인쪽에 해당 메소드를 넣으면 자동 셋팅이 되니 참고!

![image](https://user-images.githubusercontent.com/100402443/234596897-838014be-0ed9-4391-97f4-0434718e334f.png)


◎ 양방향 연관관계 주의 -  실습
- 순수 객체 상태를 고려해서 항상 양쪽에 값을 설정하자
- 연관관계 편의 메소드를 생성하자
- 양방향 매핑시에 무한 루프를 조심하자
	ex) toString(), lombok, JSON 생성 라이브러리
		서로 toString() 거울이 서로를 바라보듯 무한루프
		
		
◎ 양방향 매핑 정리
- 단방향 매핑만으로도 이미 연관관계 매핑은 완료
- 양방향 매핑은 반대 방향으로 조회(객체 그래프 탐색)기능이 추가된 것 뿐
- JPQL에서 역방향으로 탐색할 일이 많음
- 단방향 매핑을 잘 하고 양방향은 필요할 때 추가해도 됨 (테이블에 영향을 주지 않음)
( 양방향은 추가옵션일 뿐! )

※ 요약 ※

![image](https://user-images.githubusercontent.com/100402443/235137126-70483704-3b84-4b9a-8d58-ca7793b0686a.png)


## 연관관계 매핑

- 다대일 : @ManyToOne
- 일대다 : @OneToMany
- 일대일 : @OneToOne
- 다대다 : @ManyToMany


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
    
예제)
    
    // 순수함수
    function add(a, b) {
        return a + b;
    }

    const result = add(2, 3);
    
위와 같이 add의 함수가 프로그램 실행에 영향을 미치지 않고 입력 값에 대해서만 값의 변환이 있으므로 순수함수이다.

    
2. 비상태, 불변성 (Stateless, Immutability)
- 함수형 프로그래밍에서의 데이터는 변하지 않는 불변성을 유지해야 한다.
- 데이터의 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터의 복사본을 만들어서 그 일부를 변경하고, 변경한 복사본을 사용해 작업을 진행한다.

예제)

    let person = { name: "jongmin", age: "26" };

    function increaseAge(person) {
        person.age = person.age + 1;
        return person;
    }
    
위의 예제에서는 increaseAge 함수에서 전역으로 선언된 person의 age 속성을 변경하므로 불변성 유지를 만족하지 못한다.

예제)

    // 비상태, 불변성 만족
    const person = { name: "jongmin", age: "26" };

    function increaseAge(person) {
        return { ...person, age: person.age + 1 };
    }

 위처럼 객체의 값을 바꾸기 위해서는 데이터의 복사본을 만들어, 그 복사본을 사용해 작업을 진행하고 반환한다.

3. 선언형 함수 (Expressions)
    
- 명령형 프로그래밍은 무엇을 어떻게 할 것인가에 주목하고, 선언헌 프로그래밍은 무엇을 할 것인가에 주목한다.  

예제)
    
    let numbers = [1, 2, 3];

    function multiply(numbers, multiplier) {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = numbes[i] * multiplier;
        }
    }
                                           
위의 예시에서는 for문을 사용해서 배열의 각 요소에 multiplier 곱해주는 명령형 프로그래밍이다.

함수형 프로그래밍에서는 마찬가지로 if,switch,for 등 명령문을 사용하지 않고 함수형 코드로 사용해야한다.                                          
                                           
예제)
    // 선언형 프로그래밍
    function multiply(number, multiplier) {
        return number.map((num) => num * multiplier);
    }
    
위의 예시는 for문을 map으로 대치했고, Javascript 에서는 filter,map,take,reduce 등의 함수형 코드를 사용한다.                                        
                                           
                                           
4. 1급 객체와 고차함수 (Fist-class, Higher-order functions)

- 변수나 데이터 구조안에 담을 수 있다.
- 파라미터로 전달 할 수 있다.
- 반환값(return value)으로 사용할 수 있다.
- 할당에 사용된 이름과 관계없이 고유한 구별이 가능하다.
- 동적으로 프로퍼티 할당이 가능하다.                                        

예제)
    // 1급 객체
    const addTwo = (num) => num + 2;
    const multiplyTwo = (num) => num * 2;
    const transform = (numbers) => numbers.map(addTwo).map(multiplyTwo);

console.log(transform([1, 2, 3, 4])); // [6, 8, 10, 12]

위의 예시에서는 함수를 변수에 할당하거나 반환하는 1급 객체로서의 특징을 보여준다.


그리고 고차 함수의 속성을 가져야 하는데, 고차 함수의 특징은 다음과 같다.

- 함수를 인자로써 전달 할 수 있어야 한다.
- 함수의 반환 값으로 또 다른 함수를 사용 할 수 있다
    
예제)
    // 고차 함수
    const addInform = (name) => (age) => age + name;
    const jongmin = addInform("종민");
    
    console.log(jongmin("96")); // 96종민
    
위의 예제처럼 함수의 반환 값으로 다른 함수를 사용하거나, 함수의 반환 값으로 또 다른 함수를 사용 할 수 있어야 한다.

###함수형 프로그래밍의 장단점

#####장점
1. 높은 수준의 추상화를 제공한다
2. 함수 단위의 코드 재사용이 수월하다
3. 불변성을 지향하기 때문에 프로그램의 동작을 예측하기 쉬워진다

#####단점
1. 순수함수를 구현하기 위해서는 코드의 가독성이 좋지 않을 수 있다
2. 함수형 프로그래밍에서는 반복이 for문이 아닌 재귀를 통해 이루어지는데 (deep copy), 재귀적 코드 스타일은 무한 루프에 빠질 수 있다
3. 순수함수를 사용하는 것은 쉬울 수 있지만 조합하는 것은 쉽지 않다

                                           
                                       
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



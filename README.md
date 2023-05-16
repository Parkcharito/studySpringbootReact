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

---------------------------------------------------------------------------------------------------------------------

◎ JPQL

- 쿼리문을 짤 때 join이나 group by나 등등등 할 때 createQuery을 사용해 만들수 있다
- JPQL은 엔티티 객체를 대상으로 쿼리
- SQL은 데이터베이스 대상으로 쿼리
- 테이블이 아닌 객체를 대상으로 검색하는 객체 지향 쿼리 이기 때문에 데이터베이스 방언도 설정만 바꾼다면 알아서 다 적용된다 (신세계,,,)

---------------------------------------------------------------------------------------------------------------------

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
 
 
---------------------------------------------------------------------------------------------------------------------

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



---------------------------------------------------------------------------------------------------------------------


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


---------------------------------------------------------------------------------------------------------------------

## 연관관계 매핑

- 다대일 : @ManyToOne

![image](https://user-images.githubusercontent.com/100402443/235137594-c6aafd38-eb00-47fb-ae3c-721f50baafc3.png)


![image](https://user-images.githubusercontent.com/100402443/235138191-b8f867d9-7b09-45c0-a457-29678e20554e.png)

- 일대다 : @OneToMany 
- 일대일 : @OneToOne
- 다대다 : @ManyToMany


---------------------------------------------------------------------------------------------------------------------

## 상속관계 매핑

- 조인 전략 (웬만하면 표준)

![image](https://user-images.githubusercontent.com/100402443/235294729-4c3e76ab-84aa-4f14-9370-1c0a01c2445d.png)

◎ 장점

1. 테이블 정규화
2. 외래 키 참조 무결성 제약조건 활용가능
3. 저장공간 효율화

◎ 단점
1. 조회시 조인을 많이 사용, 성능 저하
2. 조회 쿼리가 복잡함
3. 데이터 저장시 INSERT SQL 2번 호출 (그렇게 큰 단점은 x) 

---------------------------------------------------------------------------------------------------------------------

- 단일 테이블 전략

![image](https://user-images.githubusercontent.com/100402443/235294989-5c26a9f3-8990-4dc6-a891-444019e7ee00.png)


◎ 장점

1. 조인이 필요 없으므로 일반적으로 조회 성능이 빠름
2. 조회쿼리가 단순함

◎ 단점
1. 자식 엔티티가 매핑한 컬럼은 모두 null 허용
2. 단일 테이블에 모든 것을 저장하므로 테이블이 커질수 있음 상황에 따라서 조회성능이 오히려 느려질 수 있다.


- 구현 클래스마다 테이블 전략 (사실 추천하지 않는 전략)

![image](https://user-images.githubusercontent.com/100402443/235295080-2095cb01-6a59-435e-8fd3-470d6fb8cc7b.png)

◎ 장점

1. 서브 타입을 명확하게 구분해서 처리할 때 효과적
2. not null 제약조건 사용가능

◎ 단점
1. 여러 자식 테이블을 함께 조회할 때 성능이 느림 (UNION SQL)
2. 자식 테이블을 통합해서 쿼리하기 어려움


---------------------------------------------------------------------------------------------------------------------

##### 전략 어노테이션

![image](https://user-images.githubusercontent.com/100402443/235295246-818bacf2-8d14-4a77-a983-c82cc2993e25.png)


@MappedSuperclass
- 상속관계 매핑 X
- 엔티티X, 테이블과 매핑 X
- 부모클래스를 상속 받는 자식 클래스에 매핑 정보만 제공
- 조회, 검색 불가(em.find(BaseEntity)불가)
- 직접 생성해서 사용할 일이 없으므로 추상 클래스 권장

- 테이블과 관계 없고, 단순히 엔티티가 공통으로 사용하는 매핑 정보를 모으는 역할
- 주로 등록이르 수정일, 등록자, 수정자 같은 전체 엔티티에서 공통으로 적용하는 정보를 모을 때
- 참고 : @Entity 클래스는 엔티티나 @MappedSuperclass로 지정한 클래스만 상속 가능 (같이 쓰는게 아님)


---------------------------------------------------------------------------------------------------------------------

## 프록시

◎ 프록시 기초

- em.find() vs em.getRegerence()
- em.find(): 데이터베이스를 통해서 실제 엔티티 객체 조회
- em.getRegerence() : 데이터베이스 조회를 미루는 가짜(프록시) 엔티티 객체 조회

![image](https://user-images.githubusercontent.com/100402443/235676732-ae216851-9293-4a9d-b883-be88c8e20695.png)


◎ 프록시 특징

- 실제 클래스를 상속 받아서 만들어짐
- 실제 클래스와 겉 모양이 같다.
- 사용하는 입장에서는 진짜 객체인지 프록시 객체인지 구분하지 않고 사용하면 됨(이론상)
- 프록시 객체는 처음 사용할 때 한 번만 초기화
- 프록시 객체를 초기화 할 때 , 프록시 객체가 실제 엔티티로 바뀌는 것은 아님, 초기화되면 프록시 객체를 통해서 실제 엔티티에 접근 가능
- 프록시 객체는 원본 엔티티를 상속받음, 따라서 타입 체크시 주의해야함(==비교 실패, instanceof사용)
- 영속성 컨텍스트에 찾는 엔티티가 이미 있으면 em.getReference()를 호출해도 실제 엔티티 반환
- 영속성 컨텍스트의 도움을 받을 수 없는 준영속 상태일 때, 프록시를 초기화하면 문제 발생

### 프록시 객체의 초기화

![image](https://user-images.githubusercontent.com/100402443/235677283-d7499e89-30d3-4d87-a3a5-1d26460edddf.png)


---------------------------------------------------------------------------------------------------------------------

### 지연로딩과 즉시로딩

◎ 지연로딩 LAZY를 사용해서 프록시로 조회

![image](https://user-images.githubusercontent.com/100402443/235684788-2831e7b5-962b-4fca-922f-bb5b5674f904.png)

ex)

![image](https://user-images.githubusercontent.com/100402443/235684520-052cdf11-1f18-4789-a308-b2e96368b485.png)

◎ 즉시로딩은 EAGER를 사용해 함께 조회

![image](https://user-images.githubusercontent.com/100402443/235685192-b2c83445-c6bc-48c8-a16c-7e887050872b.png)

ex)
![image](https://user-images.githubusercontent.com/100402443/235685108-61d5312f-0730-41cb-94bf-f6f994f25b9f.png)

◎ 프록시와 즉시로딩 주의
- 가급적 지연 로딩만 사용(특히 실무에서)
- 즉시 로딩을 적용하면 예상하지 못한 SQL이 발생
- 즉시 로딩은 JPQL에서 N+1 문제를 일으킨다.
- @ManyToOne, @OneToOne은 기본이 즉시 로딩 -> LAZY로 설정
- @OneToMany, @ManyToMany는 기본이 지연 로딩


---------------------------------------------------------------------------------------------------------------------


◎  CASCADE 
- cascade는 영속겅 전이: 저장하는것
- 영속성 전이는 연관관계를 매핑하는 것과 아무 관련이 없음
- 엔티티를 영속화할 때 연관된 엔티티도 함께 영속화하는 편리함을 제공할 뿐

![image](https://user-images.githubusercontent.com/100402443/235901082-cb7d8527-bb90-4580-b0da-7e957d230ef4.png)


---------------------------------------------------------------------------------------------------------------------

### 고아객체

- 고아 객체 제거 : 부모 엔티티와 연관관계가 끊어진 자식 엔티티를 자동으로 삭제
- orphanRemoval = true
- Parent parent1 = em.find(Parent.class, id);
  parent1.getChildren().remove(0);
  // 자식엔티티를 컬렉션에서 제거
- DELETE FROM CHILD WHERE ID = ?


![image](https://user-images.githubusercontent.com/100402443/235902579-f9741979-de56-4a69-98c3-dd2d0a5479f7.png)

![image](https://user-images.githubusercontent.com/100402443/235903279-13395951-b024-4da1-93d3-f1463180a8db.png)


---------------------------------------------------------------------------------------------------------------------

### 임베디드 타입

◎ 임베디드 타입의 장점
- 재사용
- 높은 응집도
- Period.isWork()처럼 해당 값 타입만 사용하는 의미 있는 메소드를 만들수 있음
- 임베디드 타입을 포함한 모든 값 타입은, 값 타입을 소유한 엔티티에 생명주기를 의존함

◎ 임베디드 타입 사용범
- @Embeddable : 값 타입을 정의하는 곳에 표시
- @Embedded : 값 타입을 사용하는 곳에 표시
- 기본 생성자 필수

◎ 임베디드 타입과 테이블 매핑
- 임베디드 타입은 엔티티의 값일 뿐이다.
- 임베디드 타입을 사용하기 전과 후에 매핑하는 테이블은 같다.
- 객체와 테이블을 아주 세밀하게 (find-grained)매핑하는 것이 가능
- 잘 설계한 ORM애플리케이션은 매핑한 테이블의 수보다 클래스의 수가 더 많음 


---------------------------------------------------------------------------------------------------------------------


◎ 불변 객체
- 객체 타입을 수정할 수 없게 만들면 부작용을 원천 차단
- 값 타입은 불변 객체(immutable object)로 설계해야함 (중요)
- 불변 객체 : 생성 시점 이후 절대 값을 변경할 수 없는 객체
- 생성자로만 값을 설정하고 수정자(Setter)를 만들지 않으면 됨
- 참고 : Integer, String은 자바가 제공하는 대표적인 불변 객체 

◎ 엔티티 타입의 특징
- 식별자 O
- 생명 주기 관리
- 공유

◎ 값 타입의 특징
- 식별자 X
- 생명 주기를 엔티티에 의존함
- 공유하지 않는 것이 안전 (복서해서 사용)
- 불변 객체로 만드는 것이 안전

### 정리

값 타입은 정말 값 타입이라 판단될 때만 사용
엔티티와 값 타입을 혼동해서 엔티티를 값 타입으로 만들면 안됨
식별자가 필요하고, 지속해서 값을 추적, 변경해야 한다면 그것은 값 타입이 아닌 엔티티


---------------------------------------------------------------------------------------------------------------------
  
  
### 프로젝션

- SELECT 절에 조회할 대상을 지정하는 것
- 프로젝션 대상 : 엔티티, 임베디드 타입, 스칼라 타입(숫자, 문자등 기본 데이터 타입)
- SELECT m FROM Member m -> 엔티티 프로젝션
- SELECT m.team FROM Member m -> 엔티티 프로젝션
- SELECT m.address FROM Member m -> 임베디드 타입 프로젝션
- SELECT m.userName, m.age FROM Member m -> 스칼라 타입 프로젝션
- DISTINCT로 중복 제거


#### Object[] 타입으로 조회

![image](https://github.com/Parkcharito/studySpringbootReact/assets/100402443/c5807809-0127-402e-bf56-687aa18d88d0)

#### new 명령어로 조회

- 단순 값을 DTO로 바로 조회
- SELECT new jpabook.jpql.UserDTO(m.username, m.age)FROM Member m
- 패키지 명을 포함한 전체클래스 명 입력
- 순서와 타입이 일치하는 생성자 필요

![image](https://github.com/Parkcharito/studySpringbootReact/assets/100402443/e4750abf-595b-4091-9d60-2de52a154914)


---------------------------------------------------------------------------------------------------------------------
페이징 API 
- JPA는 페이징을 다음 두 API로 추상화
- setFirstResult(int startPosition) : 조회 시작 위치(0부터 시작)
- setMaxResult(int maxResult) : 조회할 데이터 수


---------------------------------------------------------------------------------------------------------------------

### 묵시적 조인보다 명시적 조인으로 코드를 작성하는게 좋다

#### 명시적 조인 : join 키워드 직접 사용
- select m from Member m join m.team t

#### 묵시적 조인 : 경로 표현식에 의해 묵시적으로 SQL 조인 발생(내부 조인만 가능)
- select m.team from Member m

EX) 

- select o.member.team from Order o => 성공
- select t.members from Team => 성공
- select t.members.username from Team t => 실패
- select m.username from Team t join t.members m => 성공




---------------------------------------------------------------------------------------------------------------------

### 페치 조인(fetch join)
- SQL 조인 종류 X
- JPQL에서 성능 최적화를 위해 제공하는 기능
- 연관된 엔티티나 컬렉션을 SQL 한번에 함께 조회하는 기능
- join fetch 명령어 사용
- 페치 조인 :: = [LEFT[OUTER]|INNER]JOIN FETCH 조인경로

### 엔티티 페치 조인
- 회원을 조회하면서 연관된 팀도 함께 조회(SQL 한 번에)





















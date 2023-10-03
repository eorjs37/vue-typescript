<template>
   <div class="card">
      <img class="card-img"
         src="https://imgnews.pstatic.net/image/144/2023/05/11/0000886367_001_20230511162601253.png?type=w647" alt="사진" />
      <h1 class="card-title">사진제목</h1>
      <article class="card-desc">
         이탈리아 세리에A 나폴리에 33년 만에 리그 우승 트로피를 안긴 김민재(27)가 우승 확정 당시 소감을 밝혔다. 11일 대한축구협회(KFA)의 유튜브 채널 인사이드캠은 앞서 나폴리 현지에서 김민재와의
         인터뷰 영상을 공개했다. 김민재는 우선 “대표팀에서
         와주셔서 한국에 계신 팬들에게 인사를 전할 수 있게 됐다”면서 “새벽 시간 경기가 많았음에도 불구하고 직접 나폴리에 오시거나, 멀리서 응원해주신 덕분에 우승할 수 있었다”며 감사 인사를 전했다. 빅리그인
         세리에A에서 우승 소감을 묻는 말에는 “색다른
         경험이었다”며 웃었다. 그는 “그날 경기(5일 우디네세 전)가 힘들었는데, 끝나고 운동장을 뛰어다니고 소리를 지르고 춤을 추다 보니 그제서야 실감이 났다”고 말했다. 등 번호 3번을 달고 뛰는 김민재는
         나폴리에서 ‘3’이라는 숫자가 갖는 의미 덕분에 이번
         우승이 더욱 뜻깊었다고 설명했다. 나폴리는 5일 33라운드 우디네세와의 원정 경기에서 우승을 확정지었다. 디에고 마라도나(아르헨티나)가 뛰었던 1989~1990시즌 이후 33년 만에 리그 제패에 통산 3회
         우승이었다. 김민재는 “친형이 가족 메신저 단체
         대화방에 3의 의미를 올려줘서 알았다”며 “앞으로 축구 인생에서 3이라는 의미가 커진 것 같다”고 말했다. 그러면서 나폴리에서 하는 것만큼 대표팀에도 헌신하겠다는 뜻을 밝혔다. 김민재는 “소속팀에서는
         3번, 대표팀에서는 4번을 다는데, 이 번호도
         상징성이 있다. 갑자기 대표팀 등 번호를 바꿔버리는 건 이미 유니폼을 사주신 분들을 생각해서라도 안 된다”고 말했다.
      </article>
   </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card {
   max-width: 700px;
   width: 100%;
   display: flex;
   margin: 0 auto;
   flex-direction: column;
}

.card-img {
   width: 100%;
   height: 300px;
}

.card-title {
   font-size: 30px;
   font-weight: bold;
   line-height: 1.2;
}

.card-desc {
   font-size: 17px;
   font-weight: 500;
   line-height: 1.8;
   color: #000;
   width: 100%;
   overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
   word-break: break-all;
}</style>

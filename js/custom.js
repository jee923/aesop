// header background change when scroll down
const header = document.querySelector("header");

function headerBackgroundChange() {
  if (window.scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
}

window.addEventListener("scroll", headerBackgroundChange);

// 스크롤 헤더 숨김
// let prevScrollpos = window.pageYOffset;
//   const header = document.querySelector("header");
//   // console.log(header);

//   window.addEventListener("scroll", function () {
//     const currentScrollPos = window.pageYOffset;
//     if (currentScrollPos > 150) {
//       header.classList.remove("top");
//       if (prevScrollpos > currentScrollPos) {
//         header.style.top = 0;
//       } else {
//         header.style.top = -100 + "%";
//       }
//       prevScrollpos = currentScrollPos; // 마우스 이동 후 스크롤 위치값 재할당 (현재위치 파악)
//     } else {
//       header.classList.add("top");
//     }
//   });

// 베스트셀러 섹션 리스트 수정하기
// const bestItems = {
//   fu: [
//     {
//       title: '얇은 이불 · D · 베이지',
//       price: '64,000',
//       img: 'be_img_fu_01.png',
//     },
//     {
//       title: '소파 본체 깃털ㆍ2인용',
//       price: '899,000',
//       Discount: '10',
//       img: 'be_img_fu_02.png',
//     },
//     {
//       title: '대마 음영 펜던트 라이트',
//       price: '72,000',
//       Discount: '10',
//       img: 'be_img_fu_03.png',
//     },
//     {
//       title: '데스크ㆍ고무나무',
//       price: '349,000',
//       Discount: '10',
//       img: 'be_img_fu_04.png',
//     },
//   ],

//   ho: [
//     {
//       title: '대용량 아로마 디퓨저',
//       price: '90,000',
//       img: 'be_img_ho_01.png',
//     },
//     {
//       title: '초음파 아로마 디퓨저',
//       price: '79,000',
//       Discount: '10',
//       img: 'be_img_ho_02.png',
//     },
//     {
//       title: '폴리에틸렌 케이스 · M',
//       price: '10,000',
//       Discount: '11',
//       img: 'be_img_ho_03.png',
//     },
//     {
//       title: '360도 공기 청정기',
//       price: '35,000',
//       Discount: '10',
//       img: 'be_img_ho_04.png',
//     },
//   ],

//   be: [
//     {
//       title: '에이징 케어 미백 스킨',
//       price: '12,900원',
//       img: 'be_img_be_01.png',
//     },
//     {
//       title: '민감한 피부용 올인원 젤',
//       price: '13,500',
//       Discount: '10',
//       img: 'be_img_be_02.png',
//     },
//     {
//       title: '에이징 케어 미백 워터',
//       price: '13,000',
//       Discount: '10',
//       img: 'be_img_be_03.png',
//     },
//     {
//       title: '민감 피부용 유액 고보습',
//       price: '9,000',
//       Discount: '10',
//       img: 'be_img_be_04.png',
//     },
//   ],

//   cl: [
//     {
//       title: '워셔블 크루넥 스웨터',
//       price: '47,400원',
//       img: 'be_img_cl_01.png',
//     },
//     {
//       title: '재생 울 혼방 · 체스터 코트',
//       price: '165,000',
//       Discount: '10',
//       img: 'be_img_cl_02.png',
//     },
//     {
//       title: '구김이 잘 가지 않는 · 긴소매 셔츠',
//       price: '43,500',
//       Discount: '10',
//       img: 'be_img_cl_03.png',
//     },
//     {
//       title: '남성 · 울 야크 · V넥 가디건',
//       price: '88,000',
//       Discount: '10',
//       img: 'be_img_cl_04.png',
//     },
//   ],

//   fo: [
//     {
//       title: '카카오 트뤼프 헤이즐넛',
//       price: '3,600원',
//       img: 'be_img_fo_01.png',
//     },
//     {
//       title: '새우 크림 카레',
//       price: '5,200',
//       Discount: '10',
//       img: 'be_img_fo_02.png',
//     },
//     {
//       title: '초코인 스낵',
//       price: '1,500',
//       Discount: '10',
//       img: 'be_img_fo_03.png',
//     },
//     {
//       title: '히키타츠 파스타 소스 보로네제',
//       price: '5,000',
//       Discount: '10',
//       img: 'be_img_fo_04.png',
//     },
//   ],
// };

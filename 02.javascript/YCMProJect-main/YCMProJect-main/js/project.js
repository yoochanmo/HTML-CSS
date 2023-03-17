jQuery(document).ready(function($) {
    // 책 데이터 배열
    let books = [
        {
            title: '아몬드',
            author: '손원'
        }, // 책 데이터는 ,로 구분합니다.
        {
            title: '사랑할 때 이야기하는 것들',
            author: '김재식'
        },
        {
            title: '지금은 이 순간이고, 여기는 이곳입니다',
            author: '장재인'
        },
        // 이하 생략
    ];

    // 슬라이드쇼를 위한 함수
    function slideShow() {
        $('.carousel').carousel('next');
    }
    setInterval(slideShow, 2000);

    function initCarousel() {
        $('.carousel').carousel();
    }
    
    
    

    

    // 초기화
    initCarousel();
});

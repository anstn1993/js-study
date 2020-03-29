//'확인', '취소' 버튼을 주는 팝업. 확인 클릭 시 true, 취소 누를 시 false return

var answer;

answer = window.confirm("정말로 삭제하시겠습니까?");

if(answer) {
    alert("삭제되었습니다.");
}
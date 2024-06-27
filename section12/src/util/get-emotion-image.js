// [이미지를 따로 불러오기 위한 파일]

//소수의 이미지가 필요할 경우 assets 폴더에서 가져오는 것이 좋고,
//많은 이미지를 불러와야 할 경우 public 폴더에 넣어 가져오는 것이 좋다.
import emotion1 from './../assets/emotion1.png';
import emotion2 from './../assets/emotion2.png';
import emotion3 from './../assets/emotion3.png';
import emotion4 from './../assets/emotion4.png';
import emotion5 from './../assets/emotion5.png';


//emotion의 id값을 받아옴
export function getEmotionImage (emotionId) {
  switch(emotionId) {
    case 1: return emotion1;
    case 2: return emotion2;
    case 3: return emotion3;
    case 4: return emotion4;
    case 5: return emotion5;
    default: return null;
  }
}
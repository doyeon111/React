function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor
    setTimeout(() => {
      if(typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
      // console.log("안녕");
      // // resolve("안녕"); // 성공했다는 것
      // reject("왜 실패했는지 이유.."); // 실패한 이유가 나옴
    }, 2000);
  
  });

  return promise;
};

//callback 지옥을 막기위해서..~~
add10(0).then((result) => {
  console.log(result); // 10
  return add10(result);
}).then((result) => {
  console.log(result);
  return add10(undefined);
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
})
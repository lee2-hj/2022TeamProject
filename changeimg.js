function loadImg(){
    let loadimg = document.getElementById('imgupload'); // 인풋 파일에 등록된 값을 변수에 저장
    // 인풋 파일에 파일 있는 경우
    if(loadimg.files && loadimg.files[0]){
        //fileReader 인스턴스 생성
        const reader = new FileReader();
        //이미지가 업로드 된 경우
        reader.onload = e =>{
                const priviewImg = document.getElementById('myimg'); // 출력하여 보여줄 이미지태그
                priviewImg.src = e.target.result;
            }
        reader.readAsDataURL(loadimg.files[0]);
        }
//     let btn = document.getElementById('btn');
    }

const inputImg = document.getElementById('imgupload');
//     inputImg.addEventListener('change',e =>{
//         loadImg(e.target);
// });
       inputImg.onchange= loadImg;

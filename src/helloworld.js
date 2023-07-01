import KakashiImg from './Images/kakashi.png'
const print = () =>{
    const button = document.createElement('button');
    var imgbool = false;
    const txtnode = document.createTextNode('Show/hide image');
    button.appendChild(txtnode);
    const body = document.querySelector('body');
    body.append(button)
    button.onclick = () =>{
        imgbool = !imgbool;
        var imgTag = document.createElement('img')
        imgTag.src = KakashiImg;
        if(imgbool){
            body.append(imgbool)
        }
    }
}

export default print

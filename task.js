/**
 * Created by Administrator on 2016/8/19.
 */

(function Name() {
    var in_put = document.getElementById("in_put");
    var content = document.getElementById("content");
})();
function Isempty(){
    if(!content.hasChildNodes()){
        return true;
    }else{
        return false;
    }
}
function CreateSpan(){
    var temp =in_put.value;
    var NumHtml = document.createElement('span');
    var span = document.getElementsByTagName("span");
    NumHtml.innerText = temp;
    NumHtml.onclick = DelNum;
    return NumHtml;
}

//var temp = in_put.value;
//alert(temp);
function NumLeftIn(){
    var temp =in_put.value;
    var NewSpan = CreateSpan();
    if(temp == ''){
        alert("没有数字！");
    }else if((/^[0-9]+$/).test(temp)){
        if(Isempty()){

            content.appendChild(NewSpan);
        }else{
            content.insertBefore(NewSpan,content.firstChild);
        }
    }else{
        alert("请输入数字");
    }

}

function NumRightIn(){
    var temp =in_put.value;
    var NewSpan = CreateSpan();
    if(temp == ''){
        alert("没有数字！");
    }else if((/^[0-9]+$/).test(temp)){
         content.appendChild(NewSpan);
   }else{
        alert("请输入数字");
    }
}

function NumLeftOut(){
    if(Isempty()){
        alert("没有数字了")
    }else{
        content.removeChild(content.firstChild);
    }
}

function NumRightOut(){
    if(Isempty()){
        alert("没有数字了")
    }else{
        content.removeChild(content.lastChild);
    }
}

function DelNum(){
   this.parentNode.removeChild(this);
}

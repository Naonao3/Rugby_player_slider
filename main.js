class Player{
    constructor(number,name,height,weight,cap,img){
        this.number = number
        this.name = name
        this.height = height
        this.weight = weight
        this.cap = cap
        this.img = img
    }
}

let playerList = [
    new Player(1,"Keita Inagaki",186,116,44,"https://newsatcl-pctr.c.yimg.jp/t/iwiz-yn/rpr/mukaifumiya/00200391/top_image.jpeg?pri=l&w=800&h=450&order=c2r&cx=0&cy=0&cw=1920&ch=1080&exp=10800"),
    new Player(2,"Atsushi Sakate",180,104,32,"https://www.jsports.co.jp/img/web/page/rugby/japan/team/atsushi_sakate/atsushi_sakate_220625_04.jpg"),
    new Player(3,"Jiwon Gu",184,122,20,"https://catch-up-net.com/wp-content/uploads/2019/10/11a0b61e2b435cedc2bf0f7d6283a420.jpg"),
    new Player(4,"Warner Dearns",201,117,6,"https://www.jsports.co.jp/img/web/page/rugby/japan/team/warner_dearns/warner_dearns_220709_01.jpg"),
    new Player(5,"Jack Cornelsen",195,110,11,"https://www.jsports.co.jp/img/web/page/rugby/japan/team/jack_cornelsen/jack_cornelsen_220625_02.jpg"),
    new Player(6,"Michael Leitch",189,113,77,"https://i.dailymail.co.uk/1s/2019/10/13/14/19655876-0-image-m-19_1570973888717.jpg"),
    new Player(7,"Pieter Labuschagne",189,106,14,"https://www.sarugbymag.co.za/wp-content/uploads/2019/09/Screen-Shot-2019-09-26-at-9.03.30-AM.png"),
    new Player(8,"Kazuki Himeno",187,108,24,"https://d3gbf3ykm8gp5c.cloudfront.net/content/uploads/2020/10/12095559/Kazuki-Himeno-for-Japan-in-World-Cup-PA.jpg"),
    new Player(9,"Naoto Saito",165,73,10,"https://www.jsports.co.jp/img/web/page/rugby/japan/team/naoto_saito/naoto_saito_220625_03.jpg"),
    new Player(10,"Seungsin Lee",176,85,5,"https://p.potaufeu.asahi.com/33d2-p/picture/26940759/8f9c29e9d1c938f8c637b54f8e967a1a.jpg"),
    new Player(11,"Siosaia Fifita",187,105,11,"https://m.psecn.photoshelter.com/img-get/I00002cXqTsF71Co/s/500/aflo-162390950.jpg"),
    new Player(12,"Ryoto Nakamura",182,92,32,"https://e2.365dm.com/18/11/2048x1152/skysports-ryoto-nakamura-japan_4492129.jpg"),
    new Player(13,"Shogo Nakano",186,98,5,"https://www.suntory.co.jp/culture-sports/sungoliath/member/img/play/nakano_s.jpg"),
    new Player(14,"Dylan Riley",187,102,9,"https://www.jsports.co.jp/img/web/page/rugby/japan/team/dylan_riely/dylan_riely_220625_03.jpg"),
    new Player(15,"Ryohei Yamanaka",188,98,26,"https://static.thedigestweb.com/v=1586772496/files/topics/13478_ext_04_0_L.jpg")
];

const target = document.getElementById("target");

//????????????
let title = document.createElement("div");
title.classList.add("col-10","text-center","text-danger","p-5","container");
let mainTitle = document.createElement("h1");
mainTitle.innerHTML = "Japan starting member against France";
subTitle = document.createElement("h3");
subTitle.classList.add("text-right");
subTitle.innerHTML = "2022.11.20";

title.append(mainTitle);
title.append(subTitle);
target.append(title);

//????????????
let output = document.createElement("div");
output.classList.add("row");

title.append(output);

//????????????????????????
let leftDiv = document.createElement("div");
leftDiv.classList.add("col-md-7","col-12","p-2","d-flex","justify-content-center","align-items-center");
let playerImg = document.createElement("img");
playerImg.classList.add("imgFit","p-2");
let defaultImg = "https://i.guim.co.uk/img/media/78b4427f88ba8c5ba3c046f03950cdad738a9e00/0_20_4680_2808/master/4680.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2b965aec8383bd1ace9af9b2786618ba"
playerImg.src = defaultImg;

leftDiv.append(playerImg);
output.append(leftDiv);

//?????????????????????????????????????????????
let rightDiv = document.createElement("div");
rightDiv.classList.add("col-md-5","col-12","py-3","text-white");
let info = document.createElement("h5");
info.classList.add("text-left","col-12","py-3")
info.innerHTML = ""
let detailInfo = document.createElement("h5");
detailInfo.innerHTML = ""
detailInfo.classList.add("text-left","col-12","py-3")

rightDiv.append(info);
rightDiv.append(detailInfo);
output.append(rightDiv);

//slide??????
let sliderShow = document.createElement("div");
sliderShow.classList.add("col-12","d-flex","flex-nowrap","overflow-hiddens");

let mainImg = document.createElement("img");
mainImg.classList.add("main","imgFit");
mainImg.setAttribute("data-index",0);

let extraImg = document.createElement("img");
extraImg.classList.add("extra","imgFit");

sliderShow.append(mainImg);
sliderShow.append(extraImg);
playerImg.append(sliderShow);

//???????????????
for(let i=0; i < playerList.length; i++){
    let button = document.createElement("button");
    button.classList.add("btn","bg-warning","m-2","col-3","align-items-center");
    button.innerHTML = (i+1).toString();
    //????????????????????????????????????????????????
    button.addEventListener("click",function(){
        //????????????????????????
        info.innerHTML = playerList[i].name;
        detailInfo.innerHTML = playerList[i].height + "cm, " + playerList[i].weight + "kg, " + playerList[i].cap + "cap";
        //??????????????????
        slideJump(i)
    })
    rightDiv.append(button);
}



//????????????
function slideJump(input){
    let index = parseInt(mainImg.getAttribute("data-index"));
    let currentElement = playerList[index];
    let nextElemnt = playerList[input];
    let animationType = index < input ? "right" : "left";

???  //??????????????????
    animationMain(currentElement,nextElemnt,animationType,input);
}

function animationMain(currentElement,nextElemnt,animationType,input){
    mainImg.src = nextElemnt.img
    extraImg.src = currentElement.img;

    mainImg.classList.add("expand-animation");
    extraImg.classList.add("deplete-animation");

    if(animationType === "right"){
        if(playerImg.src == defaultImg){
            extraImg.src = defaultImg;
        }
        playerImg.src = ""
        mainImg.setAttribute("data-index",input)     
        sliderShow.append(extraImg);
        sliderShow.append(mainImg);
        leftDiv.append(sliderShow);
    }

    else if(animationType === "left"){
        if(playerImg.src === defaultImg){
            extraImg.src = defaultImg; 
        }
        playerImg.src = ""
        mainImg.setAttribute("data-index",input);
        sliderShow.append(mainImg);
        sliderShow.append(extraImg);
        leftDiv.append(sliderShow);
    }
}
const Button = document.querySelector(".lang");
const navbar = document.querySelectorAll(".nav-link");
const layerh1 = document.querySelector(".layer-h1");
const layerp = document.querySelector(".layer-p");
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const name3 = document.querySelector(".name3");
const name4 = document.querySelector(".name4");
const name5 = document.querySelector(".name5");
const name6 = document.querySelector(".name6");
const layer2H1 = document.querySelector(".layer2H1");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const layer2H2 = document.querySelector(".layer2H2");
const button1 = document.querySelector(".button1");
const box2P2 = document.querySelector(".box2P2");
const box2H1 = document.querySelector(".box2H1");
const resentH1 = document.querySelector(".resentH1");
const POSTH1 = document.querySelector(".POSTH1");
const seo = document.querySelector(".seo");
const virtual = document.querySelector(".virtual");
const content = document.querySelector(".content");
const social = document.querySelector(".social");
const black = document.querySelector(".black");
const link = document.querySelectorAll(".link");
const hrH3 = document.querySelector(".hrH3");
const hedlink = document.querySelector(".hedlink");




let az = ["<b>Ana sehife</b>", "<b>Sehifeler</b>", "<b>Haqqimizda</b>", "<b>Xidmetlerimiz</b>", "<b>Meqale</b>", "<b>Komanda</b>", "<b>Suallar</b>", "<b>Elaqe</b>"];
let en = ["<b>HOME</b>", "<b>PAGES</b>", "<b>ABOUT US</b>", "<b>SERVICES<b/>", "<b>BLOG<b/>", "<b>TEAM</b>", "<b>FAQ</b>", "<b>CONTACT</b>"];

let layerh1Az = " BIZIM SERVIS";
let layerh1Eng = "OUR SERVICE";

let layerpAz = 'EV  <i class="fa-solid fa-angle-right"></i> Bizim Servis';
let layerpEng = 'HOME <i class="fa-solid fa-angle-right"></i> Our Service';

let name1Az = '  <b class="b1 ">Biznes</b> <b>Meslehetcisi</b>';
let name1Eng = '  <b class="b1 ">Business</b> <b>Consultant</b>';

let name2Az = ' <b class="b1 color: #FFCF10; ">Onlayn</b> <b>Meslehetcisi</b>';
let name2Eng = ' <b class="b1 color: #FFCF10; ">Online</b> <b>Consultant</b>';

let name3Az = '  <b class="b1 color: #FFCF10; "> Vergi</b> <b>Planlamasi</b>';
let name3Eng = ' <b class="b1 color: #FFCF10; ">Tax</b> <b>Planning</b>';

let name4Az = '  <b class="b1 color: #FFCF10; ">Bank</b> <b>İnvestisiya</b>';
let name4Eng = ' <b class="b1 color: #FFCF10; ">Bank</b><b>Investment</b>';

let name5Az = ' <b class="b1 color: #FFCF10; ">Sənaye </b> <b>Meslehetcisi</b>';
let name5Eng = ' <b class="b1 color: #FFCF10; ">Industry</b> <b>Consultant</b>';

let name6Az = ' <b class="b1 color: #FFCF10; ">Biznes </b> <b>Planlaşdirma</b>';
let name6Eng = '  <b class="b1 color: #FFCF10; ">Business</b> <b>Planning</b>';

let layer2H1Az = ' <b>Burada Abunə Olun</b>';
let layer2H1Eng = ' <b> Subscribe Here</b>';

let p1Az = ' Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Və yumşaldı';
let p1Eng = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti';

let p2Az = ' ixtiraçıdan, haradan faydalanır.';
let p2Eng = ' commodi ab, ex inventore unde.';

let layer2H2Az = ' XƏBƏRLƏR VƏ YENİLİKLƏR ALIN';
let layer2H2Eng = ' GET NEWS AND UPDATE';

let button1Az = ' ABUNƏ OLUN';
let button1Eng = ' SUBSCRIBE';

let box2P2Az = ' Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Qanunda asan bir şey yoxdur. İşlərimizi bundan da pisləşdirmək üçün hər şeyi açacaqdı.';
let box2P2Eng = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis ab iure nihil quidem. Aperiam nobis rerum facere illo asperiores.';

let box2H1Az = ' <b>TEZ LİNK</b> ';
let box2H1Eng = ' <b>QUICK LINK</b>';

let resentH1Az = ' <b>TEZ POSTLAR</b> ';
let resentH1Eng = ' <b>RECENT POSTS</b>';

let POSTH1Az = ' <b>İNSTAGRAM POST </b> ';
let POSTH1Eng = ' <b>INSTAGRAM POST </b>';

let box2H6Az = ["<b>Seo Xidmətləri</b>", "<b>Sehifeler</b>", "<b>Haqqimizda</b>", "<b>Xidmetlerimiz</b>", "<b>Elaqe</b>"];
let box2H6Eng = ["<b>Seo Services</b>", "<b>PAGES</b>", "<b>ABOUT US</b>", "<b>SERVICES<b/>", "<>BLOG<b/>"];

let seoAz = ' <b> Seo Xidmetleri </b> ';
let seoEng = ' <b>Seo Services </b>';

let virtualAz = ' <b> Virtual Marketinq </b> ';
let virtualEng = ' <b>Virtual Marketing </b>';

let contentAz = ' <b> Məzmun İdarəetmə </b> ';
let contentEng = ' <b>Content Manage </b>';

let socialAz = ' <b> Sosial Mediya </b> ';
let socialEng = ' <b>Social Media </b>';

let blackAz = ' <b> Qara papaq seo </b> ';
let blackEng = ' <b>Black hat Seo </b>';

let linkAz = [' Başqa bir heyrətamiz blog yazisi', 'Başqa bir heyrətamiz blog yazisi ', 'Başqa bir heyrətamiz blog yazisi '];
let linkEng = ['Just another amazing blog post ', 'Just another amazing blog post ', 'Just another amazing blog post '];

let hrH3Az = ' <b> Bug somadhan © 2018. bütün hüquqlar qorunur</b> ';
let hrH3Eng = ' <b>Bug somadhan © 2018. all rights reserved';

let hedlinkAz = ' <b> <i class="fa-solid fa-calendar-days"></i> şənbə</b> ';
let hedlinkEng = ' <b> <i class="fa-solid fa-calendar-days"></i>sat-fri';





const multiLang = () => {
  if (Button.innerHTML == "AZ") {
    Button.innerHTML = "EN";

    for (let x = 0; x < az.length; x++) {
      navbar[x].innerHTML = az[x];
    }

    layerh1.innerHTML = layerh1Az;
    layerp.innerHTML = layerpAz;
    name1.innerHTML = name1Az;
    name2.innerHTML = name2Az;
    name3.innerHTML = name3Az;
    name4.innerHTML = name4Az;
    name5.innerHTML = name5Az;
    name6.innerHTML = name6Az;
    layer2H1.innerHTML = layer2H1Az;
    p1.innerHTML = p1Az;
    p2.innerHTML = p2Az;
    layer2H2.innerHTML = layer2H2Az;
    button1.innerHTML = button1Az;
    box2P2.innerHTML = box2P2Az;
    box2H1.innerHTML = box2H1Az;
    resentH1.innerHTML = resentH1Az;
    POSTH1.innerHTML = POSTH1Az;
    seo.innerHTML = seoAz;
    virtual.innerHTML = virtualAz;
    content.innerHTML = contentAz;
    social.innerHTML = socialAz;
    black.innerHTML = blackAz;

    for (let x = 0; x < linkAz.length; x++) {
      link[x].innerHTML = linkAz[x];
    }
    hrH3.innerHTML = hrH3Az;
    hedlink.innerHTML = hedlinkAz;




  } else {
    for (let index = 0; index < en.length; index++) {
      navbar[index].innerHTML = en[index];
    }
    Button.innerHTML = "AZ";
    layerh1.innerHTML = layerh1Eng;
    layerp.innerHTML = layerpEng;
    name1.innerHTML = name1Eng;
    name2.innerHTML = name2Eng;
    name3.innerHTML = name3Eng;
    name4.innerHTML = name4Eng;
    name5.innerHTML = name5Eng;
    name6.innerHTML = name6Eng;
    layer2H1.innerHTML = layer2H1Eng;
    p1.innerHTML = p1Eng;
    p2.innerHTML = p2Eng;
    layer2H2.innerHTML = layer2H2Eng;
    button1.innerHTML = button1Eng;
    box2P2.innerHTML = box2P2Eng;
    box2H1.innerHTML = box2H1Eng;
    resentH1.innerHTML = resentH1Eng;
    POSTH1.innerHTML = POSTH1Eng;
    seo.innerHTML = seoEng;
    virtual.innerHTML = virtualEng;
    content.innerHTML = contentEng;
    social.innerHTML = socialEng;
    black.innerHTML = blackEng;
    for (let x = 0; x < linkEng.length; x++) {
      link[x].innerHTML = linkEng[x];
    }
    hrH3.innerHTML = hrH3Eng;
    hedlink.innerHTML = hedlinkEng;
  }
};



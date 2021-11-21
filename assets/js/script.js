var stateCounts =[];
var statesTotal = 0;
var apiKey = "";
var zipGlobal ="";
var zipList ="";
var userinput;
var apiNum;

function zipLookup(){
  let requestUrl3 = `https://api.covidactnow.org/v2/counties.json?apiKey=6b5476d41dfb418d82fbaf1cfaa0071c`;    
    var userZip = document.getElementById('zipLoad').innerHTML;
    
    fetch(requestUrl3)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      let stateData = data.filter( elem => elem.state === "MN" );

      if(userZip==56510){
          apiNum =27107;
      }else if(userZip==55909){
          apiNum =27099;
      }else if(userZip==56110){
          apiNum =27105;
      }else if(userZip==55001){
          apiNum =27163;
      }else if(userZip==56430){
          apiNum =27021;
      }else if(userZip==56431){
          apiNum =27001;
      }else if(userZip==56433){
          apiNum =27057;
      }else if(userZip==56307){
          apiNum =27145;
      }else if(userZip==56007){
          apiNum =27047;
      }else if(userZip==56207){
          apiNum =27149;
      }else if(userZip==55301){
          apiNum =27171;
      }else if(userZip==55702){
          apiNum =27137;
      }else if(userZip==56009){
          apiNum =27047;
      }else if(userZip==56434){
          apiNum =27159;
      }else if(userZip==56308){
          apiNum =27041;
      }else if(userZip==55002){
          apiNum =27025;
      }else if(userZip==56111){
          apiNum =27063;
      }else if(userZip==55910){
          apiNum =27169;
      }else if(userZip==56710){
          apiNum =27089;
      }else if(userZip==56010){
          apiNum =27013;
      }else if(userZip==54001){
          apiNum =27119;
      }else if(userZip==55303){
          apiNum =27003;
      }else if(userZip==55304){
          apiNum =27003;
      }else if(userZip==55703){
          apiNum =27137;
      }else if(userZip==55302){
          apiNum =27171;
      }else if(userZip==55124){
          apiNum =27037;
      }else if(userZip==56208){
          apiNum =27151;
      }else if(userZip==56113){
          apiNum =27081;
      }else if(userZip==55112){
          apiNum =27123;
      }else if(userZip==55126){
          apiNum =27123;
      }else if(userZip==56713){
          apiNum =27089;
      }else if(userZip==55307){
          apiNum =27143;
      }else if(userZip==56309){
          apiNum =27051;
      }else if(userZip==55704){
          apiNum =27115;
      }else if(userZip==56209){
          apiNum =27067;
      }else if(userZip==56511){
          apiNum =27005;
      }else if(userZip==55705){
          apiNum =27137;
      }else if(userZip==55912){
          apiNum =27099;
      }else if(userZip==56114){
          apiNum =27101;
      }else if(userZip==56310){
          apiNum =27145;
      }else if(userZip==55706){
          apiNum =27137;
      }else if(userZip==56435){
          apiNum =27021;
      }else if(userZip==56714){
          apiNum =27135;
      }else if(userZip==56621){
          apiNum =27029;
      }else if(userZip==56115){
          apiNum =27083;
      }else if(userZip==54810){
          apiNum =27119;
      }else if(userZip==56514){
          apiNum =27027;
      }else if(userZip==55707){
          apiNum =27017;
      }else if(userZip==56311){
          apiNum =27051;
      }else if(userZip==56210){
          apiNum =27011;
      }else if(userZip==56515){
          apiNum =27111;
      }else if(userZip==56623){
          apiNum =27077;
      }else if(userZip==56401){
          apiNum =27035;
      }else if(userZip==56425){
          apiNum =27035;
      }else if(userZip==55003){
          apiNum =27163;
      }else if(userZip==56211){
          apiNum =27011;
      }else if(userZip==55601){
          apiNum =27075;
      }else if(userZip==56116){
          apiNum =27133;
      }else if(userZip==55308){
          apiNum =27141;
      }else if(userZip==56516){
          apiNum =27087;
      }else if(userZip==56312){
          apiNum =27145;
      }else if(userZip==56011){
          apiNum =27139;
      }else if(userZip==55027){
          apiNum =27049;
      }else if(userZip==56212){
          apiNum =27073;
      }else if(userZip==56517){
          apiNum =27119;
      }else if(userZip==56214){
          apiNum =27127;
      }else if(userZip==56601){
          apiNum =27007;
      }else if(userZip==56619){
          apiNum =27007;
      }else if(userZip==56626){
          apiNum =27021;
      }else if(userZip==56436){
          apiNum =27057;
      }else if(userZip==56215){
          apiNum =27151;
      }else if(userZip==56661){
          apiNum =27071;
      }else if(userZip==55985){
          apiNum =27039;
      }else if(userZip==56644){
          apiNum =27029;
      }else if(userZip==55063){
          apiNum =27115;
      }else if(userZip==56437){
          apiNum =27153;
      }else if(userZip==55005){
          apiNum =27003;
      }else if(userZip==56662){
          apiNum =27021;
      }else if(userZip==56627){
          apiNum =27071;
      }else if(userZip==55309){
          apiNum =27141;
      }else if(userZip==56117){
          apiNum =27105;
      }else if(userZip==56628){
          apiNum =27061;
      }else if(userZip==56639){
          apiNum =27061;
      }else if(userZip==56118){
          apiNum =27033;
      }else if(userZip==56630){
          apiNum =27007;
      }else if(userZip==56686){
          apiNum =27077;
      }else if(userZip==56629){
          apiNum =27071;
      }else if(userZip==55110){
          apiNum =27123;
      }else if(userZip==55310){
          apiNum =27129;
      }else if(userZip==55336){
          apiNum =27085;
      }else if(userZip==55708){
          apiNum =27137;
      }else if(userZip==55917){
          apiNum =27147;
      }else if(userZip==56654){
          apiNum =27071;
      }else if(userZip==56663){
          apiNum =27007;
      }else if(userZip==55014){
          apiNum =27003;
      }else if(userZip==55434){
          apiNum =27003;
      }else if(userZip==55449){
          apiNum =27003;
      }else if(userZip==56216){
          apiNum =27067;
      }else if(userZip==55420){
          apiNum =27053;
      }else if(userZip==55425){
          apiNum =27053;
      }else if(userZip==55431){
          apiNum =27053;
      }else if(userZip==55435){
          apiNum =27053;
      }else if(userZip==55437){
          apiNum =27053;
      }else if(userZip==55438){
          apiNum =27053;
      }else if(userZip==55439){
          apiNum =27053;
      }else if(userZip==56013){
          apiNum =27043;
      }else if(userZip==56464){
          apiNum =27159;
      }else if(userZip==56518){
          apiNum =27111;
      }else if(userZip==56313){
          apiNum =27095;
      }else if(userZip==55946){
          apiNum =27049;
      }else if(userZip==55709){
          apiNum =27061;
      }else if(userZip==56519){
          apiNum =27107;
      }else if(userZip==56314){
          apiNum =27097;
      }else if(userZip==56631){
          apiNum =27061;
      }else if(userZip==56672){
          apiNum =27021;
      }else if(userZip==56218){
          apiNum =27073;
      }else if(userZip==55006){
          apiNum =27059;
      }else if(userZip==55056){
          apiNum =27025;
      }else if(userZip==56315){
          apiNum =27041;
      }else if(userZip==55971){
          apiNum =27045;
      }else if(userZip==56520){
          apiNum =27167;
      }else if(userZip==56472){
          apiNum =27035;
      }else if(userZip==55735){
          apiNum =27115;
      }else if(userZip==55779){
          apiNum =27137;
      }else if(userZip==56655){
          apiNum =27021;
      }else if(userZip==56119){
          apiNum =27105;
      }else if(userZip==58104){
          apiNum =27021;
      }else if(userZip==56014){
          apiNum =27043;
      }else if(userZip==55602){
          apiNum =27137;
      }else if(userZip==55710){
          apiNum =27137;
      }else if(userZip==55007){
          apiNum =27115;
      }else if(userZip==55746){
          apiNum =27137;
      }else if(userZip==55428){
          apiNum =27053;
      }else if(userZip==55429){
          apiNum =27053;
      }else if(userZip==55430){
          apiNum =27053;
      }else if(userZip==55443){
          apiNum =27053;
      }else if(userZip==55444){
          apiNum =27053;
      }else if(userZip==55445){
          apiNum =27053;
      }else if(userZip==56715){
          apiNum =27125;
      }else if(userZip==55711){
          apiNum =27137;
      }else if(userZip==56316){
          apiNum =27145;
      }else if(userZip==56438){
          apiNum =27153;
      }else if(userZip==56219){
          apiNum =27155;
      }else if(userZip==55918){
          apiNum =27099;
      }else if(userZip==55919){
          apiNum =27055;
      }else if(userZip==55312){
          apiNum =27085;
      }else if(userZip==55712){
          apiNum =27115;
      }else if(userZip==55051){
          apiNum =27065;
      }else if(userZip==56317){
          apiNum =27097;
      }else if(userZip==55313){
          apiNum =27171;
      }else if(userZip==55314){
          apiNum =27129;
      }else if(userZip==55713){
          apiNum =27137;
      }else if(userZip==55330){
          apiNum =27141;
      }else if(userZip==55306){
          apiNum =27037;
      }else if(userZip==55337){
          apiNum =27037;
      }else if(userZip==56318){
          apiNum =27153;
      }else if(userZip==56567){
          apiNum =27111;
      }else if(userZip==56120){
          apiNum =27165;
      }else if(userZip==55920){
          apiNum =27109;
      }else if(userZip==55921){
          apiNum =27055;
      }else if(userZip==56521){
          apiNum =27005;
      }else if(userZip==55716){
          apiNum =27061;
      }else if(userZip==55008){
          apiNum =27059;
      }else if(userZip==56583){
          apiNum =27155;
      }else if(userZip==56522){
          apiNum =27167;
      }else if(userZip==56220){
          apiNum =27173;
      }else if(userZip==55944){
          apiNum =27039;
      }else if(userZip==55009){
          apiNum =27049;
      }else if(userZip==55922){
          apiNum =27045;
      }else if(userZip==55717){
          apiNum =27137;
      }else if(userZip==55965){
          apiNum =27045;
      }else if(userZip==56537){
          apiNum =27111;
      }else if(userZip==56319){
          apiNum =27041;
      }else if(userZip==55718){
          apiNum =27017;
      }else if(userZip==55315){
          apiNum =27019;
      }else if(userZip==56633){
          apiNum =27021;
      }else if(userZip==55010){
          apiNum =27037;
      }else if(userZip==55011){
          apiNum =27003;
      }else if(userZip==55350){
          apiNum =27085;
      }else if(userZip==55736){
          apiNum =27137;
      }else if(userZip==55012){
          apiNum =27025;
      }else if(userZip==55038){
          apiNum =27003;
      }else if(userZip==56121){
          apiNum =27091;
      }else if(userZip==55316){
          apiNum =27053;
      }else if(userZip==56122){
          apiNum =27101;
      }else if(userZip==55317){
          apiNum =27019;
      }else if(userZip==55318){
          apiNum =27019;
      }else if(userZip==55923){
          apiNum =27045;
      }else if(userZip==55975){
          apiNum =27045;
      }else if(userZip==56474){
          apiNum =27021;
      }else if(userZip==55013){
          apiNum =27025;
      }else if(userZip==55719){
          apiNum =27137;
      }else if(userZip==56221){
          apiNum =27149;
      }else if(userZip==54837){
          apiNum =27119;
      }else if(userZip==56222){
          apiNum =27023;
      }else if(userZip==55924){
          apiNum =27039;
      }else if(userZip==56440){
          apiNum =27153;
      }else if(userZip==55787){
          apiNum =27001;
      }else if(userZip==56223){
          apiNum =27173;
      }else if(userZip==56016){
          apiNum =27047;
      }else if(userZip==54005){
          apiNum =27119;
      }else if(userZip==55319){
          apiNum =27141;
      }else if(userZip==56634){
          apiNum =27029;
      }else if(userZip==55320){
          apiNum =27171;
      }else if(userZip==56224){
          apiNum =27127;
      }else if(userZip==56017){
          apiNum =27079;
      }else if(userZip==56523){
          apiNum =27119;
      }else if(userZip==56225){
          apiNum =27011;
      }else if(userZip==56524){
          apiNum =27111;
      }else if(userZip==56226){
          apiNum =27151;
      }else if(userZip==55720){
          apiNum =27017;
      }else if(userZip==56475){
          apiNum =27097;
      }else if(userZip==56652){
          apiNum =27029;
      }else if(userZip==55068){
          apiNum =27037;
      }else if(userZip==56085){
          apiNum =27015;
      }else if(userZip==55721){
          apiNum =27061;
      }else if(userZip==55321){
          apiNum =27171;
      }else if(userZip==56320){
          apiNum =27145;
      }else if(userZip==55722){
          apiNum =27061;
      }else if(userZip==56321){
          apiNum =27145;
      }else if(userZip==55322){
          apiNum =27019;
      }else if(userZip==55421){
          apiNum =27003;
      }else if(userZip==55025){
          apiNum =27003;
      }else if(userZip==55763){
          apiNum =27137;
      }else if(userZip==56019){
          apiNum =27015;
      }else if(userZip==56525){
          apiNum =27027;
      }else if(userZip==56020){
          apiNum =27047;
      }else if(userZip==55723){
          apiNum =27137;
      }else if(userZip==55769){
          apiNum =27061;
      }else if(userZip==55433){
          apiNum =27003;
      }else if(userZip==55448){
          apiNum =27003;
      }else if(userZip==55073){
          apiNum =27163;
      }else if(userZip==55311){
          apiNum =27053;
      }else if(userZip==55340){
          apiNum =27053;
      }else if(userZip==55357){
          apiNum =27053;
      }else if(userZip==55374){
          apiNum =27053;
      }else if(userZip==56572){
          apiNum =27111;
      }else if(userZip==55752){
          apiNum =27061;
      }else if(userZip==56227){
          apiNum =27011;
      }else if(userZip==56228){
          apiNum =27093;
      }else if(userZip==55016){
          apiNum =27163;
      }else if(userZip==55724){
          apiNum =27137;
      }else if(userZip==56229){
          apiNum =27083;
      }else if(userZip==56021){
          apiNum =27103;
      }else if(userZip==55725){
          apiNum =27137;
      }else if(userZip==55604){
          apiNum =27031;
      }else if(userZip==55726){
          apiNum =27017;
      }else if(userZip==56716){
          apiNum =27119;
      }else if(userZip==56441){
          apiNum =27035;
      }else if(userZip==56442){
          apiNum =27035;
      }else if(userZip==55422){
          apiNum =27053;
      }else if(userZip==55427){
          apiNum =27053;
      }else if(userZip==55323){
          apiNum =27053;
      }else if(userZip==56123){
          apiNum =27101;
      }else if(userZip==56443){
          apiNum =27097;
      }else if(userZip==55771){
          apiNum =27137;
      }else if(userZip==56444){
          apiNum =27035;
      }else if(userZip==56323){
          apiNum =27121;
      }else if(userZip==55925){
          apiNum =27169;
      }else if(userZip==55017){
          apiNum =27059;
      }else if(userZip==56549){
          apiNum =27027;
      }else if(userZip==56324){
          apiNum =27111;
      }else if(userZip==55072){
          apiNum =27115;
      }else if(userZip==56230){
          apiNum =27129;
      }else if(userZip==56231){
          apiNum =27151;
      }else if(userZip==56022){
          apiNum =27165;
      }else if(userZip==55324){
          apiNum =27093;
      }else if(userZip==55325){
          apiNum =27093;
      }else if(userZip==56232){
          apiNum =27073;
      }else if(userZip==55327){
          apiNum =27053;
      }else if(userZip==55369){
          apiNum =27053;
      }else if(userZip==56271){
          apiNum =27151;
      }else if(userZip==55331){
          apiNum =27053;
      }else if(userZip==55391){
          apiNum =27053;
      }else if(userZip==56527){
          apiNum =27111;
      }else if(userZip==56636){
          apiNum =27061;
      }else if(userZip==55049){
          apiNum =27147;
      }else if(userZip==55328){
          apiNum =27171;
      }else if(userZip==56023){
          apiNum =27043;
      }else if(userZip==56101){
          apiNum =27033;
      }else if(userZip==56283){
          apiNum =27127;
      }else if(userZip==55783){
          apiNum =27115;
      }else if(userZip==55018){
          apiNum =27049;
      }else if(userZip==56528){
          apiNum =27111;
      }else if(userZip==56501){
          apiNum =27005;
      }else if(userZip==56502){
          apiNum =27005;
      }else if(userZip==55926){
          apiNum =27099;
      }else if(userZip==56529){
          apiNum =27027;
      }else if(userZip==55927){
          apiNum =27039;
      }else if(userZip==56720){
          apiNum =27069;
      }else if(userZip==56235){
          apiNum =27149;
      }else if(userZip==56470){
          apiNum =27057;
      }else if(userZip==55960){
          apiNum =27109;
      }else if(userZip==55929){
          apiNum =27109;
      }else if(userZip==56125){
          apiNum =27101;
      }else if(userZip==55947){
          apiNum =27055;
      }else if(userZip==55701){
          apiNum =27137;
      }else if(userZip==55801){
          apiNum =27137;
      }else if(userZip==55802){
          apiNum =27137;
      }else if(userZip==55803){
          apiNum =27137;
      }else if(userZip==55804){
          apiNum =27137;
      }else if(userZip==55805){
          apiNum =27137;
      }else if(userZip==55806){
          apiNum =27137;
      }else if(userZip==55807){
          apiNum =27137;
      }else if(userZip==55808){
          apiNum =27137;
      }else if(userZip==55810){
          apiNum =27137;
      }else if(userZip==55811){
          apiNum =27137;
      }else if(userZip==55812){
          apiNum =27137;
      }else if(userZip==55814){
          apiNum =27137;
      }else if(userZip==55815){
          apiNum =27137;
      }else if(userZip==55816){
          apiNum =27137;
      }else if(userZip==55981){
          apiNum =27157;
      }else if(userZip==56236){
          apiNum =27155;
      }else if(userZip==55019){
          apiNum =27131;
      }else if(userZip==56131){
          apiNum =27101;
      }else if(userZip==56127){
          apiNum =27091;
      }else if(userZip==55756){
          apiNum =27115;
      }else if(userZip==56667){
          apiNum =27007;
      }else if(userZip==55120){
          apiNum =27037;
      }else if(userZip==55121){
          apiNum =27037;
      }else if(userZip==55122){
          apiNum =27037;
      }else if(userZip==55123){
          apiNum =27037;
      }else if(userZip==56446){
          apiNum =27153;
      }else if(userZip==56024){
          apiNum =27013;
      }else if(userZip==55092){
          apiNum =27025;
      }else if(userZip==56721){
          apiNum =27119;
      }else if(userZip==55760){
          apiNum =27001;
      }else if(userZip==56025){
          apiNum =27043;
      }else if(userZip==56237){
          apiNum =27173;
      }else if(userZip==56687){
          apiNum =27007;
      }else if(userZip==55343){
          apiNum =27053;
      }else if(userZip==55344){
          apiNum =27053;
      }else if(userZip==55346){
          apiNum =27053;
      }else if(userZip==55347){
          apiNum =27053;
      }else if(userZip==55329){
          apiNum =27093;
      }else if(userZip==56128){
          apiNum =27117;
      }else if(userZip==55410){
          apiNum =27053;
      }else if(userZip==55416){
          apiNum =27053;
      }else if(userZip==55423){
          apiNum =27053;
      }else if(userZip==55424){
          apiNum =27053;
      }else if(userZip==55436){
          apiNum =27053;
      }else if(userZip==55931){
          apiNum =27055;
      }else if(userZip==56531){
          apiNum =27051;
      }else if(userZip==55932){
          apiNum =27157;
      }else if(userZip==56533){
          apiNum =27111;
      }else if(userZip==55330){
          apiNum =27003;
      }else if(userZip==55054){
          apiNum =27139;
      }else if(userZip==55933){
          apiNum =27099;
      }else if(userZip==56026){
          apiNum =27147;
      }else if(userZip==55766){
          apiNum =27137;
      }else if(userZip==56129){
          apiNum =27105;
      }else if(userZip==56027){
          apiNum =27043;
      }else if(userZip==56325){
          apiNum =27145;
      }else if(userZip==55731){
          apiNum =27137;
      }else if(userZip==56028){
          apiNum =27079;
      }else if(userZip==55732){
          apiNum =27137;
      }else if(userZip==56447){
          apiNum =27035;
      }else if(userZip==56029){
          apiNum =27047;
      }else if(userZip==56534){
          apiNum =27111;
      }else if(userZip==56725){
          apiNum =27113;
      }else if(userZip==56535){
          apiNum =27119;
      }else if(userZip==55733){
          apiNum =27017;
      }else if(userZip==56030){
          apiNum =27015;
      }else if(userZip==56073){
          apiNum =27015;
      }else if(userZip==55089){
          apiNum =27049;
      }else if(userZip==56722){
          apiNum =27119;
      }else if(userZip==56266){
          apiNum =27127;
      }else if(userZip==56326){
          apiNum =27041;
      }else if(userZip==55734){
          apiNum =27137;
      }else if(userZip==55934){
          apiNum =27109;
      }else if(userZip==55332){
          apiNum =27129;
      }else if(userZip==56031){
          apiNum =27091;
      }else if(userZip==56075){
          apiNum =27091;
      }else if(userZip==56584){
          apiNum =27107;
      }else if(userZip==55108){
          apiNum =27123;
      }else if(userZip==55113){
          apiNum =27123;
      }else if(userZip==55796){
          apiNum =27137;
      }else if(userZip==58102){
          apiNum =27021;
      }else if(userZip==58103){
          apiNum =27021;
      }else if(userZip==58105){
          apiNum =27021;
      }else if(userZip==58106){
          apiNum =27021;
      }else if(userZip==58107){
          apiNum =27021;
      }else if(userZip==58108){
          apiNum =27021;
      }else if(userZip==58122){
          apiNum =27021;
      }else if(userZip==55021){
          apiNum =27131;
      }else if(userZip==55024){
          apiNum =27037;
      }else if(userZip==56327){
          apiNum =27041;
      }else if(userZip==56641){
          apiNum =27021;
      }else if(userZip==56536){
          apiNum =27027;
      }else if(userZip==56538){
          apiNum =27111;
      }else if(userZip==56540){
          apiNum =27119;
      }else if(userZip==56448){
          apiNum =27035;
      }else if(userZip==55990){
          apiNum =27045;
      }else if(userZip==55603){
          apiNum =27075;
      }else if(userZip==56723){
          apiNum =27119;
      }else if(userZip==56328){
          apiNum =27097;
      }else if(userZip==56541){
          apiNum =27107;
      }else if(userZip==56170){
          apiNum =27117;
      }else if(userZip==56758){
          apiNum =27089;
      }else if(userZip==56329){
          apiNum =27009;
      }else if(userZip==56357){
          apiNum =27009;
      }else if(userZip==55738){
          apiNum =27137;
      }else if(userZip==56660){
          apiNum =27071;
      }else if(userZip==55025){
          apiNum =27163;
      }else if(userZip==56330){
          apiNum =27095;
      }else if(userZip==56449){
          apiNum =27035;
      }else if(userZip==56542){
          apiNum =27119;
      }else if(userZip==55935){
          apiNum =27045;
      }else if(userZip==56543){
          apiNum =27167;
      }else if(userZip==55074){
          apiNum =27025;
      }else if(userZip==55936){
          apiNum =27099;
      }else if(userZip==55333){
          apiNum =27129;
      }else if(userZip==56544){
          apiNum =27005;
      }else if(userZip==56032){
          apiNum =27047;
      }else if(userZip==56331){
          apiNum =27145;
      }else if(userZip==55979){
          apiNum =27169;
      }else if(userZip==55432){
          apiNum =27003;
      }else if(userZip==55026){
          apiNum =27049;
      }else if(userZip==56033){
          apiNum =27043;
      }else if(userZip==56034){
          apiNum =27013;
      }else if(userZip==56332){
          apiNum =27041;
      }else if(userZip==56450){
          apiNum =27035;
      }else if(userZip==56132){
          apiNum =27083;
      }else if(userZip==56545){
          apiNum =27107;
      }else if(userZip==56724){
          apiNum =27089;
      }else if(userZip==55334){
          apiNum =27143;
      }else if(userZip==56035){
          apiNum =27047;
      }else if(userZip==56364){
          apiNum =27097;
      }else if(userZip==56546){
          apiNum =27027;
      }else if(userZip==56239){
          apiNum =27083;
      }else if(userZip==55335){
          apiNum =27143;
      }else if(userZip==55741){
          apiNum =27137;
      }else if(userZip==56333){
          apiNum =27009;
      }else if(userZip==56036){
          apiNum =27047;
      }else if(userZip==56334){
          apiNum =27121;
      }else if(userZip==56547){
          apiNum =27027;
      }else if(userZip==55426){
          apiNum =27053;
      }else if(userZip==56681){
          apiNum =27061;
      }else if(userZip==56037){
          apiNum =27013;
      }else if(userZip==55742){
          apiNum =27061;
      }else if(userZip==55987){
          apiNum =27169;
      }else if(userZip==56240){
          apiNum =27011;
      }else if(userZip==56039){
          apiNum =27091;
      }else if(userZip==55605){
          apiNum =27031;
      }else if(userZip==55730){
          apiNum =27061;
      }else if(userZip==55744){
          apiNum =27061;
      }else if(userZip==55745){
          apiNum =27061;
      }else if(userZip==55029){
          apiNum =27059;
      }else if(userZip==55939){
          apiNum =27045;
      }else if(userZip==56241){
          apiNum =27173;
      }else if(userZip==55115){
          apiNum =27163;
      }else if(userZip==55030){
          apiNum =27115;
      }else if(userZip==55036){
          apiNum =27115;
      }else if(userZip==55338){
          apiNum =27143;
      }else if(userZip==56726){
          apiNum =27135;
      }else if(userZip==55572){
          apiNum =27053;
      }else if(userZip==55373){
          apiNum =27171;
      }else if(userZip==56335){
          apiNum =27145;
      }else if(userZip==55764){
          apiNum =27061;
      }else if(userZip==55071){
          apiNum =27163;
      }else if(userZip==56336){
          apiNum =27153;
      }else if(userZip==56243){
          apiNum =27093;
      }else if(userZip==56727){
          apiNum =27089;
      }else if(userZip==56646){
          apiNum =27119;
      }else if(userZip==56461){
          apiNum =27057;
      }else if(userZip==56452){
          apiNum =27021;
      }else if(userZip==56151){
          apiNum =27101;
      }else if(userZip==56647){
          apiNum =27007;
      }else if(userZip==56728){
          apiNum =27069;
      }else if(userZip==56740){
          apiNum =27069;
      }else if(userZip==56755){
          apiNum =27069;
      }else if(userZip==56729){
          apiNum =27069;
      }else if(userZip==56548){
          apiNum =27107;
      }else if(userZip==55339){
          apiNum =27019;
      }else if(userZip==55991){
          apiNum =27157;
      }else if(userZip==55031){
          apiNum =27037;
      }else if(userZip==56244){
          apiNum =27149;
      }else if(userZip==56245){
          apiNum =27173;
      }else if(userZip==55341){
          apiNum =27171;
      }else if(userZip==56041){
          apiNum =27015;
      }else if(userZip==56653){
          apiNum =27071;
      }else if(userZip==56134){
          apiNum =27133;
      }else if(userZip==55032){
          apiNum =27025;
      }else if(userZip==56042){
          apiNum =27047;
      }else if(userZip==55033){
          apiNum =27037;
      }else if(userZip==56164){
          apiNum =27117;
      }else if(userZip==55060){
          apiNum =27147;
      }else if(userZip==56273){
          apiNum =27067;
      }else if(userZip==55940){
          apiNum =27039;
      }else if(userZip==55748){
          apiNum =27001;
      }else if(userZip==56043){
          apiNum =27047;
      }else if(userZip==55342){
          apiNum =27129;
      }else if(userZip==56071){
          apiNum =27139;
      }else if(userZip==56044){
          apiNum =27143;
      }else if(userZip==56136){
          apiNum =27081;
      }else if(userZip==56550){
          apiNum =27107;
      }else if(userZip==56551){
          apiNum =27111;
      }else if(userZip==56248){
          apiNum =27051;
      }else if(userZip==56137){
          apiNum =27063;
      }else if(userZip==56453){
          apiNum =27153;
      }else if(userZip==55747){
          apiNum =27137;
      }else if(userZip==55976){
          apiNum =27109;
      }else if(userZip==55949){
          apiNum =27045;
      }else if(userZip==56338){
          apiNum =27097;
      }else if(userZip==56138){
          apiNum =27133;
      }else if(userZip==55037){
          apiNum =27115;
      }else if(userZip==56552){
          apiNum =27027;
      }else if(userZip==56339){
          apiNum =27051;
      }else if(userZip==55941){
          apiNum =27055;
      }else if(userZip==56340){
          apiNum =27145;
      }else if(userZip==56139){
          apiNum =27117;
      }else if(userZip==56045){
          apiNum =27047;
      }else if(userZip==56249){
          apiNum =27151;
      }else if(userZip==55786){
          apiNum =27061;
      }else if(userZip==56341){
          apiNum =27041;
      }else if(userZip==56738){
          apiNum =27089;
      }else if(userZip==55749){
          apiNum =27017;
      }else if(userZip==55797){
          apiNum =27017;
      }else if(userZip==55942){
          apiNum =27169;
      }else if(userZip==56046){
          apiNum =27147;
      }else if(userZip==55305){
          apiNum =27053;
      }else if(userZip==55345){
          apiNum =27053;
      }else if(userZip==55943){
          apiNum =27055;
      }else if(userZip==55606){
          apiNum =27031;
      }else if(userZip==55349){
          apiNum =27171;
      }else if(userZip==55750){
          apiNum =27137;
      }else if(userZip==55038){
          apiNum =27163;
      }else if(userZip==56731){
          apiNum =27069;
      }else if(userZip==56047){
          apiNum =27043;
      }else if(userZip==56140){
          apiNum =27117;
      }else if(userZip==55359){
          apiNum =27053;
      }else if(userZip==56649){
          apiNum =27071;
      }else if(userZip==55076){
          apiNum =27037;
      }else if(userZip==55077){
          apiNum =27037;
      }else if(userZip==56141){
          apiNum =27101;
      }else if(userZip==55751){
          apiNum =27137;
      }else if(userZip==56455){
          apiNum =27035;
      }else if(userZip==55607){
          apiNum =27075;
      }else if(userZip==55040){
          apiNum =27059;
      }else if(userZip==56342){
          apiNum =27095;
      }else if(userZip==56142){
          apiNum =27081;
      }else if(userZip==56143){
          apiNum =27063;
      }else if(userZip==56048){
          apiNum =27161;
      }else if(userZip==56144){
          apiNum =27133;
      }else if(userZip==56145){
          apiNum =27033;
      }else if(userZip==56456){
          apiNum =27035;
      }else if(userZip==55352){
          apiNum =27139;
      }else if(userZip==56669){
          apiNum =27071;
      }else if(userZip==56146){
          apiNum =27105;
      }else if(userZip==56251){
          apiNum =27067;
      }else if(userZip==56732){
          apiNum =27069;
      }else if(userZip==56050){
          apiNum =27079;
      }else if(userZip==55753){
          apiNum =27061;
      }else if(userZip==56650){
          apiNum =27007;
      }else if(userZip==55945){
          apiNum =27157;
      }else if(userZip==56733){
          apiNum =27069;
      }else if(userZip==56147){
          apiNum =27133;
      }else if(userZip==56343){
          apiNum =27041;
      }else if(userZip==56553){
          apiNum =27167;
      }else if(userZip==56252){
          apiNum =27151;
      }else if(userZip==55757){
          apiNum =27017;
      }else if(userZip==56051){
          apiNum =27043;
      }else if(userZip==56052){
          apiNum =27131;
      }else if(userZip==55353){
          apiNum =27145;
      }else if(userZip==55758){
          apiNum =27137;
      }else if(userZip==55609){
          apiNum =27075;
      }else if(userZip==55790){
          apiNum =27137;
      }else if(userZip==56056){
          apiNum =27165;
      }else if(userZip==56054){
          apiNum =27103;
      }else if(userZip==56149){
          apiNum =27081;
      }else if(userZip==56734){
          apiNum =27069;
      }else if(userZip==55041){
          apiNum =27157;
      }else if(userZip==56055){
          apiNum =27013;
      }else if(userZip==56468){
          apiNum =27035;
      }else if(userZip==55042){
          apiNum =27163;
      }else if(userZip==56458){
          apiNum =27057;
      }else if(userZip==56459){
          apiNum =27035;
      }else if(userZip==56253){
          apiNum =27067;
      }else if(userZip==56554){
          apiNum =27005;
      }else if(userZip==55043){
          apiNum =27163;
      }else if(userZip==56150){
          apiNum =27063;
      }else if(userZip==55044){
          apiNum =27037;
      }else if(userZip==56152){
          apiNum =27127;
      }else if(userZip==56678){
          apiNum =27007;
      }else if(userZip==56735){
          apiNum =27069;
      }else if(userZip==55128){
          apiNum =27163;
      }else if(userZip==55950){
          apiNum =27099;
      }else if(userZip==56673){
          apiNum =27135;
      }else if(userZip==56344){
          apiNum =27097;
      }else if(userZip==56057){
          apiNum =27079;
      }else if(userZip==55951){
          apiNum =27099;
      }else if(userZip==56058){
          apiNum =27079;
      }else if(userZip==56484){
          apiNum =27021;
      }else if(userZip==56651){
          apiNum =27087;
      }else if(userZip==55079){
          apiNum =27025;
      }else if(userZip==56153){
          apiNum =27105;
      }else if(userZip==55354){
          apiNum =27085;
      }else if(userZip==55952){
          apiNum =27169;
      }else if(userZip==56060){
          apiNum =27165;
      }else if(userZip==56469){
          apiNum =27001;
      }else if(userZip==55118){
          apiNum =27037;
      }else if(userZip==55045){
          apiNum =27025;
      }else if(userZip==56155){
          apiNum =27105;
      }else if(userZip==55355){
          apiNum =27093;
      }else if(userZip==55109){
          apiNum =27123;
      }else if(userZip==55117){
          apiNum =27123;
      }else if(userZip==56345){
          apiNum =27097;
      }else if(userZip==55614){
          apiNum =27075;
      }else if(userZip==56347){
          apiNum =27153;
      }else if(userZip==55356){
          apiNum =27053;
      }else if(userZip==55046){
          apiNum =27131;
      }else if(userZip==55595){
          apiNum =27053;
      }else if(userZip==55596){
          apiNum =27053;
      }else if(userZip==55597){
          apiNum =27053;
      }else if(userZip==55598){
          apiNum =27053;
      }else if(userZip==55599){
          apiNum =27053;
      }else if(userZip==56256){
          apiNum =27073;
      }else if(userZip==56349){
          apiNum =27121;
      }else if(userZip==56255){
          apiNum =27127;
      }else if(userZip==54853){
          apiNum =27119;
      }else if(userZip==55612){
          apiNum =27031;
      }else if(userZip==56156){
          apiNum =27133;
      }else if(userZip==55953){
          apiNum =27099;
      }else if(userZip==56157){
          apiNum =27083;
      }else if(userZip==55954){
          apiNum =27045;
      }else if(userZip==55785){
          apiNum =27021;
      }else if(userZip==56062){
          apiNum =27165;
      }else if(userZip==56063){
          apiNum =27013;
      }else if(userZip==56158){
          apiNum =27133;
      }else if(userZip==56557){
          apiNum =27087;
      }else if(userZip==56586){
          apiNum =27111;
      }else if(userZip==56001){
          apiNum =27013;
      }else if(userZip==56002){
          apiNum =27013;
      }else if(userZip==56006){
          apiNum =27013;
      }else if(userZip==56003){
          apiNum =27103;
      }else if(userZip==55955){
          apiNum =27039;
      }else if(userZip==56467){
          apiNum =27057;
      }else if(userZip==55569){
          apiNum =27053;
      }else if(userZip==55358){
          apiNum =27171;
      }else if(userZip==55348){
          apiNum =27053;
      }else if(userZip==55570){
          apiNum =27053;
      }else if(userZip==55571){
          apiNum =27053;
      }else if(userZip==55574){
          apiNum =27053;
      }else if(userZip==55576){
          apiNum =27053;
      }else if(userZip==55578){
          apiNum =27053;
      }else if(userZip==55579){
          apiNum =27053;
      }else if(userZip==55593){
          apiNum =27053;
      }else if(userZip==55393){
          apiNum =27171;
      }else if(userZip==55592){
          apiNum =27171;
      }else if(userZip==56065){
          apiNum =27013;
      }else if(userZip==55106){
          apiNum =27123;
      }else if(userZip==55119){
          apiNum =27123;
      }else if(userZip==55144){
          apiNum =27123;
      }else if(userZip==56657){
          apiNum =27061;
      }else if(userZip==56658){
          apiNum =27071;
      }else if(userZip==56257){
          apiNum =27073;
      }else if(userZip==55047){
          apiNum =27163;
      }else if(userZip==56258){
          apiNum =27083;
      }else if(userZip==56659){
          apiNum =27061;
      }else if(userZip==55360){
          apiNum =27019;
      }else if(userZip==56260){
          apiNum =27023;
      }else if(userZip==55956){
          apiNum =27157;
      }else if(userZip==56350){
          apiNum =27001;
      }else if(userZip==56556){
          apiNum =27119;
      }else if(userZip==55765){
          apiNum =27137;
      }else if(userZip==55441){
          apiNum =27053;
      }else if(userZip==56352){
          apiNum =27145;
      }else if(userZip==55150){
          apiNum =27037;
      }else if(userZip==56736){
          apiNum =27119;
      }else if(userZip==56093){
          apiNum =27161;
      }else if(userZip==56465){
          apiNum =27035;
      }else if(userZip==56737){
          apiNum =27089;
      }else if(userZip==55009){
          apiNum =27037;
      }else if(userZip==56353){
          apiNum =27095;
      }else if(userZip==56262){
          apiNum =27023;
      }else if(userZip==54858){
          apiNum =27119;
      }else if(userZip==55957){
          apiNum =27157;
      }else if(userZip==56263){
          apiNum =27127;
      }else if(userZip==56354){
          apiNum =27041;
      }else if(userZip==55401){
          apiNum =27053;
      }else if(userZip==55402){
          apiNum =27053;
      }else if(userZip==55403){
          apiNum =27053;
      }else if(userZip==55404){
          apiNum =27053;
      }else if(userZip==55405){
          apiNum =27053;
      }else if(userZip==55406){
          apiNum =27053;
      }else if(userZip==55407){
          apiNum =27053;
      }else if(userZip==55408){
          apiNum =27053;
      }else if(userZip==55409){
          apiNum =27053;
      }else if(userZip==55411){
          apiNum =27053;
      }else if(userZip==55412){
          apiNum =27053;
      }else if(userZip==55413){
          apiNum =27053;
      }else if(userZip==55414){
          apiNum =27053;
      }else if(userZip==55415){
          apiNum =27053;
      }else if(userZip==55417){
          apiNum =27053;
      }else if(userZip==55418){
          apiNum =27053;
      }else if(userZip==55419){
          apiNum =27053;
      }else if(userZip==55440){
          apiNum =27053;
      }else if(userZip==55442){
          apiNum =27053;
      }else if(userZip==55446){
          apiNum =27053;
      }else if(userZip==55447){
          apiNum =27053;
      }else if(userZip==55450){
          apiNum =27053;
      }else if(userZip==55454){
          apiNum =27053;
      }else if(userZip==55455){
          apiNum =27053;
      }else if(userZip==55458){
          apiNum =27053;
      }else if(userZip==55459){
          apiNum =27053;
      }else if(userZip==55460){
          apiNum =27053;
      }else if(userZip==55467){
          apiNum =27053;
      }else if(userZip==55468){
          apiNum =27053;
      }else if(userZip==55470){
          apiNum =27053;
      }else if(userZip==55472){
          apiNum =27053;
      }else if(userZip==55473){
          apiNum =27053;
      }else if(userZip==55474){
          apiNum =27053;
      }else if(userZip==55478){
          apiNum =27053;
      }else if(userZip==55479){
          apiNum =27053;
      }else if(userZip==55480){
          apiNum =27053;
      }else if(userZip==55483){
          apiNum =27053;
      }else if(userZip==55484){
          apiNum =27053;
      }else if(userZip==55485){
          apiNum =27053;
      }else if(userZip==55486){
          apiNum =27053;
      }else if(userZip==55487){
          apiNum =27053;
      }else if(userZip==55488){
          apiNum =27053;
      }else if(userZip==56264){
          apiNum =27083;
      }else if(userZip==55959){
          apiNum =27169;
      }else if(userZip==56068){
          apiNum =27043;
      }else if(userZip==55361){
          apiNum =27053;
      }else if(userZip==55387){
          apiNum =27019;
      }else if(userZip==55388){
          apiNum =27019;
      }else if(userZip==55364){
          apiNum =27053;
      }else if(userZip==55375){
          apiNum =27053;
      }else if(userZip==56265){
          apiNum =27023;
      }else if(userZip==56069){
          apiNum =27079;
      }else if(userZip==55362){
          apiNum =27171;
      }else if(userZip==55365){
          apiNum =27171;
      }else if(userZip==55565){
          apiNum =27171;
      }else if(userZip==55580){
          apiNum =27171;
      }else if(userZip==55581){
          apiNum =27171;
      }else if(userZip==55582){
          apiNum =27171;
      }else if(userZip==55584){
          apiNum =27171;
      }else if(userZip==55585){
          apiNum =27171;
      }else if(userZip==55586){
          apiNum =27171;
      }else if(userZip==55587){
          apiNum =27171;
      }else if(userZip==55588){
          apiNum =27171;
      }else if(userZip==55589){
          apiNum =27171;
      }else if(userZip==55590){
          apiNum =27171;
      }else if(userZip==55591){
          apiNum =27171;
      }else if(userZip==55363){
          apiNum =27171;
      }else if(userZip==56560){
          apiNum =27027;
      }else if(userZip==56561){
          apiNum =27027;
      }else if(userZip==56562){
          apiNum =27027;
      }else if(userZip==56563){
          apiNum =27027;
      }else if(userZip==56676){
          apiNum =27029;
      }else if(userZip==55767){
          apiNum =27017;
      }else if(userZip==56479){
          apiNum =27153;
      }else if(userZip==56267){
          apiNum =27149;
      }else if(userZip==55052){
          apiNum =27131;
      }else if(userZip==56270){
          apiNum =27129;
      }else if(userZip==56466){
          apiNum =27097;
      }else if(userZip==55768){
          apiNum =27137;
      }else if(userZip==55792){
          apiNum =27137;
      }else if(userZip==56159){
          apiNum =27033;
      }else if(userZip==56565){
          apiNum =27167;
      }else if(userZip==55392){
          apiNum =27053;
      }else if(userZip==56566){
          apiNum =27087;
      }else if(userZip==56355){
          apiNum =27041;
      }else if(userZip==55053){
          apiNum =27131;
      }else if(userZip==55772){
          apiNum =27137;
      }else if(userZip==55366){
          apiNum =27143;
      }else if(userZip==55367){
          apiNum =27019;
      }else if(userZip==56356){
          apiNum =27145;
      }else if(userZip==56072){
          apiNum =27161;
      }else if(userZip==55055){
          apiNum =27163;
      }else if(userZip==56074){
          apiNum =27103;
      }else if(userZip==56568){
          apiNum =27119;
      }else if(userZip==56478){
          apiNum =27159;
      }else if(userZip==56274){
          apiNum =27051;
      }else if(userZip==55795){
          apiNum =27115;
      }else if(userZip==55127){
          apiNum =27123;
      }else if(userZip==55057){
          apiNum =27131;
      }else if(userZip==55368){
          apiNum =27019;
      }else if(userZip==55383){
          apiNum =27019;
      }else if(userZip==55394){
          apiNum =27019;
      }else if(userZip==55397){
          apiNum =27019;
      }else if(userZip==55399){
          apiNum =27019;
      }else if(userZip==55550){
          apiNum =27019;
      }else if(userZip==55551){
          apiNum =27019;
      }else if(userZip==55552){
          apiNum =27019;
      }else if(userZip==55553){
          apiNum =27019;
      }else if(userZip==55554){
          apiNum =27019;
      }else if(userZip==55555){
          apiNum =27019;
      }else if(userZip==55556){
          apiNum =27019;
      }else if(userZip==55557){
          apiNum =27019;
      }else if(userZip==55558){
          apiNum =27019;
      }else if(userZip==55559){
          apiNum =27019;
      }else if(userZip==55560){
          apiNum =27019;
      }else if(userZip==55562){
          apiNum =27019;
      }else if(userZip==55564){
          apiNum =27019;
      }else if(userZip==55566){
          apiNum =27019;
      }else if(userZip==55567){
          apiNum =27019;
      }else if(userZip==55568){
          apiNum =27019;
      }else if(userZip==55583){
          apiNum =27019;
      }else if(userZip==55594){
          apiNum =27019;
      }else if(userZip==56741){
          apiNum =27077;
      }else if(userZip==55082){
          apiNum =27163;
      }else if(userZip==56276){
          apiNum =27011;
      }else if(userZip==56160){
          apiNum =27165;
      }else if(userZip==56569){
          apiNum =27005;
      }else if(userZip==56358){
          apiNum =27065;
      }else if(userZip==56161){
          apiNum =27063;
      }else if(userZip==56742){
          apiNum =27125;
      }else if(userZip==56277){
          apiNum =27129;
      }else if(userZip==56359){
          apiNum =27095;
      }else if(userZip==56162){
          apiNum =27091;
      }else if(userZip==56278){
          apiNum =27011;
      }else if(userZip==56570){
          apiNum =27005;
      }else if(userZip==56360){
          apiNum =27041;
      }else if(userZip==54020){
          apiNum =27119;
      }else if(userZip==56744){
          apiNum =27089;
      }else if(userZip==56680){
          apiNum =27061;
      }else if(userZip==55961){
          apiNum =27045;
      }else if(userZip==56571){
          apiNum =27111;
      }else if(userZip==56481){
          apiNum =27159;
      }else if(userZip==55084){
          apiNum =27025;
      }else if(userZip==56361){
          apiNum =27111;
      }else if(userZip==56362){
          apiNum =27145;
      }else if(userZip==56363){
          apiNum =27095;
      }else if(userZip==56078){
          apiNum =27013;
      }else if(userZip==56711){
          apiNum =27077;
      }else if(userZip==56751){
          apiNum =27135;
      }else if(userZip==55775){
          apiNum =27061;
      }else if(userZip==56279){
          apiNum =27067;
      }else if(userZip==56573){
          apiNum =27111;
      }else if(userZip==56574){
          apiNum =27107;
      }else if(userZip==55962){
          apiNum =27045;
      }else if(userZip==56473){
          apiNum =27021;
      }else if(userZip==55963){
          apiNum =27049;
      }else if(userZip==55964){
          apiNum =27157;
      }else if(userZip==55370){
          apiNum =27085;
      }else if(userZip==56748){
          apiNum =27125;
      }else if(userZip==56666){
          apiNum =27007;
      }else if(userZip==56575){
          apiNum =27005;
      }else if(userZip==56280){
          apiNum =27173;
      }else if(userZip==55371){
          apiNum =27095;
      }else if(userZip==56281){
          apiNum =27067;
      }else if(userZip==55372){
          apiNum =27139;
      }else if(userZip==55967){
          apiNum =27099;
      }else if(userZip==55065){
          apiNum =27037;
      }else if(userZip==56668){
          apiNum =27071;
      }else if(userZip==56282){
          apiNum =27067;
      }else if(userZip==56165){
          apiNum =27105;
      }else if(userZip==55968){
          apiNum =27157;
      }else if(userZip==56671){
          apiNum =27007;
      }else if(userZip==56750){
          apiNum =27125;
      }else if(userZip==55066){
          apiNum =27049;
      }else if(userZip==56670){
          apiNum =27007;
      }else if(userZip==56284){
          apiNum =27129;
      }else if(userZip==56166){
          apiNum =27127;
      }else if(userZip==56367){
          apiNum =27009;
      }else if(userZip==56368){
          apiNum =27145;
      }else if(userZip==56576){
          apiNum =27111;
      }else if(userZip==56577){
          apiNum =27005;
      }else if(userZip==58078){
          apiNum =27021;
      }else if(userZip==56578){
          apiNum =27005;
      }else if(userZip==55901){
          apiNum =27109;
      }else if(userZip==55902){
          apiNum =27109;
      }else if(userZip==55903){
          apiNum =27109;
      }else if(userZip==55904){
          apiNum =27109;
      }else if(userZip==55905){
          apiNum =27109;
      }else if(userZip==55906){
          apiNum =27109;
      }else if(userZip==55067){
          apiNum =27115;
      }else if(userZip==55577){
          apiNum =27053;
      }else if(userZip==56369){
          apiNum =27145;
      }else if(userZip==55969){
          apiNum =27169;
      }else if(userZip==56682){
          apiNum =27135;
      }else if(userZip==56371){
          apiNum =27145;
      }else if(userZip==55970){
          apiNum =27099;
      }else if(userZip==56701){
          apiNum =27113;
      }else if(userZip==56579){
          apiNum =27167;
      }else if(userZip==56167){
          apiNum =27105;
      }else if(userZip==56373){
          apiNum =27097;
      }else if(userZip==55069){
          apiNum =27025;
      }else if(userZip==56168){
          apiNum =27105;
      }else if(userZip==56169){
          apiNum =27083;
      }else if(userZip==56580){
          apiNum =27027;
      }else if(userZip==56285){
          apiNum =27129;
      }else if(userZip==56301){
          apiNum =27145;
      }else if(userZip==55382){
          apiNum =27171;
      }else if(userZip==55972){
          apiNum =27169;
      }else if(userZip==56080){
          apiNum =27013;
      }else if(userZip==56304){
          apiNum =27009;
      }else if(userZip==56302){
          apiNum =27145;
      }else if(userZip==56303){
          apiNum =27145;
      }else if(userZip==56372){
          apiNum =27145;
      }else if(userZip==56387){
          apiNum =27145;
      }else if(userZip==56388){
          apiNum =27145;
      }else if(userZip==56393){
          apiNum =27145;
      }else if(userZip==56395){
          apiNum =27145;
      }else if(userZip==56396){
          apiNum =27145;
      }else if(userZip==56397){
          apiNum =27145;
      }else if(userZip==56398){
          apiNum =27145;
      }else if(userZip==56399){
          apiNum =27145;
      }else if(userZip==54024){
          apiNum =27119;
      }else if(userZip==55070){
          apiNum =27003;
      }else if(userZip==56754){
          apiNum =27113;
      }else if(userZip==56081){
          apiNum =27165;
      }else if(userZip==56374){
          apiNum =27145;
      }else if(userZip==56376){
          apiNum =27145;
      }else if(userZip==55376){
          apiNum =27171;
      }else if(userZip==55101){
          apiNum =27123;
      }else if(userZip==55102){
          apiNum =27123;
      }else if(userZip==55103){
          apiNum =27123;
      }else if(userZip==55104){
          apiNum =27123;
      }else if(userZip==55105){
          apiNum =27123;
      }else if(userZip==55107){
          apiNum =27123;
      }else if(userZip==55114){
          apiNum =27123;
      }else if(userZip==55116){
          apiNum =27123;
      }else if(userZip==55130){
          apiNum =27123;
      }else if(userZip==55133){
          apiNum =27123;
      }else if(userZip==55145){
          apiNum =27123;
      }else if(userZip==55146){
          apiNum =27123;
      }else if(userZip==55155){
          apiNum =27123;
      }else if(userZip==55161){
          apiNum =27123;
      }else if(userZip==55164){
          apiNum =27123;
      }else if(userZip==55165){
          apiNum =27123;
      }else if(userZip==55166){
          apiNum =27123;
      }else if(userZip==55168){
          apiNum =27123;
      }else if(userZip==55169){
          apiNum =27123;
      }else if(userZip==55170){
          apiNum =27123;
      }else if(userZip==55171){
          apiNum =27123;
      }else if(userZip==55172){
          apiNum =27123;
      }else if(userZip==55175){
          apiNum =27123;
      }else if(userZip==55177){
          apiNum =27123;
      }else if(userZip==55182){
          apiNum =27123;
      }else if(userZip==55187){
          apiNum =27123;
      }else if(userZip==55188){
          apiNum =27123;
      }else if(userZip==55190){
          apiNum =27123;
      }else if(userZip==55191){
          apiNum =27123;
      }else if(userZip==55199){
          apiNum =27123;
      }else if(userZip==56082){
          apiNum =27103;
      }else if(userZip==56375){
          apiNum =27145;
      }else if(userZip==56756){
          apiNum =27135;
      }else if(userZip==56083){
          apiNum =27127;
      }else if(userZip==55377){
          apiNum =27141;
      }else if(userZip==55973){
          apiNum =27099;
      }else if(userZip==56377){
          apiNum =27145;
      }else if(userZip==56378){
          apiNum =27145;
      }else if(userZip==56389){
          apiNum =27153;
      }else if(userZip==56379){
          apiNum =27009;
      }else if(userZip==55378){
          apiNum =27139;
      }else if(userZip==55780){
          apiNum =27017;
      }else if(userZip==55613){
          apiNum =27031;
      }else if(userZip==56287){
          apiNum =27127;
      }else if(userZip==56084){
          apiNum =27015;
      }else if(userZip==56477){
          apiNum =27159;
      }else if(userZip==55379){
          apiNum =27139;
      }else if(userZip==56581){
          apiNum =27107;
      }else if(userZip==56171){
          apiNum =27091;
      }else if(userZip==55781){
          apiNum =27137;
      }else if(userZip==55380){
          apiNum =27171;
      }else if(userZip==55381){
          apiNum =27085;
      }else if(userZip==56761){
          apiNum =27135;
      }else if(userZip==56172){
          apiNum =27101;
      }else if(userZip==55782){
          apiNum =27137;
      }else if(userZip==56679){
          apiNum =27071;
      }else if(userZip==55075){
          apiNum =27037;
      }else if(userZip==56288){
          apiNum =27067;
      }else if(userZip==55974){
          apiNum =27055;
      }else if(userZip==55384){
          apiNum =27053;
      }else if(userZip==56087){
          apiNum =27015;
      }else if(userZip==55078){
          apiNum =27025;
      }else if(userZip==55079){
          apiNum =27003;
      }else if(userZip==55080){
          apiNum =27059;
      }else if(userZip==56381){
          apiNum =27121;
      }else if(userZip==56173){
          apiNum =27133;
      }else if(userZip==56757){
          apiNum =27089;
      }else if(userZip==55385){
          apiNum =27085;
      }else if(userZip==55083){
          apiNum =27163;
      }else if(userZip==55988){
          apiNum =27169;
      }else if(userZip==56174){
          apiNum =27033;
      }else if(userZip==56759){
          apiNum =27135;
      }else if(userZip==56289){
          apiNum =27067;
      }else if(userZip==54880){
          apiNum =27041;
      }else if(userZip==55784){
          apiNum =27061;
      }else if(userZip==56382){
          apiNum =27097;
      }else if(userZip==56763){
          apiNum =27135;
      }else if(userZip==56637){
          apiNum =27061;
      }else if(userZip==55977){
          apiNum =27099;
      }else if(userZip==56291){
          apiNum =27083;
      }else if(userZip==56683){
          apiNum =27007;
      }else if(userZip==55615){
          apiNum =27031;
      }else if(userZip==56175){
          apiNum =27083;
      }else if(userZip==56684){
          apiNum =27119;
      }else if(userZip==56176){
          apiNum =27091;
      }else if(userZip==56177){
          apiNum =27117;
      }else if(userZip==56088){
          apiNum =27091;
      }else if(userZip==55791){
          apiNum =27137;
      }else if(userZip==56089){
          apiNum =27047;
      }else if(userZip==55616){
          apiNum =27075;
      }else if(userZip==56178){
          apiNum =27081;
      }else if(userZip==56585){
          apiNum =27027;
      }else if(userZip==56384){
          apiNum =27097;
      }else if(userZip==56587){
          apiNum =27111;
      }else if(userZip==55085){
          apiNum =27037;
      }else if(userZip==56090){
          apiNum =27013;
      }else if(userZip==56292){
          apiNum =27127;
      }else if(userZip==55386){
          apiNum =27019;
      }else if(userZip==56760){
          apiNum =27089;
      }else if(userZip==56385){
          apiNum =27121;
      }else if(userZip==56588){
          apiNum =27111;
      }else if(userZip==55777){
          apiNum =27137;
      }else if(userZip==56293){
          apiNum =27127;
      }else if(userZip==56482){
          apiNum =27159;
      }else if(userZip==56386){
          apiNum =27095;
      }else if(userZip==56091){
          apiNum =27161;
      }else if(userZip==56180){
          apiNum =27127;
      }else if(userZip==56097){
          apiNum =27043;
      }else if(userZip==55982){
          apiNum =27099;
      }else if(userZip==55983){
          apiNum =27049;
      }else if(userZip==56294){
          apiNum =27127;
      }else if(userZip==55793){
          apiNum =27061;
      }else if(userZip==56762){
          apiNum =27089;
      }else if(userZip==55087){
          apiNum =27131;
      }else if(userZip==56685){
          apiNum =27007;
      }else if(userZip==56096){
          apiNum =27079;
      }else if(userZip==55389){
          apiNum =27093;
      }else if(userZip==56295){
          apiNum =27023;
      }else if(userZip==56589){
          apiNum =27005;
      }else if(userZip==55390){
          apiNum =27171;
      }else if(userZip==55088){
          apiNum =27131;
      }else if(userZip==56181){
          apiNum =27091;
      }else if(userZip==56590){
          apiNum =27051;
      }else if(userZip==56183){
          apiNum =27033;
      }else if(userZip==56296){
          apiNum =27155;
      }else if(userZip==56591){
          apiNum =27005;
      }else if(userZip==55090){
          apiNum =27163;
      }else if(userZip==56201){
          apiNum =27067;
      }else if(userZip==56185){
          apiNum =27105;
      }else if(userZip==56592){
          apiNum =27119;
      }else if(userZip==56098){
          apiNum =27043;
      }else if(userZip==55395){
          apiNum =27085;
      }else if(userZip==55396){
          apiNum =27143;
      }else if(userZip==56688){
          apiNum =27061;
      }else if(userZip==56593){
          apiNum =27005;
      }else if(userZip==56594){
          apiNum =27167;
      }else if(userZip==56297){
          apiNum =27173;
      }else if(userZip==55125){
          apiNum =27163;
      }else if(userZip==55129){
          apiNum =27163;
      }else if(userZip==56186){
          apiNum =27117;
      }else if(userZip==56187){
          apiNum =27105;
      }else if(userZip==55798){
          apiNum =27017;
      }else if(userZip==55398){
          apiNum =27141;
      }else if(userZip==55992){
          apiNum =27049;
      }else{
          errormessage();
      }

      let countyData = stateData.filter( item => item.fips == apiNum )[0];

      var zipDisplay = document.getElementById('main');
      
      var countyDisplayTag = document.createElement('h2');
      var countyDisplayText = document.createTextNode(countyData.county);
      countyDisplayTag.appendChild(countyDisplayText);
      zipDisplay.appendChild(countyDisplayTag);

      var deathsTag = document.createElement('p');
      var deathsText = document.createTextNode("Deaths: "+countyData.actuals.deaths.toLocaleString());
      deathsTag.appendChild(deathsText);
      zipDisplay.appendChild(deathsTag);

      var casesTag = document.createElement('p');
      var casesText = document.createTextNode("Cases: "+countyData.actuals.cases.toLocaleString());
      casesTag.appendChild(casesText);
      zipDisplay.appendChild(casesTag);

      var percentage = countyData.metrics.vaccinationsInitiatedRatio*100+"%"
      var pctInitTag = document.createElement('p');
      var pctInitText = document.createTextNode("Initiated vaccination: "+percentage);
      pctInitTag.appendChild(pctInitText);
      zipDisplay.appendChild(pctInitTag);

      var percent2 = (countyData.metrics.vaccinationsCompletedRatio*100).toFixed(1);
      // percentPass = percent2*100+"%";
      var pctCompTag = document.createElement('p');
      var pctCompText = document.createTextNode("Completed vaccination: "+percent2+"%");
      pctCompTag.appendChild(pctCompText);
      zipDisplay.appendChild(pctCompTag);

      var remainderPopPctLong = .7-countyData.metrics.vaccinationsInitiatedRatio
      var countyPop = countyData.population;
      remainderValue = remainderPopPctLong*countyPop;
      vacsLeft = remainderValue.toFixed(0);

      var intTag = document.createElement('h3');
      var intText = document.createTextNode(parseFloat(vacsLeft).toLocaleString()+" people in "+countyData.county+" remain to be vaccinated by the 4th to meet the Presidential goal.");
      intTag.appendChild(intText);
      zipDisplay.appendChild(intTag);

      var formDiv = document.createElement('form');
      zipDisplay.appendChild(formDiv);
      
      var promptTag = document.createElement('h3');
      var promptText = document.createTextNode('Have you already completed your COVID-19 vaccination?');
      promptTag.appendChild(promptText);
      formDiv.appendChild(promptTag);
      
      var yesButton = document.createElement('input');
      yesButton.setAttribute('type','button');
      yesButton.setAttribute('id','yesbutton');
      yesButton.addEventListener("click",yesResponse);
      yesButton.setAttribute('value','YES');
      formDiv.appendChild(yesButton);

      var noButton = document.createElement('input');
      noButton.setAttribute('type','button');
      noButton.setAttribute('id','nobutton');
      noButton.addEventListener('click',noResponse);
      noButton.setAttribute('value','NO');
      formDiv.appendChild(noButton);
  })
}

function errormessage (){
  var main = document.getElementById('main');
  main.innerHTML="";
  
  var errorTag = document.createElement('img');
    errorTag.setAttribute('src','./assets/images/21_error.gif');
    errorTag.setAttribute('id','ohno');
    errorTag.setAttribute('alt','yer lost, mang!');
    errorTag.setAttribute('height','100%');
    errorTag.setAttribute('width','100%');
    main.appendChild(errorTag);

  var secondsLeft = 1;
  var timerInterval = setInterval(function() {
  secondsLeft--;
  
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    main.innerHTML="";
    errormessage2();
  }
}, 1000);     
}

function errormessage2 (){
  var main = document.getElementById('main');
  main.innerHTML="";
  
  var errorTag = document.createElement('img');
    errorTag.setAttribute('src','./assets/images/22_errorRedirect.jpg');
    errorTag.setAttribute('id','ohno');
    errorTag.setAttribute('alt','yer lost, mang!');
    errorTag.setAttribute('height','100%');
    errorTag.setAttribute('width','100%');
    main.appendChild(errorTag);

  var secondsLeft = 1;
  var timerInterval = setInterval(function() {
  secondsLeft--;
  
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    main.innerHTML="";
    landingScreen();
  }
}, 1000);     
}

function landingScreen(){
    stateCounts =[];
    statesTotal = 0;
    apiKey = "";
    zipGlobal ="";
    zipList ="";
    var container = document.getElementById('main');
    var landscreenHeadTag = document.createElement('h2');
    landscreenHeadTag.setAttribute('id', 'landscreenHeader');
    var landscreenHeadText = document.createTextNode('Minnesota COVID-19 Goal Tracker');
    landscreenHeadTag.appendChild(landscreenHeadText);
    container.appendChild(landscreenHeadTag);
    getApiState();
}

landingScreen();

function getApiState() {
      let requestUrl2 = `https://api.covidactnow.org/v2/states.json?apiKey=6b5476d41dfb418d82fbaf1cfaa0071c`;
      fetch(requestUrl2)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
            for (var i=0; i<53; i++){
                statesTotal += data[i].actuals.vaccinationsCompleted
                }

                var pctCalc = (statesTotal/331000000)*100;
                var totalUS = Math.round(pctCalc);
                var displayTest = document.getElementById('main');
                var blurbTag = document.createElement('p');
                var blurbText = document.createTextNode('President Biden’s goal was to have 70% of adults in the US receive COVID-19 vaccinations by the Fourth of July. At our  current rate of vaccination, we will fall slightly short of this goal; those of us who want to make 2021 a summer of closeness even amid the rise of the Delta variant better campaign to get as many people vaccinated as quickly as possible.');
                blurbTag.appendChild(blurbText);
                blurbTag.setAttribute('class', 'paragraph');
                
                var shortfall = 160000000-statesTotal
                var totalShare = shortfall*0.017047322;
                
                var totalShareRound = Math.round(totalShare);
                var totalShareRoundCommas = Math.round(totalShareRound);

                var p1Tag = document.createElement('p'); // added ".toLocaleString()" methods to large numbers needing comma-notation below -Neil
                var p1Text =document.createTextNode("Currently, only "+totalUS+" percent of Americans are vaccinated, but at LEAST half of us are ugly. This means that "+shortfall.toLocaleString()+" Americans need to be vaccinated by the 4th or President Biden will cry. Which is obviously unacceptable. So "+totalShareRound.toLocaleString()+" Minnesotans need to show their dumb faces at a vaccination site like RIGHT NOW or we'll have to eat a share of the blame for whatever resulting disgrace befalls us.");
                p1Tag.appendChild(p1Text);
                p1Tag.setAttribute('class', 'paragraph');

                var mainScreen = document.getElementById('main');

                mainScreen.appendChild(blurbTag);
                mainScreen.appendChild(p1Tag);
                loadForm();
        })
}

function loadForm(){
    var formContainer = document.getElementById('main');
    var formDeclare = document.createElement('form');
    var formtextTag = document.createElement('h2');
    var formtextText = document.createTextNode('Please enter your ZIP code:')
    formtextTag.appendChild(formtextText);
    formDeclare.setAttribute('class', 'center');
    var zipEntry = document.createElement('input');
    zipEntry.setAttribute('type','text');
    zipEntry.setAttribute('maxLength',5);
    zipEntry.setAttribute('id','zipInput')
    var submitButton = document.createElement('input');
    submitButton.setAttribute('type','button');
    submitButton.setAttribute('id', 'code');
    submitButton.setAttribute('cols',10);
    submitButton.setAttribute('rows',1);
    submitButton.setAttribute('value','submit');
    submitButton.addEventListener("click",submitZIP);
    formDeclare.appendChild(formtextTag);
    formDeclare.appendChild(zipEntry);
    formDeclare.appendChild(submitButton);
    formContainer.appendChild(formDeclare);   
}

function submitZIP(){
  var zipInput = document.getElementById('zipInput');
  zipGlobal = zipInput.value;
  var userZIP = zipInput.value;
  zipInput.value ="";

  var formAdd = document.getElementById('main');
  formAdd.innerHTML="";

  var h1Tag = document.createElement('h1');
  h1Tag.setAttribute('id','zipLoad');
  var h1Text = document.createTextNode(userZIP);
  h1Tag.appendChild(h1Text);
  formAdd.appendChild(h1Tag);
  zipLookup();
}

function yesResponse(){
  var userZip = document.getElementById('zipInput');
  var containerF = document.getElementById('main');
  containerF.innerHTML ="";

  var yesLandingTag = document.createElement('h1')
  var yesLandingText = document.createTextNode("Word? Nice! Thanks for being part of the solution!");
  console.log("OHIO STATE MUST BE DESTROYED.");
  yesLandingTag.appendChild(yesLandingText);
  yesLandingTag.setAttribute('class', 'goodHeader')
  containerF.appendChild(yesLandingTag);

  var linkIntroTag = document.createElement('p');
  var linkIntroText = document.createTextNode('Minnesota offers a variety of incentives for resident vaccinations. Claim yours today at:')
  linkIntroTag.appendChild(linkIntroText);
  linkIntroTag.setAttribute('class', 'goodText');
  containerF.appendChild(linkIntroTag);

  var linkTag = document.createElement('a');
  linkTag.setAttribute('href','https://mn.gov/covid19/vaccine-rewards/index.jsp');
  linkTag.setAttribute('target', "_blank");
  var linkText = document.createTextNode('https://mn.gov/covid19/vaccine-rewards/index.jsp');
  linkTag.appendChild(linkText);
  containerF.appendChild(linkTag);

  var questionTag = document.createElement('h2');
  var questionText = document.createTextNode('...Like a beer, do you?')
  questionTag.appendChild(questionText);
  containerF.appendChild(questionTag);

  var buttonContainer = document.createElement('form');
  buttonContainer.setAttribute('id','buttoncontainer');
  var yesButton = document.createElement('input');
  yesButton.setAttribute('type','button');
  yesButton.setAttribute('value','Sure I do.');
  yesButton.setAttribute('id', 'yesBeer');
  yesButton.addEventListener("click", yesilikeabeer);

  var noButton = document.createElement('input');
  noButton.setAttribute('type','button');
  noButton.setAttribute('value','Not Particularly...');
  noButton.setAttribute('id', 'noBeer');
  noButton.addEventListener("click", nahbeerznasty);

  buttonContainer.appendChild(yesButton);
  buttonContainer.appendChild(noButton);
  containerF.appendChild(buttonContainer);
}

function noResponse(){
  var main = document.getElementById('main');
  main.innerHTML = "";
  var header = document.createElement('div');
  header.setAttribute('id','header');
  console.log("OHIO STATE MUST BE DESTROYED.");

  var titleTag = document.createElement('h1');
  var titleText = document.createTextNode('Seriously? Well, same to you!');
  titleTag.appendChild(titleText);
  titleTag.setAttribute('class', 'badHeader');
  header.appendChild(titleTag);

  var divSwitcher = document.createElement('div');
  divSwitcher.setAttribute('id','videoswitcher');
  main.appendChild(divSwitcher);

  var introTag = document.createElement('h4');
  var introText = document.createTextNode("That's not too cool, brutha'. In the name of citizenship, good taste, and the memory of the late great Herman Cain, you really ought to reconsider this particular life choice you've made. ");
  introTag.appendChild(introText);
  introTag.setAttribute('class', 'badText');
  divSwitcher.appendChild(introTag);

  var introTag2 = document.createElement('p');
  var introText2 = document.createTextNode("Surely you'll concede, as a decent, God-fearing American citizen, that it's at least a possibility that you don't have all the information a body'd need to have made this choice differently.");
  introTag2.appendChild(introText2);
  introTag2.setAttribute('class', 'badText');
  divSwitcher.appendChild(introTag2);

  var linkAnchorTag = document.createElement('a');
  linkAnchorTag.setAttribute('href','https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety.html');
  linkAnchorTag.setAttribute('target', "_blank");
  linkAnchorTag.setAttribute('class','infoLinx');
  divSwitcher.appendChild(linkAnchorTag);
  var link1Tag = document.createElement('h2');
  var link1Text = document.createTextNode("Are vaccines safe?");
  link1Tag.appendChild(link1Text);
  linkAnchorTag.appendChild(link1Tag);

  var linkAnchorTag2 = document.createElement('a');
  linkAnchorTag2.setAttribute('href','https://www.youtube.com/watch?v=WyGq6cjcc3Q&ab_channel=LastWeekTonight');
  linkAnchorTag2.setAttribute('target', "_blank");
  linkAnchorTag2.setAttribute('class','infoLinx');
 
  divSwitcher.appendChild(linkAnchorTag2);
  var link2Tag = document.createElement('h2');
  var link2Text = document.createTextNode("Is Alex Jones full of shit?");
  link2Tag.appendChild(link2Text);
  linkAnchorTag2.appendChild(link2Tag);

  var linkAnchorTag3 = document.createElement('a');
  linkAnchorTag3.setAttribute('href','https://www.cdc.gov/nchs/nvss/vsrr/covid19/index.htm');
  linkAnchorTag3.setAttribute('target', "_blank");
  linkAnchorTag3.setAttribute('class','infoLinx');
  divSwitcher.appendChild(linkAnchorTag3);
  var link3Tag = document.createElement('h2');
  var link3Text = document.createTextNode("How many people have actually died from this thing?");
  link3Tag.appendChild(link3Text);
  linkAnchorTag3.appendChild(link3Tag);

  var linkAnchorTag4 = document.createElement('a');
  linkAnchorTag4.setAttribute('href', 'https://mn.gov/covid19/vaccine/find-vaccine/locations/index.jsp');
  linkAnchorTag4.setAttribute('target', "_blank");
  linkAnchorTag4.setAttribute('class', 'infoLinx');
  divSwitcher.appendChild(linkAnchorTag4);
  var link4Tag = document.createElement('h2');
  var link4Text = document.createTextNode("Where can I even go to get the shot?");
  link4Tag.appendChild(link4Text);
  linkAnchorTag4.appendChild(link4Tag);

  dunkOnyaJethro()
}

function dunkOnyaJethro(){
  var randomString = [
    {
      textInd: 1,
      burn: "; your mother was a hamster, and your father smelt of elberberries."
    },  
    {
      textInd: 2,
      burn: ", 'cause vaccinated people's dicks so hot they stolen - yo dick look just like Gary Coleman."
    },
    {
      textInd: 3,
      burn: ". I also heard that Yo mama's so poor, the ducks throw bread at her."
    },
    {
      textInd: 4,
      burn: ", unless you're fine with going through the whole rotten thing dragging your knuckles around everywhere with you."
    },
    {
      textInd: 5,
      burn: ", and it's real messed up that yo mama so fat, when she cosplayed as Maleficent dudes thought she was tryna' be Ursula."
    },
    {
      textInd: 6,
      burn: " - hard to expect any better from someone whose mama so dumb it take her two hours to watch 60 Minutes."
    },
    {
      textInd: 7,
      burn: ". Know what else, Jethro? Yo mama so broke, Nigerian princes be sending HER money."
    },
    {
      textInd: 8,
      burn: ", and if you can't behave yourself any better than that you'd be well-advised to start wearing a bicycle helmet anytime you're out in public."
    },
    {
      textInd: 9,
      burn: ", and I envy people who never have to meet you."
    },
    {
      textInd: 10,
      burn: "; you are just impossible to underestimate, it seems - even if you were a potato, mahfs'd still be like, 'there go one dumb-ass potato'."
    },
    {
      textInd: 11,
      burn: ". You resemble Rapunzel a bit: she lets down her hair, and you let down everyone you ever meet."
    },
    {
      textInd: 12,
      burn: " if you honestly think this kind of thing is going to fly; you're a real jerk, and you smell like farts."
    },
    {
      textInd: 11,
      burn: " and stop being a butthole about this kind of easy crap. GET VACCINATED, JETHRO!"
    },
    {
      textInd: 12,
      burn: ". You look like six pounds of dog crap in an eight-ounce sack - so ugly that on the day you were born the doctor slapped ya MAMA. And SHE's so damned ugly, her therapist makes her lie face down."
    },
    {
      textInd: 13,
      burn: "; lord, what a jerk you are. What did your country ever do to you? If we promise to throw you a stick, will you leave?"
    }
  ]

  for(i=0; i<randomString.length-1; i++){
    var index=Math.floor(Math.random() * randomString.length);
  }
  insultSelect = randomString[index].burn;
  setTime();
}

function setTime() {
  var secondsLeft = 5;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function setTime2() {
  var secondsLeft = 10;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage2();
    }
  }, 1000);
}

function sendMessage() {
  var main = document.getElementById("main");
  var divSwitcher = document.getElementById('divSwitcher');
  var eatItJerkTag = document.createElement("h3");
  var eatItJerkText = document.createTextNode("You really, REALLY need to rethink your whole approach to life"+insultSelect);
  eatItJerkTag.appendChild(eatItJerkText);

  eatItJerkTag.setAttribute('class', "jerkText");
  main.appendChild(eatItJerkTag);
  setTime2();
}

function sendMessage2() {
  var divSwitcher = document.getElementById('videoswitcher');
  divSwitcher.innerHTML ="";

  
  var gifTag = document.createElement('a');
    gifTag.setAttribute('href','https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO');
  
  var randomBurnGif = [
    {
      textInd: 1,
      gifVar: "./assets/images/01_oldNtired.gif"
    },
    {
      textInd: 2,
      gifVar: "./assets/images/02_idiotSammich.gif"
    },
    {
      textInd: 3,
      gifVar: "./assets/images/03_stupidFace.gif"
    },
    {
      textInd: 4,
      gifVar: "./assets/images/04_gameRecgame.gif"
    },
    {
      textInd: 5,
      gifVar: "./assets/images/05_gsgtHartman.gif"
    },
    {
      textInd: 6,
      gifVar: "./assets/images/06_frenchTaunting.gif"
    },
    {
      textInd: 7,
      gifVar: "./assets/images/07_josieP.gif"
    },
    {
      textInd: 8,
      gifVar: "./assets/images/08_theOffender.gif"
    },
    {
      textInd: 9,
      gifVar: "./assets/images/09_yaMama.gif"
    },
    {
      textInd: 10,
      gifVar: "./assets/images/10_hueySense.gif"
    },
    {
      textInd: 11,
      gifVar: "./assets/images/11_mamaSauce.gif"
    },
    {
      textInd: 12,
      gifVar: "./assets/images/12_wereHome.gif"
    },
    {
      textInd: 13,
      gifVar: "./assets/images/13_finnMom.gif"
    },
    {
      textInd: 14,
      gifVar: "./assets/images/14_peeBee.gif"
    },
    {
      textInd: 15,
      gifVar: "./assets/images/15_bmoStupid.gif"
    },
    {
      textInd: 16,
      gifVar: "./assets/images/16_garbageCan.gif"
    },
    {
      textInd: 17,
      gifVar: "./assets/images/17_uglyBandw.gif"
    },
    {
      textInd: 18,
      gifVar: "./assets/images/18_jennaDisgrace.gif"
    },
    {
      textInd: 19,
      gifVar: "./assets/images/19_housewivesTrashy.gif"
    },
    {
      textInd: 20,
      gifVar: "./assets/images/20_anchormanClassy.gif"
    },
  ]
    var gifPath = randomBurnGif[0].gifVar;
    
    for(var i=0; i<randomBurnGif.length-1; i++){
      var index=Math.floor(Math.random() * randomBurnGif.length);
    }
    var insultGif = randomBurnGif[index].gifVar;
  
    var gifSelect = document.createElement('img');
    gifSelect.setAttribute('src', insultGif);
    gifSelect.setAttribute('alt','Eat it, rube!');
    gifSelect.setAttribute('style','width:85%;height:80%;');
  
    gifTag.appendChild(gifSelect);
    main.appendChild(gifTag);
}

function yesilikeabeer(){
  var main = document.getElementById('main');
  main.innerHTML = "";
  var header = document.createElement('div');
  header.setAttribute('id','header');

  var titleTag = document.createElement('h1');
  var titleText = document.createTextNode('...well, of COURSE you like a beer!')

  titleTag.appendChild(titleText);
  main.appendChild(titleTag);

  var introTag = document.createElement('h4');
  var introText = document.createTextNode('Cheers to you! Congratulate yourself on your citizenship at one of these fine Minnesota breweries - all within 5 miles of your ZIP!');
  introTag.appendChild(introText);
  introTag.setAttribute('class', 'goodHeader');
  main.appendChild(introTag);

  var cardDisplay = document.createElement('div');
  cardDisplay.setAttribute('id','cardContainer');
  main.appendChild(cardDisplay);

  let request5 = `https://app.zipcodebase.com/api/v1/radius?apikey=1578b6e0-d5ef-11eb-b9b2-2b8eceeea297&code=${zipGlobal}&radius=5&country=us&unit=miles`;
  fetch(request5)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    var beerList = data.results;
    
    for(var i=0; i<beerList.length; i++){
      zipList = data.results[i].code;
      
      let request6 = `https://api.openbrewerydb.org/breweries?by_postal=${zipList}`;
      fetch(request6)
      .then(function(response){
        return response.json();
        console.log(response);
      })
      .then(function(data){
        
        for(let i=0; i<data.length; i++){
          
          var brewerDivTag = document.createElement('div');
          brewerDivTag.setAttribute('class',"brewerCard");
          cardDisplay.appendChild(brewerDivTag);
          
          var brewerHeadTag = document.createElement('h3');
          var brewerHeadText = document.createTextNode(data[i].name || "");
          brewerHeadTag.appendChild(brewerHeadText);
          brewerDivTag.appendChild(brewerHeadTag);
          brewerHeadTag.setAttribute('class', 'goodHeader');
          
          var brewerStreetTag = document.createElement('p');
          var brewerStreetText = document.createTextNode(data[i].street || "");
          brewerStreetTag.appendChild(brewerStreetText);
          brewerDivTag.appendChild(brewerStreetTag);
        
          var brewerCityTag = document.createElement('p');
          var brewerCityText = document.createTextNode(data[i].city || "");
          brewerCityTag.appendChild(brewerCityText);
          brewerDivTag.appendChild(brewerCityTag);

          if(data[i].phone !== null){
            var brewerPhoneRaw = data[i].phone;
            var brewerPhone1 = brewerPhoneRaw.substr(0,3);
            var brewerPhone2 = brewerPhoneRaw.substr(3,3);
            var brewerPhone3 = brewerPhoneRaw.substr(6,4);
            var brewerPhoneConcat = "("+brewerPhone1+") "+brewerPhone2+"-"+brewerPhone3;
            
            var brewerPhoneTag = document.createElement('p');
            var brewerPhoneText = document.createTextNode(brewerPhoneConcat || "");
            brewerPhoneTag.appendChild(brewerPhoneText);
            brewerDivTag.appendChild(brewerPhoneTag);

            var linkTag = document.createElement('a');
            var brewerUrlTag = document.createElement('p');
            var brewerUrlText = document.createTextNode(data[i].website_url || "");
            brewerUrlTag.appendChild(brewerUrlText);
            brewerUrlTag.setAttribute('class', "brewLinkText");
            linkTag.setAttribute('value', `${data[i].website_url}`);
            linkTag.setAttribute('href',`${data[i].website_url}`);
            linkTag.setAttribute('target', "_blank");

            linkTag.appendChild(brewerUrlTag);
            brewerDivTag.appendChild(linkTag);
          }
        }
        
      })
    }
  
})
}

function nahbeerznasty(){
  var container = document.getElementById('main');
  container.innerHTML = "";

  var header = document.createElement('div');
  header.setAttribute('id','header');

  var titleTag = document.createElement('h1');
  var titleText = document.createTextNode("Don't like beer, eh?");

  titleTag.appendChild(titleText);
  main.appendChild(titleTag);

  var introTag = document.createElement('h4');
  var introText = document.createTextNode("It's cool; there's all kinds of stuff to do this summer in Minnesota; this is a cool place. Here's some examples: ");
  introTag.appendChild(introText);
  introTag.setAttribute('class', 'goodText');
  main.appendChild(introTag);

  var linkTag = document.createElement('a');
  
  linkTag.setAttribute("value", "https://www.atlasobscura.com/things-to-do/minnesota");
  
  linkTag.setAttribute('href','');
  main.appendChild(linkTag);
  
  linkTag.setAttribute('href','https://www.atlasobscura.com/things-to-do/minnesota');
  linkTag.setAttribute('target', "_blank");
  var linkText = document.createTextNode('https://www.atlasobscura.com/things-to-do/minnesota');
  linkTag.appendChild(linkText);
  main.appendChild(linkTag);

  var attaboyTag = document.createElement('a');
    attaboyTag.setAttribute('href','https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO');
  
  var randomAttaboy = [
    {
      textInd: 1,
      attaboy: "You really are a mensch; you shouold establish a newsletter. I'd subscribe to it."
    },
    {
      textInd: 2,
      attaboy: "Truly: well done. You are a monarch amongst humankind, and your medal is assuredly in the mail."
    },
    {
      textInd: 3,
      attaboy: "You've shown the kind of citizenship, good sense, and self-respect that's going to pull us all out of this godawful mess we're in."
    },
    {
      textInd: 4,
      attaboy: "Who needs beer anyway? What you really deserve is available only a few states away; you should take all that drive and care for self and country you've shown by vaccinating yourself, and take a crack at fixing Minnesota's public ballot initiative statutes. Till then, your princess is in another castle."
    },
    {
      textInd: 5,
      attaboy: "Your country needs more just like you; way to tune out the noise and the nonsense and the rampant hocus-pocus we see all around us. Go pat yourself on the back with some cat videos or somesuch other teetotal craziness."
    },
    {
      textInd: 6,
      attaboy: "May your days be long upon the earth, and your hardships few; fair winds, and following seas."
    },
    {
      textInd: 7,
      attaboy: "I'm sure the president is grateful as all get-out! If indeed he is cognizant of anything at all, god bless his million-year-old, red-white-and-blue heart!"
    },
    {
      textInd: 8,
      attaboy: "You deserve a laurel wreath, but I'm afraid you're just gonna have to settle for continued health. Your choice shows that you deserve better, but them's the breaks."
    },
    {
      textInd: 9,
      attaboy: "You deserve a summer filled with all the closeness, physical contact, and familial warmth you've been missing since this whole godawful mess started - go and have yourself one!"
    },
    {
      textInd: 10,
      attaboy: "Thanks a bajillion, bub, bubbette, or bubX. The citizenship, stewardship of others, and discrernment you've shown in choosing to vaccinate yourself has saved the whole rotten universe. The universe thanks you."
    },
    {
      textInd: 11,
      attaboy: "Great life choice, G. Maybe spread that give-a-darn attitude around some, bring some of the elastic-waistband crowd along or something. It's a thought."
    },
    {
      textInd: 12,
      attaboy: "May others always show you the same the same compassion you've shown them by your very humane choice to vaccinate yourself on your own and their behalf."
    },
    {
      textInd: 13,
      attaboy: "Hurray for you, Vaccine-Getter! OHIO STATE MUST BE DESTROYED."
    },
    {
      textInd: 14,
      attaboy: "Minnesota needs a LOT more responsible, reality-conscious citizens like yourself. Now get out into the city this 4th of July and cause some friggin' ruckus!"
    },
    {
      textInd: 15,
      attaboy: "Nice life choices there, app user! Tell some a' yer friends, whyncha'!"
    },
    {
      textInd: 16,
      attaboy: "Outstanding, this very responsible and praiseworthy decision you've made. Plainly you are among the elect; may your enemies tremble at your step, and the unrighteous flee in terror at your approach!"
    },
    {
      textInd: 17,
      attaboy: "Your country thanks you, sir, madam, or other; good as it been to you, you very responsibly stepped up and did your bit to help get us all out of this ridiculous car-crash of a situation. You are for sure one of the good guys."
    },
    {
      textInd: 18,
      attaboy: "This whole thing is up in smoke without decent folk like yourself doing what they can to stop it happening. What kinda' person won't bother with the lowest-hanging fruit anyway? Good on ya'."
    },
    {
      textInd: 19,
      attaboy: "Americans in all their vast dispersal throughout space and time agree on this one thing if no other: it's exactly for folks just like you that Europeans stole the holy living Jesus out of this entire continent in the first place. Thanks for helping make their labour count, fellow squatter, and keep up the good work!"
    },
    {
      textInd: 20,
      attaboy: "Wow-EE, thanks a bazillion! Maybe we'll all get to go outside again soon, and breathe in good fresh air without worrying that we're all gonna' drop dead!"
    }
  ]
    
    for(i=0; i<randomAttaboy.length-1; i++){
      var index=Math.floor(Math.random() * randomAttaboy.length);
    }
    attaboySelect = randomAttaboy[index].attaboy;
    
    var attaboySelectTag = document.createElement('h3');
    var attaboySelectText = document.createTextNode(attaboySelect);
    attaboySelectTag.appendChild(attaboySelectText);
    attaboyTag.appendChild(attaboySelectTag);
    main.appendChild(attaboyTag);
}


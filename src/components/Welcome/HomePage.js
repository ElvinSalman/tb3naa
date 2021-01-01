import React, { Component } from 'react'
import "./welcome.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const startupScreen = (
    <div style={{color:"#fff",fontSize:40}}>
        ТВ3-117
      {/* <img src="/path/to/image-loader.png" /> */}
    </div>
  );

  const slider = (

    <AwesomeSlider
      startupScreen={startupScreen}
      className="slider"
      style={{height:500,width:1000}}
    >
      <div>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0f04219733119.58ac100bb5b2c.jpg" className="slider-img" alt="slide-1" />
      </div>
      <div>
      <img src="http://авиару.рф/wp-content/uploads/2017/06/2.Dvigatel-TV7-117VM-v-ekspozitsii-HeliRussia-2012..jpg" className="slider-img" alt="slide-2"  />
      </div>
      <div>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/3769427/pub_5f344dcec3fdab1d4b165e20_5f3454cbd7ec294f525db334/scale_1200" className="slider-img" alt="slide-3" />
      </div>
      <div>
      <img src="  https://avatars.mds.yandex.net/get-zen_doc/1222191/pub_5cfb7ceb7e0d5200ae512dba_5cfbb8bd92015300af0c1e1d/scale_1200" className="slider-img" alt="slide-4" />
      </div>
    </AwesomeSlider>
  );


  export default class WelcomePage extends Component {

  
render() {
    return (
       
        <div className="container" style={{marginBottom:100,marginTop:50}}>
            <div className="row">
            <div className="col-12" style={{textAlign:"center",margin:"30px 0"}}>
              <h1>TB3-117BM mühərrikə aid məlumat saytı. </h1>
            </div>
                <div className="col-12 d-flex justify-content-center" style={{textAlign:"center",marginBottom:80}}>
                   {slider}
                </div>
                <div className="col-12">
                <p>TV3-117 turboval mühərriki helikopterlərin quraşdırılması üçün nəzərdə tutulmuşdur. Bu əsas qovşaqlarının (kompressor səmərəliliyi 86%, turbin kom
                  pressor el - 91%, pulsuz turbin səmərəliliyi - 96%) yüksək səmərəliliyi sayəsində əldə ki, onun sinfində dünya
                  nın ən yaxşı mühərrikləri biridir. Xüsusi yanacaq və xüsusi kütlə sərfinin miqdarı dünyanın ən yaxş
                  ı standartlarına cavab verir. Mühərrik qazodinamik dayanıqlılığa malikdir. Mühərrikin konstruksiy
                  asında mütərəqqi texniki həllər tətbiq edilmişdir: kompressorun Titan rotoru, ayrı-ayrı disklərdən hazır
                  lanmış elektron-şüa qaynağı; soyuq valsovka üsulu ilə alınmış titan xəlitəli kompressorun işçi və isti
                  qamətləndirici çiyin bıçaqları; yağ boşluqlarının kontakt qrafit möhürləri; ən yeni disklərdə elektron-hi
                  dromexaniki tənzimləmə və İdarəetmə Sistemi tətbiq edilir və s.mühərrik böyük resursa, yüks
                  ək etibarlılığa, asanlığa, yaxşı təmir qabiliyyətinə malikdir. Yeni dəyişikliklər təsdiq edilir. Gələ
                  cək döyüş vertolyotları üçün təcrübəli dəyişikliklər hazırlanır. Bəzi dəyişikliklər SSRİ və Rusi
                  yanın müxtəlif dövlət mükafatlarını aldı.
                </p>
                <p>
                TV3-117 dünyanın ən etibarlı mühərriklərindən biridir. Son 7 il ərzində heç bir mühərrik uçan uğursuzluq var idi!

TV3-117 mühərriki müxtəlif su nəqliyyat gəmilərində helikopterlərdən başqa, el sürücüsü kimi istifadə edilə bilər
neft-qazötürücü stansiyaların hidrogeneratorları və kompressorları. Reaktiv versiyada (pulsuz turbin modulu olmadan) mühərrik təxminən ola bilər
yenits, heyvandarlıq üçün işlənmiş qazların Jet qurudulması üçün
şose və dəmir yollarında, aerodromlarda qar və buzun üfürülməsi.
                </p>
                <p>
                Hazırda zavod bütün modifikasiyalarda TV3-117 mühərriklərinin əsaslı və lokal təmirini mənimsəmiş, bu mühərriklərin əsaslı təmiri üzrə Rusiyada baş müəssisədir, həmçinin mühərriklərin təmirini həyata keçirir.
                mühərriklərin istismarını saxlamaq və resurslarını uzatmaq üçün havayollarının qazları.</p>
                <div className="col-12 d-flex justify-content-center">
                <img src="http://www.airwar.ru/image/i/engines/tv3-117bma.jpg" alt="photo-1" />
                </div>
                <div className="col-12 d-flex justify-content-center">
                <p>
                  
                </p>
                </div>
                </div>
            </div>
        </div>
            
     
    )
}
}

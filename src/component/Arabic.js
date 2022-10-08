import React from "react";
import Home from "./Home";
import Text1 from "./text-ar/Text1";
import Part5 from "./Part5";
import Part2 from "./Part2";
import Text3 from "./text-ar/Text3";
import Text4 from "./text-ar/Text4";
import Text5 from "./text-ar/Text5";
import Text6 from "./text-ar/Text6";
import Text8 from "./text-ar/Text8";
import Text9 from "./text-ar/Text9";
import Text12 from "./text-ar/Text12";
import Text11 from "./text-ar/Text11";
import Text10 from "./text-ar/Text10";
import Part from "./Part";
import YesOrNoP from "./YesorNoP";
import Title from "./Title";
import NavbarA from "./NavbarA";
import Avarage from "./Avarage";
import Text2 from "./text-ar/Text2";
import Text7 from "./text-ar/Text7";
import "./arabic-font.css";
function Arabic() {
  return (
    <div dir="rtl">
      <Home
        navbar={<NavbarA />}
        h={"تحقيق"}
        name={"أمل حميدوش"}
        t={"منظمات المجتمع المدني السوري شريكات في سلب النساء إجازة الأمومة"}
      />
      <div className="py-5 m-auto container">
        <Text1 />
        <Part5
          tt={" حق العاملات بإجازة الأمومة مسلوب"}
          av={<Avarage />}
          te={<Text2 />}
        />
        <Text3 />
      </div>
      <Title title={"دُعاء القيصرية"} img={"background-title3"} />
      <div className="py-5 m-auto container">
        <Text4 />
      </div>
      <Title title={"عقاب الحمل... تمييز سلبي"} img={"background-title1"} />
      <div className="py-5 m-auto container">
        <Text5 />
      </div>
      <Title title={"نساء يُخفين حملهن "} img={"background-title4"} />
      <div className="py-5 m-auto container">
        <Text6 />
      </div>

      <Title
        title={"  مزاجية المنظمات ومسؤولية الجهات المانحة"}
        img={"background-title2"}
      />

      <div className="py-5 m-auto container">
        <Part2 te={<Text7 />} />
        <Part
          text={<Text8 />}
          chart={
            <YesOrNoP
              titles=" هل هناك عقد عمل موثق بينك وبين الجمعية/المنظمة التي تعملين بها؟"
              datas={[
                ["الخيار", "النسبة"],
                ["نعم", 0.716],
                ["لا", 0.246],
                ["لا أعرف", 0.038],
              ]}
            />
          }
        />

        <Part
          text={<Text9 />}
          chart={
            <YesOrNoP
              titles="هل لديك نسخة مصورة من عقد العمل؟"
              datas={[
                ["الخيار", "النسبة"],
                ["نعم", 0.567],
                ["لا", 0.418],
                ["لا أعرف", 0.005],
                ["وثيقة تطوع", 0.01],
              ]}
            />
          }
        />
        <Text10 />
      </div>
      <div className="py-5 m-auto container">
        <Text11 />
      </div>
      <Title title={"دعوات لتغيير الواقع "} img={"background-title5"} />
      <div className="py-5 m-auto container">
        <Text12 />
      </div>
    </div>
  );
}

export default Arabic;

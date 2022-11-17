import React from "react";
import Home from "./Home";
import Text1 from "./text-en/Text1";
import Part5 from "./Part5";
import Part2 from "./Part2";
import Text3 from "./text-en/Text3";
import Text4 from "./text-en/Text4";
import Text5 from "./text-en/Text5";
import Text6 from "./text-en/Text6";
import Text8 from "./text-en/Text8";
import Text9 from "./text-en/Text9";
import Text12 from "./text-en/Text12";
import Text11 from "./text-en/Text11";
import Text10 from "./text-en/Text10";
import Part from "./Part";
import YesOrNoP from "./YesorNoP";
import NavbarE from "./NavbarE";
import Title from "./Title";
import Avarage from "./AvarageEn";
import Text2 from "./text-en/Text2";
import Text7 from "./text-en/Text7";
import "./font-english.css";
function English() {
  return (
    <div dir="ltr" className="english-font">
      <Home
        navbar={<NavbarE />}
        h={"Investigation by :"}
        name={"Amal Hmedosh"}
        t={
          "Syrian Civil Society Organizations Accomplice in Robbing Women of Maternity Leave "
        }
      />
      <div className="py-5 m-auto container">
        <Text1 />
        <Part5
          tt={"Employees' right to maternity leave is robbed"}
          av={<Avarage />}
          te={<Text2 />}
        />
        <p className="text-center mb-5 font-bold">
          Duration of leave granted to female workers in civil society
          organizations
        </p>
        <Text3 />
      </div>
      <Title title={"C-Section Prayer"} img={"background-title3"} />
      <div className="py-5 m-auto container">
        <Text4 />
      </div>
      <Title
        title={"Punishment for Getting Pregnant… Negative Discrimination:"}
        img={"background-title1"}
      />
      <div className="py-5 m-auto container">
        <Text5 />
      </div>
      <Title title={"Women hiding their pregnancy"} img={"background-title4"} />
      <div className="py-5 m-auto container">
        <Text6 />
      </div>

      <Title
        title={
          "Moodiness in the Organizations and the Responsibility of the Donors:"
        }
        img={"background-title2"}
      />

      <div className="py-5 m-auto container">
        <Part2
          te={<Text7 />}
          tm={
            "Map of the geographical distribution of Syrian civil society organizations"
          }
        />
        <Part
          text={<Text8 />}
          chart={
            <YesOrNoP
              titles=" Is there a notarised employment contract between you and the society/organisation you are working for ?"
              datas={[
                ["Answer", "Percentage"],
                ["Yes", 0.716],
                ["No", 0.246],
                ["I do not know ", 0.038],
              ]}
            />
          }
        />

        <Part
          text={<Text9 />}
          chart={
            <YesOrNoP
              titles=" Do you have a photocopy of the employment contract ?"
              datas={[
                ["Answer", "Percentage"],
                ["Yes", 0.567],
                ["No", 0.418],
                ["I do not know", 0.005],
                [" Volunteer Certificate", 0.01],
              ]}
            />
          }
        />
        <Text10 />
      </div>
      <div className="py-5 m-auto container">
        <Text11 />
      </div>
      <Title
        title={"Calls for Changing this Reality:"}
        img={"background-title5"}
      />
      <div className="py-5 m-auto container">
        <Text12 />
      </div>
    </div>
  );
}

export default English;

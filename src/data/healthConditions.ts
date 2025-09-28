import med1 from "./../assets/medicine/bite.png";
import med2 from "./../assets/medicine/cramps.png";
import med3 from "./../assets/medicine/flu.png";
import med4 from "./../assets/medicine/gout.png";
import med5 from "./../assets/medicine/hemorrhoids.png";
import med6 from "./../assets/medicine/nausea.png";
//import med7 from "./../assets/hero/banner7.png";
//import Banner8 from "./../assets/hero/banner8.jpg";
//import Banner9 from "./../assets/hero/banner9.jpg";



export interface HealthCondition {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

export const healthConditions: ReadonlyArray<HealthCondition> = [
  { id: 1, title: "Cold Flu And Sore...", image: med1, bgColor: "#4CAF50" },
  { id: 2, title: "Bite And Stings", image: med2, bgColor: "#FF9800" },
  { id: 3, title: "Vomiting Nausea And...", image: med3, bgColor: "#2196F3" },
  { id: 4, title: "Stomach Cramping An...", image: med4, bgColor: "#FFC107" },
  { id: 5, title: "Gout Pain And...", image: med5, bgColor: "#4CAF50" },
  { id: 6, title: "Haemorrhoids", image: med6, bgColor: "#00BCD4" }
];

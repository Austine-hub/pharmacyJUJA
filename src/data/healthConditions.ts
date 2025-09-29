// ✅ Import only the images that are actually used
import med1 from "./../assets/medicine/bite.png";
import med2 from "./../assets/medicine/cramps.png";
import med3 from "./../assets/medicine/flu.png";
import med4 from "./../assets/medicine/gout.png";
import med5 from "./../assets/medicine/hemorrhoids.png";
import med6 from "./../assets/medicine/nausea.png";
import med7 from "./../assets/medicine/vitamin.png";
import med8 from "./../assets/medicine/skin.png";
import med10 from "./../assets/medicine/repro.png";
import med11 from "./../assets/medicine/paeds.png";
import med12 from "./../assets/medicine/inflammation.png";
import med14 from "./../assets/medicine/first-aid.png";
import med15 from "./../assets/medicine/antibiotics.png";
import med16 from "./../assets/medicine/allergy.png";
import med17 from "./../assets/medicine/cancer.png";
import med18 from "./../assets/medicine/bones-joints.png";
import med19 from "./../assets/medicine/DM.png";
import med20 from "./../assets/medicine/BP.png";
import med21 from "./../assets/medicine/eye.png";
import med22 from "./../assets/medicine/kidney.png";
import med23 from "./../assets/medicine/oral.png";

export interface HealthCondition {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

export const healthConditions: ReadonlyArray<HealthCondition> = [
  { id: 1, title: "Pain Relief & Inflammation", image: med12, bgColor: "#4CAF50" },
  { id: 2, title: "Cold, Flu & Sore Throat", image: med3, bgColor: "#4CAF50" },
  { id: 3, title: "Bites & Stings", image: med1, bgColor: "#FF9800" },
  { id: 4, title: "Vomiting & Nausea", image: med6, bgColor: "#2196F3" },
  { id: 5, title: "Stomach Cramping", image: med2, bgColor: "#FFC107" },
  { id: 6, title: "Gout & Joint Pain", image: med4, bgColor: "#4CAF50" },
  { id: 7, title: "Hemorrhoids", image: med5, bgColor: "#00BCD4" },
  { id: 8, title: "Sexual & Reproductive Health", image: med10, bgColor: "#4CAF50" },
  { id: 9, title: "Vitamins & Supplements", image: med7, bgColor: "#2196F3" },
  { id: 10, title: "Antibiotics & Antivirals", image: med15, bgColor: "#4CAF50" },
  { id: 11, title: "Kidney & Liver Health", image: med22, bgColor: "#4CAF50" },
  { id: 12, title: "Skin & Dermatology", image: med8, bgColor: "#FF9800" },
  { id: 13, title: "Eye & Ear Care", image: med21, bgColor: "#2196F3" },
  { id: 14, title: "Mental Health & Sleep", image: med2, bgColor: "#FFC107" },
  { id: 15, title: "Cancer & Oncology Support", image: med17, bgColor: "#00BCD4" },
  { id: 16, title: "Weight Management & Nutrition", image: med3, bgColor: "#4CAF50" },
  { id: 17, title: "Pediatrics & Children’s Health", image: med11, bgColor: "#FF9800" },
  { id: 18, title: "Emergency & First Aid", image: med14, bgColor: "#2196F3" },
  { id: 19, title: "Diabetes Care", image: med19, bgColor: "#FFC107" },
  { id: 20, title: "Respiratory Care (Asthma & COPD)", image: med4, bgColor: "#4CAF50" },
  { id: 21, title: "Allergy & Immunity", image: med16, bgColor: "#00BCD4" },
  { id: 22, title: "Heart & Blood Pressure", image: med20, bgColor: "#4CAF50" },
  { id: 23, title: "Bone & Joint Health", image: med18, bgColor: "#4CAF50" },
  { id: 24, title: "Infections & Immune Support", image: med15, bgColor: "#FF9800" },
  { id: 25, title: "Oral & Dental Care", image: med23, bgColor: "#2196F3" },
];

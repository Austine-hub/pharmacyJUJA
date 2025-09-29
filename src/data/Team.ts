// data/Team.ts


import Team1 from "./../assets/team/team1.png";
import Team2 from "./../assets/team/team2.png";
import Team3 from "./../assets/team/team3.png";
import Team4 from "./../assets/team/team4.png";
import Team5 from "./../assets/team/team5.png";
import Team6 from "./../assets/team/team6.png";


export interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Lydi Thomas",
    title: "MBA, MD Dermatology",
    specialization: "Dermatology & Skin Care",
    image: Team1,
  },
  {
    id: 2,
    name: "Dr. Priyom Bose",
    title: "Ph.D. Anesthesiology",
    specialization: "General & Anesthesiology",
    image: Team2,
  },
  {
    id: 3,
    name: "Dr. Shweta Sinha",
    title: "Ph.D. Psychology",
    specialization: "Clinical Psychology",
    image: Team3,
  },
  {
    id: 4,
    name: "Dr. Chiara Stellhran",
    title: "Ph.D. Pulmonology",
    specialization: "Respiratory Medicine",
    image: Team4,
  },
  {
    id: 5,
    name: "Dr. Mary Cooke",
    title: "M.Sc. Infectious Diseases",
    specialization: "Infectious Diseases & Immunology",
    image: Team5,
  },
  {
    id: 6,
    name: "Dr. Tomislav Stankovic",
    title: "Ph.D. Microbiology",
    specialization: "Microbiology & Cancer Research",
    image: Team6,
  },
];

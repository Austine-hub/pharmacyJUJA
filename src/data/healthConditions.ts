export interface HealthCondition {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

export const healthConditions: ReadonlyArray<HealthCondition> = [
  { id: 1, title: "Cold Flu And Sore...", image: "/api/placeholder/200/180", bgColor: "#4CAF50" },
  { id: 2, title: "Bite And Stings", image: "/api/placeholder/200/180", bgColor: "#FF9800" },
  { id: 3, title: "Vomiting Nausea And...", image: "/api/placeholder/200/180", bgColor: "#2196F3" },
  { id: 4, title: "Stomach Cramping An...", image: "/api/placeholder/200/180", bgColor: "#FFC107" },
  { id: 5, title: "Gout Pain And...", image: "/api/placeholder/200/180", bgColor: "#4CAF50" },
  { id: 6, title: "Haemorrhoids", image: "/api/placeholder/200/180", bgColor: "#00BCD4" }
];

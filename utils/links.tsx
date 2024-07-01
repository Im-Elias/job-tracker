import { AppWindowIcon, AreaChart, Layers } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: Array<NavLink> = [
  {
    href: "/add-job",
    label: "añadir trabajo",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "trabajos",
    icon: <AppWindowIcon />,
  },
  {
    href: "/stats",
    label: "estadísticas",
    icon: <AreaChart />,
  },
];

export default links;

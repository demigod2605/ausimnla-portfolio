import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import type { IconType } from "react-icons";

export type Social = {
  name: string;
  url: string;
  Icon: IconType;
};

export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/demigod2605", Icon: SiGithub },
  { name: "Facebook", url: "https://www.facebook.com/ausi.mnla", Icon: SiFacebook },
  { name: "Instagram", url: "https://www.instagram.com/ausi.kidd/", Icon: SiInstagram },
];

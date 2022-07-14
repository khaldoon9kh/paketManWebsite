import EmailIcon from "../../assests/pics/email.svg";
import PinIcon from "../../assests/pics/pinMap.svg";
import PhoneIcon from "../../assests/pics/phone.svg";
let local = localStorage.getItem("language");
let phoneNum = () => {
  switch (local) {
    case "ar":
      return "0533 581 00 93";
    case "en":
      return "0531 634 56 60";
    case "tr":
      return "0533 581 00 92";
    case "ru":
      return "0533 581 94 76";
    default:
      return "0533 581 00 92";
  }
};
const contactInfo = [
  {
    icon: PinIcon,
    text: "Kayabaşı Mah. Akzambak Sk ADIM İSTANBUL Sitesi B2 Blok Dukkan: T20 Başakşehir - İstanbul",
  },
  {
    icon: EmailIcon,
    text: "info@paketman.com.tr",
  },
  {
    icon: PhoneIcon,
    text: phoneNum(),
  },
];

export default contactInfo;

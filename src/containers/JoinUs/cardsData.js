import resturant from "../../assests/pics/Path.svg";
import homeChef from "../../assests/pics/homeChef.svg";
import driver from "../../assests/pics/driver.svg";
import i18next from "i18next";

const cardsData = [
  {
    cardLogo: resturant,
    cardTitle: `${i18next.t("join.card.resturant")}`,
  },
  {
    cardLogo: homeChef,
    cardTitle: `${i18next.t("join.card.home")}`,
  },
  {
    cardLogo: driver,
    cardTitle: `${i18next.t("join.card.driver")}`,
  },
];

export default cardsData;

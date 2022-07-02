import i18next from "i18next";
import AllForYou from "../../assests/featuresPic/allForYou.png";
import BeBoss from "../../assests/featuresPic/beBoss.png";
import Offers from "../../assests/featuresPic/offers.png";
import Tracking from "../../assests/featuresPic/tracking.png";

const featuresData = [
  {
    photo: AllForYou,
    featHead: `${i18next.t("feature.one.featHead")}`,
    featText: `${i18next.t("feature.one.featText")}`,
    id: "1",
  },
  {
    photo: BeBoss,
    featHead: `${i18next.t("feature.two.featHead")}`,
    featText: `${i18next.t("feature.two.featText")}`,
    id: "2",
  },
  {
    photo: Offers,
    featHead: `${i18next.t("feature.three.featHead")}`,
    featText: `${i18next.t("feature.three.featText")}`,
    id: "3",
  },
  {
    photo: Tracking,
    featHead: `${i18next.t("feature.four.featHead")}`,
    featText: `${i18next.t("feature.four.featText")}`,
    id: "4",
  },
];

export default featuresData;

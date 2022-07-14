import i18next from "i18next";
import ar_1 from "../../assests/featuresPic/ar/1.png";
import ar_2 from "../../assests/featuresPic/ar/2.png";
import ar_3 from "../../assests/featuresPic/ar/3.png";
import ar_4 from "../../assests/featuresPic/ar/4.png";
import en_1 from "../../assests/featuresPic/en/1.png";
import en_2 from "../../assests/featuresPic/en/2.png";
import en_3 from "../../assests/featuresPic/en/3.png";
import en_4 from "../../assests/featuresPic/en/4.png";
import tr_1 from "../../assests/featuresPic/tr/1.png";
import tr_2 from "../../assests/featuresPic/tr/2.png";
import tr_3 from "../../assests/featuresPic/tr/3.png";
import tr_4 from "../../assests/featuresPic/tr/4.png";
import ru_1 from "../../assests/featuresPic/ru/1.png";
import ru_2 from "../../assests/featuresPic/ru/2.png";
import ru_3 from "../../assests/featuresPic/ru/3.png";
import ru_4 from "../../assests/featuresPic/ru/4.png";

const featuresData = [
  {
    photo: {
      ar: ar_1,
      en: en_1,
      tr: tr_1,
      ru: ru_1,
    },
    featHead: `${i18next.t("feature.one.featHead")}`,
    featText: `${i18next.t("feature.one.featText")}`,
    id: "1",
  },
  {
    photo: {
      ar: ar_2,
      en: en_2,
      tr: tr_2,
      ru: ru_2,
    },
    featHead: `${i18next.t("feature.two.featHead")}`,
    featText: `${i18next.t("feature.two.featText")}`,
    id: "2",
  },
  {
    photo: {
      ar: ar_3,
      en: en_3,
      tr: tr_3,
      ru: ru_3,
    },
    featHead: `${i18next.t("feature.three.featHead")}`,
    featText: `${i18next.t("feature.three.featText")}`,
    id: "3",
  },
  {
    photo: {
      ar: ar_4,
      en: en_4,
      tr: tr_4,
      ru: ru_4,
    },
    featHead: `${i18next.t("feature.four.featHead")}`,
    featText: `${i18next.t("feature.four.featText")}`,
    id: "4",
  },
];

export default featuresData;

import i18next from "i18next";
import ar_1 from "../../assests/featuresPic/ar/1.jpg";
import ar_2 from "../../assests/featuresPic/ar/2.jpg";
import ar_3 from "../../assests/featuresPic/ar/3.jpg";
import ar_4 from "../../assests/featuresPic/ar/4.jpg";
import en_1 from "../../assests/featuresPic/en/1.jpg";
import en_2 from "../../assests/featuresPic/en/2.jpg";
import en_3 from "../../assests/featuresPic/en/3.jpg";
import en_4 from "../../assests/featuresPic/en/4.jpg";
import tr_1 from "../../assests/featuresPic/tr/1.jpg";
import tr_2 from "../../assests/featuresPic/tr/2.jpg";
import tr_3 from "../../assests/featuresPic/tr/3.jpg";
import tr_4 from "../../assests/featuresPic/tr/4.jpg";
import ru_1 from "../../assests/featuresPic/ru/1.jpg";
import ru_2 from "../../assests/featuresPic/ru/2.jpg";
import ru_3 from "../../assests/featuresPic/ru/3.jpg";
import ru_4 from "../../assests/featuresPic/ru/4.jpg";

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

import { useLocale, useTranslations } from "next-intl";

const ServicesPage = () => {
  const locale = useLocale();
  return (
    <>
      <h1>Services page</h1>
      <p>{locale}</p>
      <div>
        Mollit pariatur fugiat eiusmod ullamco pariatur adipisicing culpa duis
        excepteur tempor laborum. Minim et nisi sint dolor ut aliquip enim esse.
        Elit dolore in exercitation mollit eu est excepteur excepteur in officia
        amet.
      </div>
    </>
  );
};

export default ServicesPage;

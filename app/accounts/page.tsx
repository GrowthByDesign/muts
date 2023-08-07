import HeroImg from "../components/inner-pages/HeroImg";
import CoverdaleAccounts from "./(savings)/coverdale/CoverDaleAccounts";
import RegSavings from "./(savings)/regSavings/RegSavings";
import MMAccounts from "./(savings)/moneyAccounts/MMAccounts";
import ClubAccounts from "./(savings)/clubAccounts/ClubAccounts";
import Cds from "./(savings)/cds/Cds";
import IRAs from "./(savings)/iras/IRAs";
import Container from "../layouts/Container";
import ContentSection from "../layouts/ContentSection";
import SectionHeaders from "../components/inner-pages/SectionHeaders";

const page = () => {
  return (
    <main>
      <HeroImg
        title="accounts"
        desc="Save & Earn Accounts"
        desc2="Dividend bearing accounts promote financial growth"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/account-hero.jpg"
        imgAlt="accounts"
      />
      {/* <SectionHeaders title="Savings" subHeading="Save & Earn Accounts" subText="Dividen bearing accounts promote financial growth." /> */}
      {/* Savings */}
      <RegSavings />
      <MMAccounts />
      <ClubAccounts />
      <Cds />
      <IRAs />
      <CoverdaleAccounts />
      {/* <SectionHeaders title="Checking" subHeading="" subText="" /> */}
      {/* Checking */}
      <div className="tw-py-4"></div>
    </main>
  );
};

export default page;

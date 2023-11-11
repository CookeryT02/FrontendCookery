import BannerHead from "../../../components/common/about/banner-head/banner-head";
import WhatWeDo from "../../../components/common/about/what-we-do/what-we-do";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us" />
      <Spacer />
      <BannerHead />
      <WhatWeDo />
      <Spacer />
    </div>
  );
};

export default AboutPage;

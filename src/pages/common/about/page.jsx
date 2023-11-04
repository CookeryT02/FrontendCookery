import BannerHead from "../../../components/common/about/banner-head/banner-head";
import WhatWeDo from "../../../components/common/about/what-we-do/what-we-do";
import PageHeader from "../../../components/common/page-header/page-header";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us"/>
      <BannerHead />
      <WhatWeDo />
    </div>
  );
};

export default AboutPage;

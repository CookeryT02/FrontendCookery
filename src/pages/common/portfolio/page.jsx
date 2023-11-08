import BannerHead from "../../../components/common/about/banner-head/banner-head";
import PageHeader from "../../../components/common/page-header/page-header";
import Portfolio from "../../../components/common/portfolio/portfolio";
import Spacer from "../../../components/common/spacer/spacer";

const PortfolioPage = () => {
  return (
    <>
      <PageHeader title="Portfolio" />
      <Spacer />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;

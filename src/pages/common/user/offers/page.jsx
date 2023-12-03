import { Container, Row } from "react-bootstrap";
import {
  CustomPagination,
  PageHeader,
  Spacer,
  UserOffersTable,
} from "../../../../components";
import { useEffect, useState } from "react";
import { services } from "../../../../services";

const UserOffersPage = () => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [paging, setPaging] = useState({});

  const loadData = async (page) => {
    try {
      const data = await services.offer.getOffersByPage(page);
      const {
        content,
        totalPages,
        pageable: { pageNumber },
      } = data;
      setOffers(content);
      setPaging({ totalPages, pageNumber });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(0);
  }, []);

  return (
    <>
      <Spacer />
      <UserOffersTable
        loading={loading}
        offers={offers}
      />
      {paging.totalPages > 1 && (
        <Row className="mt-5">
          <CustomPagination paging={paging} loadData={loadData} />
        </Row>
      )}
      <Spacer />
    </>
  );
};

export default UserOffersPage;

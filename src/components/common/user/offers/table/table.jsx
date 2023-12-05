import { Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { utils } from "../../../../../utils";

const tableHeaders = ["Date", "Code", "Items", "Total"];

const UserOffersTable = (props) => {
  const navigate = useNavigate();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.loading && (
          <tr>
            <td colSpan={4} className="text-center">
              <Spinner animation="border" size="sm" />
            </td>
          </tr>
        )}
        {props.offers.map((offer, index) => (
          <tr
            key={offer?.id || index}
            onClick={() => navigate(`${offer?.id}`)}
            style={{ cursor: "pointer" }}>
            {[
              utils.functions.formatDateTime(
                offer?.createAt
              ),
              offer?.code,
              offer?.offerItems.length,
              offer?.grandTotal
            ].map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserOffersTable;

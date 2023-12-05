import { useState } from "react";
import { constants } from "../../../constants";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DataTable from "react-data-table-component";
import { utils } from "../../../utils";
import { services } from "../../../services";
import { Loading, Spacer } from "../../../components";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Form, Button, InputGroup } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";

const { routes } = constants;

const AdminUsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearch = () => {
    // searchText 
  }

  const navigate = useNavigate();

  const loadData = async (page) => {
    try {
      const data = await services.user.getUsersByPage(page - 1, perPage);
      setUserData(data.content);
      setTotalRows(data.totalElements);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  const handlePerPageRowsChange = async (newPerPage, page) => {
    try {
      const data = await services.user.getUsersByPage(
        page - 1,
        newPerPage
      );
      setUserData(data.content);
      setPerPage(newPerPage);
      setTotalRows(data.totalElements);
    } catch (error) {
      utils.functions.swalToast(
        `${error.message}`
      );
    }
  };

  const handlePageChange = (page) => {
    loadData(page - 1);
  };

  const handleRowClicked = (row) => {
    navigate(`${routes.adminDashboard}/${row.id}/users`);
  };

  return (
    <div className="admin-users-page pe-5">
      <Spacer height={"6rem"} />

      <Breadcrumb>
        <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/users">Users</Breadcrumb.Item>
      </Breadcrumb>


      <InputGroup >
        <Form.Control value={searchText}
          onChange={handleInputChange} placeholder="Type something"
        >
        </Form.Control>
        <Button disabled={!searchText} onClick={handleSearch}><BiSearchAlt2 size={24} /></Button>
      </InputGroup>

      <div className="admin-users-table-container">
        <DataTable
          columns={utils.tables.adminUserColumns}
          data={userData}
          progressPending={loading}
          progressComponent={<Loading height={500} />}
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerPageRowsChange}
          onChangePage={handlePageChange}
          paginationPerPage={perPage}
          onRowClicked={handleRowClicked}
          pagination
          paginationServer
          highlightOnHover
        />
      </div>
    </div>
  );
};

export default AdminUsersPage;

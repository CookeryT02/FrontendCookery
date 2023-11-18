import React from 'react'
import { constants } from '../../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { utils } from "../../../../../utils";
import { Button, Dropdown } from 'react-bootstrap';
import { logout } from '../../../../../store/slice/auth/auth-slice';


const {
    routes: { login, register, userProfile, userReservations, adminDashboard },
} = constants;

const UserMenu = () => {

    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        utils.functions.swalQuestion("Logout", "Are you sure you want to logout?")
            .then((response) => {
                if (response.isConfirmed) {
                    dispatch(logout());
                }
            })
    }

    return (
        <div className="user-menu">
            {isLoggedIn ? (
                <Dropdown align="end">
                    <Dropdown.Toggle>
                        {user?.firstName || "Guest"} {user?.lastName || ""}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} onClick={handleLogout}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <>
                    <Button
                        className="text-capitalize"
                        onClick={() => navigate(login)}>
                        login
                    </Button>
                </>
            )}
        </div>
    )
}

export default UserMenu
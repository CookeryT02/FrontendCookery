import React from 'react'
import { constants } from '../../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { utils } from "../../../../../utils";
import { Button, Dropdown } from 'react-bootstrap';
import { logout } from '../../../../../store/slice/auth/auth-slice';
import './user-menu.scss';
import { IoIosLogIn } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const {
    routes: { login, userProfile, userReservations, adminDashboard },
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
                        {user?.firstName || "Guest"} <IoMdArrowDropdown />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} onClick={handleLogout}>
                            Logout
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={userProfile}>
                            Profile
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <>
                    <Button
                        onClick={() => navigate(login)}>
                        <IoIosLogIn /> login
                    </Button>
                </>
            )}
        </div>
    )
}

export default UserMenu
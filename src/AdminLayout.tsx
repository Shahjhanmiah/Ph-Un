import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <h1>THis is Navbar Bro</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { Outlet } from '@remix-run/react'

function Admin() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

export default Admin

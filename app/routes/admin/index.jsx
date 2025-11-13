import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { Outlet } from '@remix-run/react'

import { redirect } from '@remix-run/node';

// export async function loader({ request }) {
//   const token = await getToken(request);
//   return json({ token });
// }


function Admin() {
  // const { token } = useLoaderData();
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

export default Admin

import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { Outlet, useLoaderData } from '@remix-run/react'

import { json, redirect } from '@remix-run/node';
import { getCurrentUser } from '../../sessionHandler.server';

// export async function loader({ request }) {
//   const token = await getToken(request);
//   return json({ token });
// }
export async function loader({ request }) {
  const { user, token } = await getCurrentUser(request);
  return json({ user, token });
}

function Admin() {
  const { user, token } = useLoaderData();
  return (
    <AdminLayout user={user} token={token}>
      <Outlet />
    </AdminLayout>
  )
}

export default Admin

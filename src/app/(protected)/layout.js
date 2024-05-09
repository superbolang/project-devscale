import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { DashboardLayout } from '@/components/dashboardLayout';

export default async function Layout() {
  const cookieStore = cookies();

  // 1. Cek apakah ada  token di cookies
  const token = cookieStore.get('token');
  if (!token?.value) {
    redirect('/auth/login'); // Login
  }
  // 2. Cek apakah token valid
  try {
    // jwt verifiy tidak bisa dilakukan di client
    jwt.verify(token.value, 'thisissecretkey');

    const decodeData = jwt.decode(token.value);
    console.log(decodeData);
    return <DashboardLayout isAdmin={decodeData.role === 'ADMIN'} name={decodeData.name} ></DashboardLayout>;
  } catch (error) {
    console.log('TOKEN TIDAK VALID');
    redirect('/auth/login'); // Login
  }
}

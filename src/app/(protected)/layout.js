import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { DashboardLayout } from '@/components/dashboardLayout';

export default async function Layout({ children }) {
  const skipLogin  = true;

  if (skipLogin) {
    return <div>{children}</div>
  }

  const cookieStore = cookies();

  // 1. Cek apakah ada  token di cookies
  const token = cookieStore.get('token');
  if (!token?.value) {
    redirect('/login'); // Login
  }
  // 2. Cek apakah token valid
  try {
    // jwt verifiy tidak bisa dilakukan di client
    jwt.verify(token.value, 'thisissecretkey');

    const decodeData = jwt.decode(token.value);
    console.log(decodeData);
    return (
      <DashboardLayout isAdmin={decodeData.role === 'ADMIN'} name={decodeData.name}>
        {children}
      </DashboardLayout>
    );
  } catch (error) {
    console.log('TOKEN TIDAK VALID');
    redirect('/login'); // Login
  }
}

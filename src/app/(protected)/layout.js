import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';


export default async function Layout({ children }) {
  const cookieStore = cookies();

  // 1. Cek apakah ada  token di cookies
  const token = cookieStore.get('token');
  if (!token?.value) {
    redirect('/'); // Login
  }
  
  return (
    <>
    {children}
    </>
  )
}

// isAuth.tsx

"use client";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import type { RootState } from '../GlobalRedux/store';
import { useRouter } from 'next/navigation';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (!auth) {
        router.push('/login');
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
'use client';

import React from 'react';
import Link from 'next/link';
import {logout} from '../GlobalRedux/features/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../GlobalRedux/store';
import { usePathname } from 'next/navigation'

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const pathname = usePathname()

  const logoutHandler = () => {
    console.log(pathname)
    dispatch(logout);
  }

  return (
    <div className="bg-blue-900 text-white p-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold">My App</div>
        <div className="flex-grow"></div>

        {/* {!isAuthenticated && !isLogin && (
          <Link href="/login">
            <button className="bg-blue-900 text-white px-4 py-2 focus:outline-none">
              Login
            </button>
          </Link>
        )}

        {!isAuthenticated && !isRegister && (
          <Link href="/register">
            <button className="bg-blue-900 text-white px-4 py-2 focus:outline-none">
              Register
            </button>
          </Link>
        )} */}

        {!isAuthenticated && (
          <>
            <button className="bg-blue-900 text-white px-4 py-2 focus:outline-none">
              {user.username}
            </button>
            <button
              className="bg-blue-900 text-white px-4 py-2 focus:outline-none"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header
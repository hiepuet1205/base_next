'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {register} from '../GlobalRedux/features/authSlice';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const submit = async () => {
    const apiUrl = 'http://localhost:5000/';
      const res = await fetch(`${apiUrl}auth/register`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.access_token) {
        dispatch(register(data));
        Cookies.set("loggedin", "true");
        router.push('/');
      } 
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-4xl font-bold mb-6 text-center">RegisterForm</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={submit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

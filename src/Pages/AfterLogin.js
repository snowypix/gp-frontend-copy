import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Categories from "./Categories";
import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';
import { jwtDecode } from "jwt-decode";

const AfterLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getCookieValue = (name) => (
      document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1]
    );

    const token = getCookieValue('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded.role);

        if (decoded.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/categories');
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        // Handle the error appropriately
      }
    }
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] w-[1536px] h-[1213px]">
        <div className="absolute top-[0px] left-[0px] rounded-[5px] box-border w-[1536px] h-[1213px]t">
          <div className="absolute top-[0px] left-[0px] bg-white w-[1540px] h-[1024px] overflow-hidden text-left text-13xl text-white font-itim">
            <div className="absolute top-[455px] left-[160px] text-black inline-block w-[1119px] h-[450px]">
              <p className="m-0">Welcome!</p>
              <p className="m-0">
                You've found a community of enthusiasts. Browse topics, start
                discussions, and connect with others here.
              </p>
              <p className="m-0">Get Settled In:</p>
              <ul className="m-0 font-inherit text-inherit pl-[43px]">
                <li className="mb-0">Introduce yourself.</li>
                <li className="mb-0">Check out popular categories .</li>
                <li className="mb-0">
                  Find answers by browsing "Latest Posts" or starting a new thread.
                </li>
                <li>
                  Members are friendly - ask questions and share your knowledge.
                </li>
              </ul>
            </div>

            <div className="absolute top-[770px] left-[162px] bg-salmon h-[67px] flex flex-row items-center justify-center py-2.5 pr-[60px] pl-[22px] box-border gap-[11px] text-black">
              <img
                className="relative max-h-full w-10 object-cover"
                alt=""
                src="/arrow-1@2x.png"
              />
              <div>
                <Link to="/categories" className="relative">
                  Explore
                </Link>
              </div>

            </div>

            <img
              className="absolute top-[148px] left-[160px] w-[239px] h-[239px] overflow-hidden object-cover"
              alt=""
              src="/ideasvgrepocom-1@2x.png"
            />

            <Header2 />

          </div>
        </div>
      </div>
    </div>
  )
}

export default AfterLogin
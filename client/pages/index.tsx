import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  const [profile, setProfile] = React.useState();
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full bg-[#FAFAFA] flex-row justify-center items-center">
        <div className="h-full w-full text-left flex flex-col justify-center pl-8">
          <p className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-yellow-800">
            This is Lawn
          </p>
          <p className="pl-4 font-semibold text-2xl text-gray-700">
            Lawn is a Lens Protocol based Community Builder
          </p>
          <input onChange={(e: any) => setProfile(e.target.value)} />
          <button>
            <Link href={`/profile/${profile}`}>
              <p className="cursor-pointer text-violet-600    text-lg font-medium text-center mt-2 mb-2">
                {profile}
              </p>
            </Link>
          </button>
        </div>

        <div className="h-full w-full flex justify-center items-center">
          <div className="h-2/3 w-2/3 flex justify-center items-center rounded-lg backdrop-blur-sm bg-white/30 bg-[url('../public/bg.avif')] bg-blend-screen bg-cover bg-center bg-no-repeat">
            <p className="text-white z-10 text-4xl font-bold">Lawn</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

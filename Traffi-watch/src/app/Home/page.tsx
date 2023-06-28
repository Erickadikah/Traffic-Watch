"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Incidents from "../components/Incidents";
import Link from "next/link";
import { Button } from "@mantine/core";
import Data from "./Data";
import "./page.css";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";
import { signOut } from "next-auth/react";
import Image from "next/image";
// import { get } from "http";
import { getFirestore, collection, getDocs, DocumentSnapshot } from "firebase/firestore";
// import app from "@/app/shared/FirebaseConfig";
import { useEffect } from 'react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBONiHHTdPot1Jx1m5Vmz65Z6MjSFt9Hao",
  authDomain: "traffic-watch-cfb31.firebaseapp.com",
  projectId: "traffic-watch-cfb31",
  storageBucket: "traffic-watch-cfb31.appspot.com",
  messagingSenderId: "140193469367",
  appId: "1:140193469367:web:0d2549f814fcabe0ad4e32",
  measurementId: "G-C2MLDK9HYS"
};
const app = initializeApp(firebaseConfig);
const data = [
  {
    label: "High Traffic",
    stats: "Stats 1",
    progress: 50,
    color: "#FF0000",
    icon: "up",
  },
  {
    label: "Low Traffic",
    stats: "Stats 2",
    progress: 75,
    color: "#00FF00",
    icon: "down",
  },
  {
    label: "Medium Traffic",
    stats: "Stats 3",
    progress: 25,
    color: "#FFFF00",
    icon: "up",
  },
];

export default function Home() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const getPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc: DocumentSnapshot<any>) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    getPost();
  }, []);

  return (
    <main className=" w-full h-screen text-textLight  overflow-x-hidden overflow-scroll border-10">
      <Navbar links={[]} />
      <div
        className="h-[88vh] w-full mx-auto p-8 mt-0 border-r-8 "
        style={{ marginTop: "-9.4rem" }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Map />
          </div>
          <div
            style={{ flex: 1 }}
            className="w-full  items-center justify-end text-textLight bg-gray-600"
          >
            <div className="mt-5 p-4">
              <h1 className="text-4xl font-16 text-center mix-blend-color-burn mt-0">
                Traffic Data
              </h1>
              <Data data={data} />
            </div>
            <div className="mt-5 border-spacing-0 p-4">
              <ul className="flex gap-10 flex-col text-gray-800">
                <li>
                  <span
                    className="traffic-color-red"
                    style={{ backgroundColor: "#FF0000" }}
                  ></span>
                  Mombasa Road
                </li>
                <li>
                  <span
                    className="traffic-color-yellow"
                    style={{ backgroundColor: "#FFFF00" }}
                  ></span>
                  Thika Road
                </li>
                <li>
                  <span
                    className="traffic-color-green"
                    style={{ backgroundColor: "#00FF00" }}
                  ></span>
                  Waiyaki Way
                </li>
                <li>
                  <span
                    className="traffic-color-orange"
                    style={{ backgroundColor: "#FFA500" }}
                  ></span>
                  Jogoo Road
                </li>
                <li>
                  <span
                    className="traffic-color-yellow"
                    style={{ backgroundColor: "#FFFF00" }}
                  ></span>
                  Langata Road
                </li>
                <li>
                  <span
                    className="traffic-color-green"
                    style={{ backgroundColor: "#00FF00" }}
                  ></span>
                  Ngong Road
                </li>
              </ul>
              <Link href="/Add" className="mt-10 flex">
                <Button variant="outline" className="text-white">
                  {" "}
                  Add Event
                </Button>
              </Link>
              <div className="gap-8 flex mt-2">
                <div>
                  <Button
                    variant="outline"
                    className="text-black"
                    onClick={() => signOut()}
                  >
                    <LogoutButton />
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="text-black">
                    <ProfileButton />
                  </Button>
                  {/* <div>
                  <Image src={session?.user?.image} alt="profile" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[88vh] w-full mx-auto p-10"
        style={{ marginTop: "150px" }}
      >
        <Incidents />
      </div>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      ></main>
    </main>
  );
}

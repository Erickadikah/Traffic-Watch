"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
// import Incidents from "../components/Incidents";
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
// import Image from "next/image";
import Posts from "./posts";

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
  return (
    <main className=" w-full h-screen text-textLight  overflow-x-hidden overflow-scroll border-10">
      <Navbar links={[]} />
      <div
        className="h-[88vh] w-full mx-auto p-8 mt-0 border-r-8 "
        style={{ marginTop: "-9.4rem" }}
      >
        <div style={{ display: "block" }}>
          <div>
            <Map />
          </div>
          <div className="p-4 mt-10">
            <h1 className="text-2xl font-16 text-center mix-blend-color-burn">
              Traffic Status
            </h1>
            <Data data={data} />
            <Link href="/Add" className="mt-10 flex">
              <Button variant="outline" className="text-black rounded-md">
                {" "}
                Add Event
              </Button>
            </Link>
          </div>
          {/* posts */}
          <div className="w-full gap-10 top-40 flex flex-wrap justify-center items-center mt-8 lg:mt-0">
            <Posts />
          </div>
        </div>
      </div>
    </main>
  );
}

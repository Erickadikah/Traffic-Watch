import React from "react";
import icon1 from "../../../public/image1.svg";
import icon2 from "../../../public/image2.svg";
import icon3 from "../../../public/image3.svg";
import icon4 from "../../../public/image4.svg";
import Image from "next/image";

export default function Features() {
  return (
    <section className="container text-center">
      <h2>Features</h2>
      <div>
        <div className="row">
          <div className="col-md-4">
            <h3>Real-time Traffic</h3>
            <p>Get real-time traffic updates from other users on the road.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-20 gap-10 justify-center items-center">
        <div className="box-border h-42 w-42 border-4 hover:bg-gray-200">
          <Image
            src={icon1}
            alt="traffic"
            style={{ width: "180px", height: "100px" }}
          />
          <p className="text-bold text-teal-950 font-bold">
            Connect
            </p>
        </div>
        <div className="box-border h-42 w-42  border-4 hover:bg-gray-200">
          <Image
            src={icon2}
            alt="traffic"
            style={{ width: "180px", height: "100px" }}
          />
          <p className="text-bold text-teal-950 font-bold">Locate</p>
        </div>
        <div className="box-border h-42 w-42 border-4 hover:bg-gray-200">
          <Image
            src={icon3}
            alt="traffic"
            style={{ width: "180px", height: "100px" }}
          />
          <p className="text-bold text-teal-950 font-bold">
            Share Experience
            </p>
        </div>
        <div className="box-border h-42 w-42 border-4 hover:bg-gray-200">
          <Image
            src={icon4}
            alt="traffic"
            style={{ width: "180px", height: "100px" }}
          />
          <p className="text-bold text-teal-950 font-bold">
            Share Experience
            </p>
        </div>
      </div>
    </section>
  );
}

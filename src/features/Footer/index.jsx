import React from "react";
import visaIcon from "../../assets/icons/visa.svg";
import masterCardIcon from "../../assets/icons/mastercard.svg";
import maestroIcon from "../../assets/icons/maestro.svg";
import americanExpressIcon from "../../assets/icons/americanexpress.svg";

const Footer = () => {
  return (
    <section className="w-full h-full bg-stone-800 text-white px-4 md:px-0">
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full h-72 flex flex-col items-center p-10">
            <h3 className="w-full text-center py-2 text-lg font-bold border-b-2 border-amber-600 uppercase">
              working hours
            </h3>
            <div className="w-full flex py-3 justify-between capitalize">
              <ul>
                <li>monday</li>
                <li>tuesday</li>
                <li>wednesday</li>
                <li>thursday</li>
                <li>friday</li>
                <li>saturday</li>
                <li>sunday</li>
              </ul>
              <ul className="text-end">
                <li>8:00am to 5:00pm</li>
                <li>8:00am to 5:00pm</li>
                <li>8:00am to 5:00pm</li>
                <li>8:00am to 5:00pm</li>
                <li>8:00am to 5:00pm</li>
                <li>closed</li>
                <li>closed</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center p-10 md:h-72">
            <h3 className="w-full text-center py-2 text-lg font-bold border-b-2 border-amber-600 uppercase">
              contact
            </h3>
            <div className="w-full flex flex-col items-center py-3 gap-2 capitalize">
              <p className="font-bold">lorem ipsum</p>
              <p className="text-center">
                address: mount lebanon, pennsylvania 15228
              </p>
              <p>(000) 000-000</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full h-72 flex flex-col items-center p-10">
            <h3 className="w-full text-center py-2 text-lg font-bold border-b-2 border-amber-600 uppercase">
              payment accepted
            </h3>
            <ul className="w-full flex justify-around items-center py-5">
              <li className="w-20 bg-white">
                <img src={visaIcon} alt="visa" className="w-full " />
              </li>
              <li className="w-20 bg-white">
                <img
                  src={masterCardIcon}
                  alt="mastercard"
                  className="w-full "
                />
              </li>
              <li className="w-20 bg-white">
                <img src={maestroIcon} alt="maestro" className="w-full " />
              </li>
              <li className="w-20 bg-white">
                <img
                  src={americanExpressIcon}
                  alt="american express"
                  className="w-full "
                />
              </li>
            </ul>
          </div>
          <div className="w-full h-72 flex flex-col items-center p-10">
            <h3 className="w-full text-center py-2 text-lg font-bold border-b-2 border-amber-600 uppercase">
              social networks
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-around py-5 bg-stone-900">
        <p className="capitalize">
          <span className="font-bold">lorem ipsum</span> | mount lebanon,
          pennsylvania 15228
        </p>
        <p>For more information, call (000) 000-000</p>
      </div>
    </section>
  );
};

export default Footer;

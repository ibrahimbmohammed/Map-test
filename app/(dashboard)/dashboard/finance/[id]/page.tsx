/* eslint-disable react/prop-types */

'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ThreatImage from '@assets/png/icon.png';
import { mockedData3 } from '../incidentMock';

function SingleIncident({ params }: any) {
  const data = useMemo(() => mockedData3, []);
  const [sData, SetData] = useState<typeof mockedData3>([]);
  useEffect(() => {
    const foundData = data?.filter((item) => item?.id === params?.id);
    SetData(foundData);
  }, []);

  return (
    <div className="bg-white w-full   flex flex-col space-y-3 px-4 py-5 ">
      {/* Company Profile */}
      <div className="flex flex-col space-y-4 pb-4">
        <div className="flex flex-row space-x-4 items-center">
          <span className="rounded-xl h-6 w-3 bg-[#FFA187]" />
          <p className="font-normal text-md">Incident Summary </p>
        </div>
        <Image alt="oya image" src={ThreatImage} width={73} height={74} />
      </div>
      <div className="flex flex-col space-y-4 w-[80%] ">
        <div className="flex  items-center space-x-3">
          <p className="">Incident ID:</p>
          <p className="font-light text-sm">{sData[0]?.id}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Severity:</p>
          <p className="font-light text-sm">{sData[0]?.severity}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Status:</p>
          <p className="font-light text-sm">{sData[0]?.status}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Date:</p>
          <p className="font-light text-sm">{sData[0]?.date}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Description:</p>
          <p className="font-light text-sm">{sData[0]?.description}</p>
        </div>
        <div className="flex  items-start space-x-3">
          <p className="">Details:</p>
          <p className="font-light text-sm">{sData[0]?.details}</p>
        </div>
        <div className="flex pt-4 items-center space-x-3">
          <p className="">Affected Systems:</p>
          <p className="font-light text-sm">{sData[0]?.affectedSystems}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Attack Vector:</p>
          <p className="font-light text-sm">{sData[0]?.attackVector}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Threat Source:</p>
          <p className="font-light text-sm">{sData[0]?.threatSource}</p>
        </div>
        <div className="flex  items-center space-x-3">
          <p className="">Incident Category:</p>
          <p className="font-light text-sm">{sData[0]?.incidentCategory}</p>
        </div>
        <div className=" line border-b w-full " />
      </div>
      {/* Admin Profile */}
      <div className="flex flex-col space-y-4 pb-4 pt-4">
        <div className="flex flex-row space-x-4 items-center">
          <span className="rounded-xl h-6 w-3 bg-[#a7f5b0]" />
          <p className="font-normal text-md">Incident response and mitigation actions</p>
        </div>
        <div className="flex flex-col space-y-4 w-[80%] ">
          <div className="flex flex-col">
            <p className="">Incident response </p>
            {sData[0]?.incidentResponseGuidance?.map((item) => {
              return (
                <div className="flex  items-center space-x-3">
                  <p className="font-light text-sm">{item}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col">
            <p className="">mitigation actions </p>
            {sData[0]?.mitigationStrategies?.map((item) => {
              return (
                <div className="flex  items-center space-x-3">
                  <p className="font-light text-sm">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" line border-b w-full " />
      </div>
      {/* Admin Profile */}
      <div className="flex flex-col space-y-4 pb-4 pt-4">
        <div className="flex flex-row space-x-4 items-center">
          <span className="rounded-xl h-6 w-3 bg-[#A7A7FF]" />
          <p className="font-normal text-md"> Incident Timeline </p>
        </div>
        <div className="flex flex-col space-y-4 w-[80%] ">
          {sData[0]?.timeline?.map((item) => {
            return (
              <div className="flex  items-center space-x-3">
                <p className="">{item?.event}:</p>
                <p className="font-light text-sm">{item?.timestamp}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleIncident;

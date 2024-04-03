import React from 'react';
import { IoMdSunny,IoMdPartlySunny} from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { GiHeavyRain } from "react-icons/gi";
import { IoRainy } from "react-icons/io5";

export function getSkyIcon(sky) {
  switch (sky) {
    case '1':
      return <IoMdSunny />;
    case '3':
      return <IoMdPartlySunny />;
    case '4':
      return <FaCloud />;
    default:
      return null;
  }
}

export function getPtyIcon(pty) {
  switch (pty) {
    case '0':
      return 0;
    case '1':
      return <IoRainy />;
    case '2':
      return <GiHeavyRain />;
    case '3':
      return <GiHeavyRain />;
    case '4':
      return <GiHeavyRain />;
    case '5':
      return <GiHeavyRain />;
    case '6':
      return <GiHeavyRain />;
    default:
      return null;
  }
}

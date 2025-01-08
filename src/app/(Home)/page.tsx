import React from 'react';
import Banner from './Banner';
import PrayerDisplay from './PrayerDisplay';
import DateTimingDisplay from './DateTimingDisplay';
import StoryImageSec from './StoryImageSec';
import CountrySection from './CountrySection';
import HijirDivider from './HijirDivider';


export default function Home() {
  // const [timing, setTiming] = useState([]);

  // const fetchWeather = async () => {
  //   const response = await fetch("https://api.collectapi.com/pray/all?data.city=istanbul", {
  //     headers: {
  //       "content-type": "application/json",
  //       "authorization": "apikey 6BcWQwa2A7PthAXbeoYfg0:51yVnEbMyzUhLOiP8P2cGE"
  //     }
  //   });
  //   const data = await response.json();
  //   setTiming(data.result);
  //   console.log("data ==>", data);
  // }

  // useEffect(() => {
  //   fetchWeather();
  // }, []);

  return (
    <>
    <Banner/>
    <DateTimingDisplay/>
    <StoryImageSec/>
    <CountrySection/>
    <HijirDivider/>
    {/* <PrayerDisplay/> */}
    </>   
  );
}
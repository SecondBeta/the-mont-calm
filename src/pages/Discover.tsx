import navigation from '../../data/navigation';
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Footer from '../components/Footer';
import useNavigation from '../hooks/useNavigation';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import Head from 'next/head';
import siteMetadata from '../../data/siteMetadata';

const Discover = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  const [data, setData] = useState<any[string]>([]);

  // Gets the current weather of Murree, Pakistan (lat, long)
    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.909917041326935&lon=73.39380057780413&appid=b1518d49cb6c5781e4f43ede0a5bf43c&units=metric");
            const data = await res.json();
            setData(data);
          } catch (error) {
            console.log(error)
          }
        }
        fetchWeather();
    }, []);

    // Gets the UTC 24 hour clock and adjusts to Pakistan's UTC + 5
    const pkTime = new Date().getUTCHours() + 5

  return (
    <div>
      <Head>
        <title>{siteMetadata.title} | Discover</title>
        <meta name="description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Sets nav routing, albeit slightly broken :( */}
      <Navbar
      navigationData={navigation}
      currentRoute={currentRoute}
      setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
      navigationData={navigation}
      currentRoute={currentRoute}
      setCurrentRoute={setCurrentRoute}
      />
      {/* This is where the fun begins (Anakin moment); conditional CSS */}
      <div
      className={classNames(
        "absolute h-screen w-screen bg-gradient-to-t overflow-x-hidden",
        {
          "from-gray-700 via-gray-900 to-black": pkTime > 21 || pkTime < 5,
          "from-sky-400 to-blue-500": pkTime > 5 || pkTime < 21,
        }
        )}
        >
        </div>
      <Footer />
    </div>
  )
}

export default Discover
import React from 'react'
import navigation from '../../data/navigation';
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Footer from '../components/Footer';
import useNavigation from '../hooks/useNavigation';

const Discover = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  
  return (
    <div>
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

      <Footer />
    </div>
  )
}

export default Discover


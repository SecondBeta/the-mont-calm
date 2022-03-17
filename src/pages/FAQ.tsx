import navigation from '../../data/navigation';
import useNavigation from '../hooks/useNavigation';
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Footer from '../components/Footer'

const Faq = () => {
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

export default Faq

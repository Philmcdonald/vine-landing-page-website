import './App.css'
import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../src/pages/landing/Index'
import EnterpriseSofware from './pages/enterpriseSoftware/Index'
import ChargeApp from './pages/chargeLabApp/Index'
import Public from './pages/public/Index'
import WorkPlace from './pages/workplace/Index'
import Footer from './components/Footer'
import About from './pages/about/Index'
import Privacy from './pages/privacy/Index'
import Contact from './pages/contact/Index'
// import Navigation from './components/Nav'
// import TurnKey from './pages/turnkey/Index'
// import Integration from './pages/integrations/Index'
// import Pricing from './pages/pricing/Index'
// import WhiteLabel from './pages/whiteLabel/Index'
// import Reseller from './pages/reseller/Index'
import { ScrollToTop } from './components'

function App() {
  return (
    <>
      <Box fontFamily="Inter, sans-serif">
        <BrowserRouter>
          <ScrollToTop />
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="enterprise-software" element={<EnterpriseSofware />} />
            <Route path="vine-volts-app" element={<ChargeApp />} />
            <Route path="public" element={<Public />} />
            <Route path="workplace" element={<WorkPlace />} />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="contact" element={<Contact />} />

            {/* <Route path="integration" element={<Integration />} /> */}
            {/* <Route path="pricing" element={<Pricing />} /> */}
            {/* <Route path="white-label" element={<WhiteLabel />} /> */}
            {/* <Route path="reseller" element={<Reseller />} /> */}
            {/* <Route path='turnkey' element={<TurnKey />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Box>
    </>
  )
}

export default App

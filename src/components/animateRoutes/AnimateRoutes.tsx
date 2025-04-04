import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { HomePage } from '../../routes/HomePage'
import { AboutAsPage } from '../../routes/AboutAsPage'
import { ContactPage } from '../../routes/ContactPage'
import { HeatPumsPage } from '../../routes/HeatPumsPage'
import { EvChargersPage } from '../../routes/EvChargersPage'
import { EnergyStoragePage } from "../../routes/EnergyStoragePage"
import { PrivacyPolicyPage } from "../../routes/PrivacyPolicyPage"
import { TermsAndConditionsPage } from "../../routes/TermsAndConditionsPage"
import { AnimatePresence } from 'framer-motion'

export const AnimateRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us/*' element={<AboutAsPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
        <Route path='/heat-pumps' element={<HeatPumsPage />} />
        <Route path='/ev-chargers' element={<EvChargersPage />} />
        <Route path='/energy-storage' element={<EnergyStoragePage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditionsPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  )
}

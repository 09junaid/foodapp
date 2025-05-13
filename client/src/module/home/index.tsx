import React from 'react'
import HeroSection from './hero'
import OfferSection from './offer'
import ChoosingSection from './choose'
import OrderNowSection from './ordernow'
import GallerySection from './gallery'
import MenuSection from './menu'
import MeetUsSection from './meetus'

export default function HomeSections() {
  return (
    <>
      <HeroSection/>
      <OfferSection/>
      <ChoosingSection/>
      <MenuSection/>
      <MeetUsSection/>
      <GallerySection/>
      <OrderNowSection/>
    </>
  )
}

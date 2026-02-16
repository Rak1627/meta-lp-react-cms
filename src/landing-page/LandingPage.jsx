import PropTypes from 'prop-types'
import { EARLYBIRD_TARGET_ISO, LOGO_URL } from './config'
import landingContent from '../content/landing.json'
import { AboutSection } from './sections/AboutSection'
import { BrandScalingSection } from './sections/BrandScalingSection'
import { FaqSection } from './sections/FaqSection'
import { FooterSection } from './sections/FooterSection'
import { GiveawaySection } from './sections/GiveawaySection'
import { GuaranteeSection } from './sections/GuaranteeSection'
import { HeroSection } from './sections/HeroSection'
import { HostSection } from './sections/HostSection'
import { LearnSection } from './sections/LearnSection'
import { LimitedSection } from './sections/LimitedSection'
import { PricingSection } from './sections/PricingSection'
import { ProofSection } from './sections/ProofSection'
import { RockSection } from './sections/RockSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { Topbar } from './sections/Topbar'
import { TradeSection } from './sections/TradeSection'
import { WhySection } from './sections/WhySection'

export function LandingPage({ onOpenTypeform }) {
  const openTypeform = (kind) => {
    if (typeof onOpenTypeform !== 'function') return
    onOpenTypeform(kind)
  }

  const {
    hero,
    trade,
    brandScaling,
    rock,
    about,
    learn,
    testimonials,
    proof,
    pricing,
    giveaway,
    guarantee,
    why,
    limited,
    host,
    faq,
  } = landingContent

  return (
    <>
      <Topbar logoUrl={LOGO_URL} earlybirdTargetIso={EARLYBIRD_TARGET_ISO} />

      <main>
        <HeroSection heroPlayerId={hero.videoPlayerId} content={hero} />
        <TradeSection content={trade} />
        <BrandScalingSection content={brandScaling} />
        <RockSection content={rock} />
        <AboutSection content={about} />
        <LearnSection heading={learn.heading} rows={learn.rows} />
        <TestimonialsSection heading={testimonials.heading} rows={testimonialRows} />
        <ProofSection content={proof} />
        <PricingSection content={pricing} onOpenTypeform={openTypeform} />
        <GiveawaySection content={giveaway} />
        <GuaranteeSection content={guarantee} />
        <WhySection content={why} />
        <LimitedSection content={limited} />
        <HostSection content={host} />
        <FaqSection heading={faq.heading} items={faq.items} />
        <FooterSection logoUrl={LOGO_URL} />
      </main>
    </>
  )
}

LandingPage.propTypes = {
  onOpenTypeform: PropTypes.func.isRequired,
}


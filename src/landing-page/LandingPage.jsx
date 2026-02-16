import PropTypes from 'prop-types'
import { EARLYBIRD_TARGET_ISO, LOGO_URL } from './config'
import {
  HERO_VIDEO_PLAYER_ID,
  faqItems,
  learnRows,
  pricingCoreItems,
  pricingExcludedItems,
  pricingVipExcludedItems,
  pricingVipItems,
  proofVideos,
  testimonialRows,
} from './data'
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

  return (
    <>
      <Topbar logoUrl={LOGO_URL} earlybirdTargetIso={EARLYBIRD_TARGET_ISO} />

      <main>
        <HeroSection heroPlayerId={HERO_VIDEO_PLAYER_ID} />
        <TradeSection />
        <BrandScalingSection />
        <RockSection />
        <AboutSection />
        <LearnSection rows={learnRows} />
        <TestimonialsSection rows={testimonialRows} />
        <ProofSection videos={proofVideos} />
        <PricingSection
          coreItems={pricingCoreItems}
          excludedItems={pricingExcludedItems}
          vipExcludedItems={pricingVipExcludedItems}
          vipItems={pricingVipItems}
          onOpenTypeform={openTypeform}
        />
        <GiveawaySection />
        <GuaranteeSection />
        <WhySection />
        <LimitedSection />
        <HostSection />
        <FaqSection items={faqItems} />
        <FooterSection logoUrl={LOGO_URL} />
      </main>
    </>
  )
}

LandingPage.propTypes = {
  onOpenTypeform: PropTypes.func.isRequired,
}

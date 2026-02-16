import PropTypes from 'prop-types'
import { PricingCard } from '../components/PricingCard'

export function PricingSection({
  coreItems,
  excludedItems,
  vipItems,
  vipExcludedItems,
  onOpenTypeform,
}) {
  const generalItems = [
    ...coreItems.map((text) => ({ text, kind: 'included' })),
    ...excludedItems.map((text) => ({ text, kind: 'excluded' })),
  ]

  const vipCardItems = [
    ...vipItems.map((text) => ({ text, kind: 'vip' })),
    ...vipExcludedItems.map((text) => ({ text, kind: 'excluded' })),
  ]

  return (
    <section className="section pricingSection" id="pricing">
      <div className="container">
        <div className="pricingHeader">
          <h2 className="pricingHeading"><span className='gradientText'> Here’s What’s Inside</span></h2>
          <p className="pricingSub">
            <em>Plug the system straight into your business.</em>
          </p>
        </div>

        <div className="pricingGrid">
          <PricingCard
            variant="general"
            price="$0"
            name=""
            meta=""
            items={generalItems}
            buttonText="YES - IT'S ACTUALLY FREE"
            onClick={() => onOpenTypeform('general')}
          />

          <PricingCard
            variant="vip"
            price="$197"
            name="Meta Ads & Funnel Audit (1:1 Call)"
            meta="For freelancers and operators who want me to rip apart their current setup and rebuild it for scale."
            items={vipCardItems}
            buttonText="BOOK MY 1:1 AUDIT"
            onClick={() => onOpenTypeform('vip')}
          />
        </div>
      </div>
    </section>
  )
}

PricingSection.propTypes = {
  coreItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  excludedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  vipItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  vipExcludedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOpenTypeform: PropTypes.func.isRequired,
}

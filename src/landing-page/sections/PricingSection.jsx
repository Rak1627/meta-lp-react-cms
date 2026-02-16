import PropTypes from 'prop-types'
import { PricingCard } from '../components/PricingCard'

export function PricingSection({ content, onOpenTypeform }) {
  const generalItems = [
    ...content.general.coreItems.map((text) => ({ text, kind: 'included' })),
    ...content.general.excludedItems.map((text) => ({ text, kind: 'excluded' })),
  ]

  const vipCardItems = [
    ...content.vip.items.map((text) => ({ text, kind: 'vip' })),
    ...content.vip.excludedItems.map((text) => ({ text, kind: 'excluded' })),
  ]

  return (
    <section className="section pricingSection" id="pricing">
      <div className="container">
        <div className="pricingHeader">
          <h2 className="pricingHeading"><span className="gradientText"> {content.heading}</span></h2>
          <p className="pricingSub">
            <em>{content.sub}</em>
          </p>
        </div>

        <div className="pricingGrid">
          <PricingCard
            variant="general"
            price={content.general.price}
            name={content.general.name}
            meta={content.general.meta}
            items={generalItems}
            buttonText={content.general.buttonText}
            onClick={() => onOpenTypeform('general')}
          />

          <PricingCard
            variant="vip"
            price={content.vip.price}
            name={content.vip.name}
            meta={content.vip.meta}
            items={vipCardItems}
            buttonText={content.vip.buttonText}
            onClick={() => onOpenTypeform('vip')}
          />
        </div>
      </div>
    </section>
  )
}

PricingSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    general: PropTypes.shape({
      price: PropTypes.string.isRequired,
      name: PropTypes.string,
      meta: PropTypes.string,
      buttonText: PropTypes.string.isRequired,
      coreItems: PropTypes.arrayOf(PropTypes.string).isRequired,
      excludedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    vip: PropTypes.shape({
      price: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      meta: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
      excludedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
  onOpenTypeform: PropTypes.func.isRequired,
}

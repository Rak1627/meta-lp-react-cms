const limitedCards = [
  {
    icon: '⚠️',
    text: 'If you’re still stuck in feast‑or‑famine six months from now, it won’t be because this didn’t exist— it’ll be because you scrolled past it.',
  },
  {
    icon: '💰',
    text: 'The 1:1 Meta Ads & Funnel Audit stays at 197 for now—but once the calendar is full, the price goes up.',
  },
  {
    icon: '🎁',
    text: 'Giveaway entries for the GHL year, live intensive, and traffic booster are only valid for people who grab the training during this round.',
  },
]

export function LimitedSection() {
  return (
    <section className="section section--tight limitedSection">
      <div className="container">
        <div className="limitedHeading">
          <h2 className="limitedTitle"><span className="gradientText"> This Won’t Be Free Forever</span></h2>
          <div className="limitedLead">
            <p className="limitedLeadMuted">Access to the free training may close once we hit
our max number of users I can realistically
support.</p>
            {/* <p className="limitedLeadHighlight">
              <strong>📅 Bootcamp runs February 2-6, 2025</strong>
            </p>
            <p className="limitedLeadHighlight">
              <strong>7PM EST daily | 60-90 minutes per session</strong>
            </p> */}
          </div>
        </div>

        <div className="limitedGrid">
          {limitedCards.map((item) => (
            <div key={item.icon} className="limitedCard">
              <div className="limitedCardIcon" aria-hidden="true">
                {item.icon}
              </div>
              <p className="limitedCardText">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="limitedFooter">
          <p>
            Last time I opened this up, over 300,000 people hit the funnel in a month and my calendar was slammed with multiple audits a day.
          </p>
          <p>I refuse to turn this into another factory where we
rush through calls and skim over your numbers.</p>
          <p>
            So now we run this in controlled waves. We turn the funnel on, let a limited batch in, do the work properly… then turn it off again until we’re ready for the next round.
          </p>
          <p>If you’re seeing this, it means the doors are open —for now.</p>
        </div>
      </div>
    </section>
  )
}


import { IconCalendar, IconPin, IconQuestionCircle } from '../../components/Icons'

export function AboutSection() {
  return (
    <section className="section aboutSection">
      <div className="container">
        <h2 className="aboutHeading"><span className='gradientText'> About the Training & Cheat
Sheet</span></h2>

        <div className="aboutGrid">
          <div className="aboutCard">
            <div className="aboutCard__head">
              <IconQuestionCircle className="aboutCard__icon" />
             <h3 style={{ margin: '0px' }} className="aboutCard__label"> <strong><span className='gradientText'> WHAT</span></strong></h3>
            </div>
            <p className="aboutCard__text">
              A free on‑demand training + Meta Ads
Psychology Cheat Sheet that shows you how to
turn cold traffic into booked calls using a simple
Meta + GHL system.

Watch the short VSL, follow the steps, and keep
the cheat sheet open as you build.
            </p>
          </div>

          <div className="aboutCard">
            <div className="aboutCard__head">
              <IconPin className="aboutCard__icon" />
              <div className="aboutCard__label"><strong><span className='gradientText'> WHERE</span></strong></div>
            </div>
            <p className="aboutCard__text">
              100% online. You’ll get instant access to the video
and a downloadable PDF you can reuse every
time you launch or fix a campaign.
            </p>
          </div>

          <div className="aboutCard">
            <div className="aboutCard__head">
              <IconCalendar className="aboutCard__icon" />
              <div className="aboutCard__label"><strong><span className='gradientText'> WHEN</span></strong></div>
            </div>
            <p className="aboutCard__text">
              Right now.

Enter your email, hit play, and start installing the
system in the next 30 minutes—no live webinar,
no wait, no timezone drama.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


import PropTypes from 'prop-types'
import { Image } from '../../components/Image'
import { GetTicketButton } from '../components/GetTicketButton'

export function LearnSection({ rows }) {
  return (
    <section className="section learnSection">
      <div className="container">
        <h2 className="learnHeading"><span className='gradientText'> What You’ll Learn in the Training</span></h2>

        <div className="learnDays">
          {rows.map((day) => (
            <div key={day.number} className={`learnDay${day.reverse ? ' learnDay--reverse' : ''}`}>
              <div className="learnNumber" aria-hidden="true">
                {day.number}
              </div>

              <div className="learnInner">
                <div className="learnCopy">
                  <h3 className="learnTitle">
                    {day.titleLines.map((line) => (
                      <span className="learnTitle__line gradientText" key={line}>
                        {line}
                      </span>
                    ))}
                  </h3>

                  <p className="learnDesc">{day.card.desc}</p>

                  <ul className="learnBullets">
                    {day.card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="learnMedia">
                  <Image
                    className="learnMedia__img learnMedia__img--desktop"
                    src={day.image}
                    alt={`Day ${day.number} preview`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <Image
                    className={`learnMedia__img learnMedia__img--mobile${day.number === '01' ? ' learnMedia__img--mobile-small' : ''}`}
                    src={day.imageMobile || day.image}
                    alt={`Day ${day.number} preview`}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>

                {day.cta ? (
                  <div className="learnCtaRow">
                    <GetTicketButton label="Hit the Damn Button" />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

LearnSection.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      titleLines: PropTypes.arrayOf(PropTypes.string).isRequired,
      image: PropTypes.string.isRequired,
      reverse: PropTypes.bool,
      cta: PropTypes.bool,
      imageMobile: PropTypes.string,
      card: PropTypes.shape({
        desc: PropTypes.string.isRequired,
        bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    })
  ).isRequired,
}

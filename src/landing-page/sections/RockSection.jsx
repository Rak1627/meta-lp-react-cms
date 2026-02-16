import PropTypes from 'prop-types'
import {
  IconChat,
  IconSliders,
  IconX,
} from '../../components/Icons'
import { Image } from '../../components/Image'
import { GetTicketButton } from '../components/GetTicketButton'
import { renderTextWithHighlights } from '../utils/renderTextWithHighlights'

export function RockSection({ content }) {
  return (
    <section className="section section--tight rockSection">
      <div className="container">
        <div className="rockOuter">
          <div className="rockInner">
            <div className="rockGrid">
              <div className="rockMedia" aria-hidden="true">
                <Image
                  src={content.image}
                  alt="Starting from rock bottom"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="rockCopy">
                <h2 className="rockTitle">{renderTextWithHighlights(content.title)}</h2>

                {content.kickers.map((line) => (
                  <p key={line} className="rockKicker">
                    {renderTextWithHighlights(line)}
                  </p>
                ))}

                <ul className="rockZeroList">
                  {content.zeroList.map((text) => (
                    <li key={text}>
                      <IconX className="rockZeroIcon" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="rockText">
                  <strong>{renderTextWithHighlights(content.highlight)}</strong>
                </p>
                <p className="rockPlus">{renderTextWithHighlights(content.insideTitle)}</p>
                <ul className="rockIconList rockIconList--right">
                  {content.insideItems.map((text, index) => {
                    const Icon = index === 0 ? IconChat : IconSliders
                    return (
                      <li key={text}>
                        <Icon className="rockIcon" />
                        <span>{text}</span>
                      </li>
                    )
                  })}
                </ul>

                <GetTicketButton label={content.buttonLabel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

RockSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    kickers: PropTypes.arrayOf(PropTypes.string).isRequired,
    zeroList: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlight: PropTypes.string.isRequired,
    insideTitle: PropTypes.string.isRequired,
    insideItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttonLabel: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

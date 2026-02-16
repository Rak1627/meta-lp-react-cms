import PropTypes from 'prop-types'
import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'

export function ProofSection({ content }) {
  return (
    <section className="section proofSection">
      <div className="container">
        <div className="proofOuter">
          <div className="proofInner">
            <div className="proofHeader">
              <h2 className="proofTitle">{content.title}</h2>
              <p className="proofKicker">
                <em>
                  <strong>{content.kicker}</strong>
                </em>
              </p>
              <p className="proofDesc">{content.desc}</p>
            </div>

            <div className="proofGrid">
              {content.videos.map((video) => (
                <div className="proofCard" key={video.playerId || video.videoSrc}>
                  <div className="proofMedia">
                    <div className="videoShell__inner">
                      {video.videoSrc ? (
                        <video
                          className="proofVideo"
                          src={video.videoSrc}
                          controls
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <ConverteAiV4Player playerId={video.playerId} />
                      )}
                    </div>
                  </div>
                  <p className="proofCaption">{video.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProofSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    kicker: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        playerId: PropTypes.string,
        videoSrc: PropTypes.string,
        caption: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

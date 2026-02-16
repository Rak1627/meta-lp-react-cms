import PropTypes from 'prop-types'
import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'

export function ProofSection({ videos }) {
  return (
    <section className="section proofSection">
      <div className="container">
        <div className="proofOuter">
          <div className="proofInner">
            <div className="proofHeader">
              <h2 className="proofTitle">
                These aren’t “unicorn” clients. They’re freelancers
and operators who plugged a simple Meta + GHL
system into their offers.
              </h2>
              <p className="proofKicker">
                <em>
                  <strong>And if you need extra proof...</strong>
                </em>
              </p>
              <p className="proofDesc">
                In the video, I walk through real dashboards,
campaigns, and pipelines so you can see how
we turn attention into predictable income 
              </p>
            </div>

            <div className="proofGrid">
              {videos.map((video) => (
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
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string,
      videoSrc: PropTypes.string,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
}


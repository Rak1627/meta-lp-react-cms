import {
  IconChat,
  IconGlobe,
  IconHandshake,
  IconSliders,
  IconTarget,
  IconX,
} from '../../components/Icons'
import { Image } from '../../components/Image'
import { GetTicketButton } from '../components/GetTicketButton'

export function RockSection() {
  return (
    <section className="section section--tight rockSection">
      <div className="container">
        <div className="rockOuter">
          <div className="rockInner">
            <div className="rockGrid">
              <div className="rockMedia" aria-hidden="true">
                <Image
                  src="overlay-border"
                  alt="Starting from rock bottom"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="rockCopy">
                <h2 className="rockTitle">
                  Follow Along as I Build
                  <br />
                  a Profit Machine From Scratch
                </h2>
                 


                <p className="rockKicker">I’m building this Meta ads
system the same way you’d
have to</p>
<p className='rockKicker'>no secret list, no “guru”
shortcuts.</p>

<p className='rockKicker'>I’m starting from:</p>

                <ul className="rockZeroList">
                  {[
                    'No warm audience or secret email list',
                    'No agency team doing the work for me',
                    'No giant budget to hide bad decisions',
                  ].map((text) => (
                    <li key={text}>
                      <IconX className="rockZeroIcon" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                
                <p className="rockText"> <strong><span className='gradientText'>And I’m documenting everything as I turn cold traffic into booked calls using Meta + GHL.</span></strong></p>
                <p className="rockPlus">You’ll see inside the training:</p>
                <ul className="rockIconList rockIconList--right">
                  <li>
                    <IconChat className="rockIcon" />
                    <span>The exact ad setup I use to go
from testing to profitable
scaling</span>
                  </li>
                  <li>
                    <IconSliders className="rockIcon" />
                    <span>How I turn new leads into
conversations and clients using
simple automations</span>
                  </li>

                  <li>
                    <IconSliders className="rockIcon" />
                    <span>The real numbers, wins, and
flops so you can copy what
works and avoid what doesn’t</span>
                  </li>
                </ul>
                {/* <ul className="rockIconList">
                  <li>
                    <IconTarget className="rockIcon" />
                    <span>How I find and contact high-value client</span>
                  </li>
                  <li>
                    <IconHandshake className="rockIcon" />
                    <span>Real sales conversations where I pitch and closed deals</span>
                  </li>
                  <li>
                    <IconGlobe className="rockIcon" />
                    <span>Delivering results using simple online tools</span>
                  </li>
                </ul> */}

                <GetTicketButton label="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

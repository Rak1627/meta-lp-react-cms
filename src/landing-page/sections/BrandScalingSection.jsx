import { GetTicketButton } from '../components/GetTicketButton'

export function BrandScalingSection() {
  return (
    <section className="brandScalingBg">
      <div className="container brandScalingWrap">
        <div className="brandScalingOuter">
          <div className="brandScalingInner">
            <div className="brandScalingQuote" aria-hidden="true"> <span className='gradientText'>
              &ldquo;</span>
            </div>

            <h2 className="brandScalingTitle">
             <span className="gradientText"> Only 3%</span> of your market wakes up <span className='gradientText'> ready to buy</span>
            </h2>
             

            <p className="brandScalingText">
                if you <strong><span className='gradientText'> don’t have a system</span></strong> for the other <strong><span className='gradientText'> 97%,</span></strong> you’re lighting your advertising <strong><span className='gradientText'> budget on fire</span></strong>
            </p>
            <p className="brandScalingText">
              Because here’s what actually happens:
            </p>
            <p className="brandScalingText">
              • The 3% who are ready to buy now will click, compare you
to 3 other tabs, and choose whoever feels the most
dialed‑in.
            </p>
            <p className="brandScalingText">
              • The next 40% are interested but distracted—they need
follow‑up, reminders, and proof before they move.


            </p>
            <p className="brandScalingText"> • The remaining 57% don’t even know they have a problem
yet—until your content and ads make it painfully obvious.</p>
            <p className="brandScalingHighlight"> 
             <span className='gradientText'> Your Meta ads shouldn’t just “get traffic.”</span>
            </p>
            <p className="brandScalingText">They should push all three groups into one simple GHL
system that captures them, follows up with them, and turns
them into booked calls while you work—or sleep.</p>

            <GetTicketButton />
          </div>
        </div>
      </div>
    </section>
  )
}

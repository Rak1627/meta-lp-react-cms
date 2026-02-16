import { Image } from '../../components/Image'

export function HostSection() {
return (
<section className="section hostSection">
  <div className="container">
    <div className="hostCard">
      <div className="hostCard__inner">
        <div className="hostLayout">
          <h2 className="hostHeading"><span className='gradientText'> Meet Your Host</span></h2>

          <div className="hostMedia">
            <img
              className="hostImage"
              src="/images/optimized/meetyourhost-picture.png"
              alt="Brez, your host"
              loading="lazy"
            />
          </div>

          <div className="hostCopy">
            <p>A few years ago, I was in the same loop you’re in now.</p>
            <p>
              Good at what I do, smart enough to figure things out, but still stuck in:
            </p>

            <p>
              • Feast‑or‑famine months<br />• Chasing referrals and random inbound<br />• Letting cheap agencies guess
              with my money
            </p>
            {/* <p className="hostEmOrange">
              <em>Running ads online.</em>
            </p> */}
            <p>
              What finally clicked wasn’t some secret hack. It was realizing this game is actually simple if you care enough to own it yourself:
            </p>
            <p> • Know your buyer better than anyone else <br />• Do basic math on what you can pay to get one <br />• Learn one ads dashboard <br />• Plug it all into a system that follows up for you</p>
            <p>
              That’s it. No “media buying wizard,” no 20‑person agency.
            </p>
            <p>You already know your customers better than any $1K‑a‑month agency ever will.</p>
            <p>All you’re missing is a clear way to turn that knowledge into ads and a funnel that bring buyers in every day.</p>
            <p>This training and cheat sheet are built to give you exactly that—without fluff, without jargon, and without pretending this is harder than it really is.</p>
            {/* <p className="hostFinal">
              <em>By doing it all over again from scratch.</em>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

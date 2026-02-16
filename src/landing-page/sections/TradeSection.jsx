import { Image } from '../../components/Image'

export function TradeSection() {
  return (
    <section className="section tradeSection">
      <div className="container">
        <div className="tradeOuter">
          <div className="tradeInner">
            <div className="tradeCopy">
              <h2 className="tradeTitle">
                How Long Are You Going to Let Broken Marketing Decide Your Income?
              </h2>
              <p className="tradeSubtitle">Be honest with yourself for a second.</p>

              <ul className="tradeList">
                <li>
                  The <strong><span className="gradientText">“lucky”</span></strong> month where your ads somehow <strong><span className="gradientText">work…</span></strong>
                   followed by two months of crickets.
                </li>
                
                <li>
                  The agency that sends screenshots and buzzwords but 
                    <strong> <span className="gradientText">not buyers</span></strong> in your Stripe.
                   
                </li>
                <li>
                  The campaigns that get clicks, likes, and comments—but
                    almost <strong> <span className="gradientText"> no booked calls.</span></strong>
                </li>
                
                <li>
                  The feeling that you’re smart enough to fix this, but you
                    <strong> <span className="gradientText"> don’t know </span></strong> what to <strong> <span className="gradientText">change.</span></strong>  
                </li>
                <li>
                  The quiet panic every time you check Ads Manager and
see <strong><span className='gradientText'>money</span></strong> going <strong><span className='gradientText'>out, not</span></strong> coming <strong><span className='gradientText'>back.</span></strong>

                   
                </li>
              </ul>

              <p className="tradeBottom tradeBottom--strong">
                <span className='gradientText'> You’re not crazy for wanting predictable clients and cashflow.</span>
              </p>
              <p className="tradeBottom">You’ve just never been shown a <strong><span className='gradientText'>simple system</span></strong> that makes
Meta ads <strong><span className='gradientText'>work</span></strong> for you, not against you.</p>
            </div>

            <div className="tradeMedia" aria-hidden="true">
              <Image
                src="image-562"
                alt="Phone with trading app"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


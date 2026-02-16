import { Image } from '../../components/Image'

export function GiveawaySection() {
  return (
    <section className="section section--tight giveawaySection">
      <div className="container">
        <h2 className="giveawayHeading">
          <span className='gradientText'>
          Everyone Who Grabs the Training Is
          <br />
          Automatically Entered to Win:
          </span>
        </h2>

        <div className="giveawayGrid">
          <div className="giveawayCard">
            <div className="giveawayCard__image giveawayCard__image--laptop">
              <Image
                src="laptop1"
                alt="Three brand new MacBooks"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="giveawayCard__title giveawayCard__title--alt">
              <span className="giveawayCard__titleMain">Prize 1 - 12 Months of GHL Free</span>
              <span className="giveawayCard__titleSub">
                Run your entire client-getting system with zero software bill for a full year.
              </span>
            </h3>
          </div>

          <div className="giveawayCard">
            <div className="giveawayCard__image">
              <Image
                src="ahmed1"
                alt="Brand new Rolex"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="giveawayCard__title giveawayCard__title--alt">
              <span className="giveawayCard__titleMain">
                Prize 2 - Live Intensive in Dubai / Bali / Sydney
              </span>
              <span className="giveawayCard__titleSub">
                Spend a full day in person rebuilding your offer, funnel, and Meta ads with me,
                start to finish.
              </span>
            </h3>
          </div>

          <div className="giveawayCard">
            <div className="giveawayCard__image">
              <Image
                src="jade1"
                alt="Private dinner with Brez in Miami"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="giveawayCard__title giveawayCard__title--alt">
              <span className="giveawayCard__titleMain">Prize 3 - Traffic Booster Fund</span>
              <span className="giveawayCard__titleSub">
                Get your first month of ad spend paid for so you can test the system at speed
                instead of inching along.
              </span>
            </h3>
          </div>
        </div>
        <p className="giveawayNote">
          Download the free training + cheat sheet today
          <br />
          and you're in the draw automatically.
        </p>
      </div>
    </section>
  )
}


import PropTypes from 'prop-types'
import { Image } from '../../components/Image'

export function FooterSection({ logoUrl }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerCard">
          <div className="footerCard__inner stack">
            {/* <h3>INCOME DISCLAIMER:</h3>
            <p className="muted-2">Important Notice Regarding Income Claims and Results</p>
            <p className="muted-2">
              The information presented on this website, including but not limited to testimonials,
              examples, and income representations related to The Elite Round Table, reflects
              specific experiences, circumstances, and abilities of selected individuals. There is
              no guarantee that you will experience similar results.
            </p>
            <h3>Understanding Potential Results</h3>
            <p className="muted-2">
              The income statements and examples on this website are not intended to represent or
              guarantee that anyone will achieve the same or similar results. Each individual&apos;s
              success depends on various factors, including but not limited to:
            </p>
            <ul className="list">
              {[
                'Your background, experience, and education',
                'Your commitment, dedication, and willingness to follow the program',
                'Market conditions and industry-specific circumstances',
                'The time and effort invested in implementing the strategies taught',
                'Your ability to take action on the information provided',
              ].map((text) => (
                <li key={text} className="arrow">
                  {text}
                </li>
              ))}
            </ul>
            <h3>No Guarantee of Income</h3>
            <p className="muted-2">
              We do not guarantee or imply that you will generate any specific amount of income, or
              any income at all, by purchasing or participating in The Elite Round Table. Any
              earnings or income statements, or examples of earnings or income, represent our
              understanding of average or typical earnings and should not be construed as a promise
              or guarantee of earnings.
            </p>
            <h3>Success Is Not Typical</h3>
            <p className="muted-2">
              The success stories and testimonials presented are exceptional results and are not
              typical for the average user. These results should not be considered average or
              expected results. We cannot and do not guarantee your success or income level. Your
              results may vary significantly.
            </p>
            <h3>Forward-Looking Statements</h3>
            <p className="muted-2">
              Any forward-looking statements contained on this website or in our materials outline
              our expectations or predictions of future events. These statements are simply
              forecasts and are not guarantees of performance.
            </p>
            <h3>Your Responsibility</h3>
            <p className="muted-2">
              You acknowledge that you are solely responsible for your results. You agree that Brez
              Marketing, its officers, directors, employees, and affiliates are not responsible for
              your success or failure in implementing the teachings and information offered.
            </p>
            <p className="muted-2">
              By using this website and/or purchasing The Elite Round Table, you acknowledge that
              you have read, understood, and agree to be bound by this disclaimer.
            </p>
            <p className="muted-2">Last Updated: December 23rd, 2025</p> */}
            <div className="stack" style={{ alignItems: 'center', marginTop: 18, gap: 8 }}>
              <Image
                className="footerLogo"
                src={logoUrl}
                alt="The Brand Scaling Bootcamp"
                sizes="200px"
              />
              {/* <a href="#" target="_blank" rel="noreferrer">
                Terms of Services
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Privacy Policy
              </a> */}
              <p className="muted-2">&copy;2026. Ahmed Damouni LLC. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterSection.propTypes = {
  logoUrl: PropTypes.string.isRequired,
}


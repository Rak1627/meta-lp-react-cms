import { Image } from '../../components/Image'

export function WhySection() {
  return (
    <section className="section section--tight whySection">
      <div className="container">
        <div className="whyCard">
          <div className="whyGrid">
            <div className="whyCopy">
              <h2 className="whyTitle"><span className='gradientText'> &quot;Why Is This Free?&quot;</span></h2>
              <div className="whyBody">
                <p>Fair question.</p>
                <p>
                  I&apos;ve seen people charge 500+ for less than what you&apos;re getting in this training
                  and cheat sheet.
                </p>
                <p>Here&apos;s my logic:</p>
                <p>I&apos;m not trying to get rich off a PDF.</p>
                <p>
                  I&apos;m trying to find the freelancers and operators who are serious about fixing
                  their client-getting machine.
                </p>
                <p>
                  Some of you will use the free training, get results, and never pay me a cent but
                  you&apos;ll remember who helped you.
                </p>
                <p>Some of you will want help installing or scaling
the system and book the 1:1 audit or a bigger
package.</p>
                <p>
                  Both outcomes are wins for me.
                </p>
                <p>
                  Giving this away filters out the people who aren’t
serious and lets me overdeliver for the ones who
are.
                </p>
                <p>
                  So take the free training, steal the system, and if
you want my hands on your business after, you’ll
know where to find me.
                </p>
              </div>
            </div>

            <div className="whyMedia">
              <div className="whyImage">
                <Image
                  src="2ndimage"
                  alt="Why this price"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


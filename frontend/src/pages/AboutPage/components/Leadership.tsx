import { ourStoryAsset } from "../assetPath";

export default function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Leadership Team</span>
          <h2>Led by academics. Driven by practice.</h2>
          <p>Kent Business College is founded and led by Dr. Amgad Badewi, alongside two founding faculty members who have shaped the institution since its very first year.</p>
        </div>
        <div className="leadership__grid">

          <div className="leader-card reveal">
            <div className="leader-card__photo">
              <img src={ourStoryAsset("images/dr-stephen-jenner-web.jpg")} alt="Dr. Stephen Jenner" />
            </div>
            <div className="leader-card__body">
              <h3>Dr. Stephen Jenner</h3>
              <div className="role">Managing Portfolio Specialist</div>
              <p className="bio">Extensive UK Senior Civil Service experience, including as former Director of Criminal Justice IT. With the college since its founding year.</p>
            </div>
          </div>

          <div className="leader-card reveal">
            <div className="leader-card__photo">
              <span className="leader-card__tag">Founder</span>
              <img src={ourStoryAsset("images/dr-amgad-badewi-web.jpg")} alt="Dr. Amgad Badewi" />
            </div>
            <div className="leader-card__body">
              <h3>Dr. Amgad Badewi</h3>
              <div className="role">Founder &amp; Project Management Specialist</div>
              <p className="bio">An accomplished academic with a PhD from Cranfield University and a Reader at the University of Kent. Founded IBIS Consultancy in 2016 and led its transformation into Kent Business College.</p>
            </div>
          </div>

          <div className="leader-card reveal">
            <div className="leader-card__photo">
              <img src={ourStoryAsset("images/dr-ray-maed-web.jpg")} alt="Dr. Ray Maed" />
            </div>
            <div className="leader-card__body">
              <h3>Dr. Ray Maed</h3>
              <div className="role">Project Management Consultant</div>
              <p className="bio">Founding Partner at p3m global, with 20+ years in the P3M industry and recognition as a thought leader advising FTSE 100 boards.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

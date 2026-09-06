export default function Values() {
  return (
    <section id="values" className="values">
      <div className="container">
        <div className="section-head center values__head">
          <span className="eyebrow">What We Stand For</span>
          <h2>Our Values</h2>
        </div>
        <div className="values__grid">
          <div className="value-card reveal">
            <div className="value-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3>Empowering Futures</h3>
            <p>Providing outstanding education, targeted training and continuous professional development that opens real career pathways.</p>
          </div>
          <div className="value-card reveal">
            <div className="value-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 6 4 10 4 14a8 8 0 0016 0c0-4-3-8-8-12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            </div>
            <h3>Reducing Footprint</h3>
            <p>Embedding environmental sustainability into every operation — because responsible growth is the only growth worth having.</p>
          </div>
          <div className="value-card reveal">
            <div className="value-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="15" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M10.5 9.5L14.5 13" stroke="currentColor" strokeWidth="1.6" /></svg>
            </div>
            <h3>Strengthening Partnerships</h3>
            <p>Building collaborative relationships with employers and communities that create mutual, lasting value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

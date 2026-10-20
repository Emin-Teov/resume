import Reveal from './reveal';

function Timeline({ items, presentLabel }) {
  return (
    <div className="timeline">
      {items.map((e, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="tl-item">
            <div className={`tl-dot${e.current ? " current" : ""}`} />
            <div>
              <p className="tl-period">
                {e.period}
                {e.current && <span className="badge">{presentLabel}</span>}
              </p>
              <h3 className="tl-role">{e.title}</h3>
              <p className="tl-org">
                {e.org}
                {e.place && <span> · {e.place}</span>}
              </p>
              {e.bullets?.length > 0 && (
                <ul className="tl-bullets">
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Timeline;

export default function Stats({numOfChar ,instgramCharsLeft, facebookCharsLeft ,numofWords}) {
  return (
    <section className="stats">
        <Stat number={numofWords} text ="Words" />
        <Stat number={numOfChar} text="characters" />
        <Stat number={instgramCharsLeft} text="Instgram" />
        <Stat number={facebookCharsLeft} text="Facebook" />
    </section>
  );
}

function Stat(propos) {
  return (
      <section className="stat">
        <span className={`stat__number ${propos.number <0 ? "stat__number--limit" : ""} ` }>{propos.number}</span>
        <h2 className="second-heading">{propos.text}</h2>
      </section>

  );
}
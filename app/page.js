import Image from "next/image";

export default function Home(props) {
  const summary = [
    {
      category: "Reaction",
      score: 80,
      icon: "/images/icon-reaction.svg",
      color: "hsl(0, 100%, 67%)",
      bg: "hsl(0, 100%, 98%)",
    },
    {
      category: "Memory",
      score: 92,
      icon: "/images/icon-memory.svg",
      color: "hsl(39, 100%, 56%)",
      bg: "hsl(39, 100%, 98%)",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/images/icon-verbal.svg",
      color: "hsl(166, 100%, 37%)",
      bg: "hsl(166, 100%, 98%)",
    },
    {
      category: "Visual",
      score: 72,
      icon: "/images/icon-visual.svg",
      color: "hsl(234, 85%, 45%)",
      bg: "hsl(234, 85%, 98%)",
    },
  ];

  return (
    <main className="dashboard">
      <div className="dashboard__results">
        <h2 className="dashboard__results__header">Your Result</h2>
        <div className="dashboard__results__value">
          <h1 className="dashboard__results__value_large">76</h1>
          <p className="dashboard__results__value_of">of 100</p>
        </div>
        <h2 className="dashboard__results__title">Great</h2>
        <p className="dashboard__results__text">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className="dashboard__summary">
        <p className="dashboard__summary__title">Summary</p>
        {summary.map((s, i) => (
          <div
            className="dashboard__summary_items"
            style={{ backgroundColor: `${s.bg}` }}
            key={i}
          >
            <div className="dashboard__summary_items_icon_name">
              <Image src={s.icon} width={20} height={20} alt="sometjhing" />
              <p style={{ color: `${s.color}` }}>{s.category}</p>
            </div>
            <p>
              {s.score}{" "}
              <span className="dashboard__summary_items_of"> / 100</span>
            </p>
          </div>
        ))}
        <button className="button">Continue</button>
      </div>
    </main>
  );
}

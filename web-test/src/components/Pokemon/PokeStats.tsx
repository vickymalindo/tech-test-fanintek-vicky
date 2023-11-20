import './style.css';

const PokeStats = ({ stats, types }: any) => {
  return (
    <div className="container-bar mt-0">
      <h4 className="w-100 mb-4 section-title">Stats</h4>
      {stats.map((item: any, index: number) => {
        const widthVal = 100 - (100 - item.base_stat);
        return (
          <div key={index} className="bar-item">
            <div className="bar">
              <div
                style={{ width: `${widthVal}%` }}
                className={`bar-active ${types[0].type.name}`}
              />
              <div className="container-label">
                <p className="value">{item.base_stat}</p>
              </div>
            </div>
            <p className="my-0 text-center label limit-text">
              {item.stat.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PokeStats;

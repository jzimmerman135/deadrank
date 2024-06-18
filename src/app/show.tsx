export type ShowProps = {
  venue: string;
  date: string;
  setlist: string[][];
  setlistVisible: boolean;
};

export default function Show(show: ShowProps) {
  return (
    <div>
      <h2>{show.venue}</h2>
      <p>{show.date}</p>
      {show.setlistVisible && (
        <div>
          <h3>Setlist</h3>
          <ul>
            {show.setlist.map((set, i) => (
              <li key={i}>
                <ul>
                  {set.map((song, j) => (
                    <li key={j}>{song}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

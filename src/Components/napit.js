const Napit = (props) => {
  console.log(props);
  const event = props.event;
  if (!event) return null;
  console.log("event:" + JSON.stringify(event));
  return (
    <div className="nappibox">
      <div>
      <p id="eventname"> {event.nimi} </p>
      </div>
      <div>
        {event.vaihtoehdot.map((vaihtoehto) => {
          return (
            <button
              className="valintanappi"
              key={vaihtoehto}
              onClick={() => props.handleEvents(vaihtoehto)}
            >
              {vaihtoehto}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Napit;

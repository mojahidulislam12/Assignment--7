const TimelineCard = ({ info }) => {
  const { name, picture } = info;
  console.log(info);

  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="w-90 sm:w-140 md:w-277.5 mx-auto ml-1 md:ml-50">
      <div className="h-20.75 bg-white mt-4 rounded-md flex p-4">
        <div>
          <img className="w-10 h-10 mr-4 rounded-md" src={picture} alt="" />
        </div>
        <div>
          <p>with {name}</p>
          <h2>{formatter.format(new Date())}</h2>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;

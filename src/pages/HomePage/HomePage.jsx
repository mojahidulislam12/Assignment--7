import AllFriends from "../../components/AllFriends/AllFriends";
import Banner from "../../components/Banner/Banner";
import Line from "../../components/Line/Line";

const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner></Banner>
      <Line></Line>
      <AllFriends></AllFriends>
    </div>
  );
};

export default HomePage;

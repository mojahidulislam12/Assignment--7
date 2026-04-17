import { useContext } from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell,
} from "recharts";
import { FriendContext } from "../../context/FriendProvider";

const Stats = () => {
  const { call } = useContext(FriendContext);

  console.log(call);
  const data = [
    { name: "Text", value: call.length, fill: "#0088FE" },
    { name: "Call", value: call.length, fill: "#00C49F" },
    { name: "Video", value: call.length, fill: "#FFBB28" },
  ];

  return (
    <div className="bg-[#F8FAFC] py-16">
      <h1 className="font-bold text-3xl max-w-277.5 mx-auto mb-6 pt-20">
        Friendship Analytics
      </h1>

      <div className="bg-white max-w-277.5 mx-auto rounded-2xl shadow-md ">
        <h1 className="font-medium text-[20px] pl-8 pt-8">
          By Interaction Type
        </h1>
        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                cornerRadius={10}
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>

              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;

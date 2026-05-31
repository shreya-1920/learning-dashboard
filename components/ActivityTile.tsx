export default function ActivityTile() {
  const activity = [
    { day: "Mon", value: 60 },
    { day: "Tue", value: 85 },
    { day: "Wed", value: 40 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 70 },
  ];

  return (
    <section className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="font-bold text-2xl mb-6">
        Weekly Activity
      </h2>

      <div className="space-y-4">
        {activity.map((item) => (
          <div key={item.day}>
            <div className="flex justify-between mb-1">
              <span>{item.day}</span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
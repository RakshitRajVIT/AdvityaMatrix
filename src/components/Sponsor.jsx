export default function Sponsor() {
  const sponsors = [
    { id: 1, name: "Frontify", logo: "/favicon.ico" },
    { id: 2, name: "Swiggy", logo: "/favicon.ico" },
    { id: 3, name: "HighRadius", logo: "/favicon.ico" },
    { id: 4, name: "Multiplier", logo: "/favicon.ico" },
    { id: 5, name: "NordVPN", logo: "/favicon.ico" },
    { id: 6, name: "MongoDB", logo: "/favicon.ico" },
    { id: 7, name: "Jotform", logo: "/favicon.ico" },
    { id: 8, name: "GoodData", logo: "/favicon.ico" },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl text-center text-white mb-6 font-bold">
        Our Sponsors
      </h2>
      <p className="text-center text-red-500 mb-10 text-lg sm:text-xl">
        A huge thanks to our incredible sponsors for supporting us and making our events possible.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex justify-center items-center p-4 bg-neutral-900 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 h-24 sm:h-32"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-full max-w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
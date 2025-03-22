import React from "react";

const sports = [
  {
    id: 1,
    name: "Cricket",
    img: "https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_23-2149213600.jpg",
    desc: "Play with the best cricket turfs available!",
  },
  {
    id: 2,
    name: "Football",
    img: "https://img.freepik.com/free-vector/doodle-soccer-ball_1034-741.jpg",
    desc: "Experience top-quality football grounds!",
  },
  {
    id: 3,
    name: "Basketball",
    img: "https://img.freepik.com/free-vector/basketball-sport-game-orange-background-items_18591-51440.jpg",
    desc: "Get ready to score big on professional courts!",
  },
  {
    id: 4,
    name: "Tennis",
    img: "https://img.freepik.com/free-vector/two-racket-tennis-ball-illustration_24877-60158.jpg",
    desc: "High-quality courts with expert-level facilities!",
  },
  {
    id: 5,
    name: "Badminton",
    img: "https://img.freepik.com/free-vector/badminton-player_23-2148163487.jpg",
    desc: "Smash and win on world-class badminton turfs!",
  },
];

function SportsCollection() {
  return (
    <div className="mb-10 flex flex-col ml-5 ">
      <h1 className="text-5xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-600">
        Popular Sports Collection
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-10 px-10">
        {sports.map((sport) => (
          <div
            key={sport.id}
            className="group relative cursor-pointer transition duration-300 transform hover:scale-110"
          >
            <div className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden shadow-lg">
              <img
                src={sport.img}
                alt={sport.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center text-lg mt-3 font-semibold">
              {sport.name}
            </h1>

            {/* Hover Effect for Description */}
            <div className="absolute left-0 top-full opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-3 py-2 rounded-lg shadow-md w-40 transition duration-300">
              {sport.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsCollection;

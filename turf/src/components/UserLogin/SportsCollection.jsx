import React from "react"

const sports = [
    { id: 1, name: "Cricket", img: "https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_23-2149213600.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 2, name: "Football", img: "https://img.freepik.com/free-vector/doodle-soccer-ball_1034-741.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 3, name: "Basketball", img: "https://img.freepik.com/free-vector/basketball-sport-game-orange-background-items_18591-51440.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 4, name: "Tennis", img: "https://img.freepik.com/free-vector/two-racket-tennis-ball-illustration_24877-60158.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 5, name: "Badminton", img: "https://img.freepik.com/free-vector/badminton-player_23-2148163487.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 6, name: "Volleyball", img: "https://img.freepik.com/free-vector/hand-drawn-volleyball-silhouette_23-2149399511.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 7, name: "Table Tennis", img: "https://img.freepik.com/free-vector/table-tennis-concept-illustration_114360-3550.jpg?ga=GA1.1.522273382.1721993206&semt=ais_hybrid-rr-similar" },
    { id: 8, name: "Baseball", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Baseball_pitching_motion_2004.jpg/320px-Baseball_pitching_motion_2004.jpg" },
    { id: 9, name: "Rugby", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/New_Zealand_v_England_rugby.jpg/320px-New_Zealand_v_England_rugby.jpg" },
    { id: 10, name: "Golf", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Golf_pic.png/320px-Golf_pic.png" },
    { id: 11, name: "Hockey", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Field_hockey_players.jpg/320px-Field_hockey_players.jpg" }
  ];
  

function SportsCollection(){

    return(
        <>
        <div className="mb-10 flex flex-col ml-5 ">
        <h1 className="text-5xl font-bold  mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-600  ">Popular Sports Collection</h1>
        <div className="flex flex-row gap-10 ml-16 ">
            
            {sports.map((sport)=>(
                <div className="flex flex-col" 
                key={sport.id}
                >
                <div className=" w-24 h-24 border  border-black flex rounded-full text-justify ">
                <img src={sport.img} alt={sport.name} className="w-full h-full object-cover rounded-full "></img>
                </div>
 
            
            <h1 className="text-sm  flex flex-col   text-center  ">{sport.name}</h1>
            
            </div>
        ))}
        </div>
        
        </div>
        </>
    )
};

export default SportsCollection;
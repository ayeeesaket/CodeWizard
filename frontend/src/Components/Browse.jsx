import React, { useState } from "react";

const Browse = () => {
  const quizData = {
    "The Solar System": [
      {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Uranus"],
      },
    ],
    "Ancient Egypt": [
      {
        question: "What is the name of the Egyptian writing system?",
        options: ["Cuneiform", "Hieroglyphics", "Alphabet", "Runes"],
      },
      {
        question: "Which structure is a famous symbol of Ancient Egypt?",
        options: [
          "The Pyramids",
          "The Colosseum",
          "The Parthenon",
          "The Great Wall",
        ],
      },
    ],
    "The Water Cycle": [
      {
        question:
          "What is the process of water vapor turning into liquid called?",
        options: [
          "Condensation",
          "Evaporation",
          "Precipitation",
          "Infiltration",
        ],
      },
      {
        question:
          "Which stage of the water cycle involves water returning to the earth as rain?",
        options: [
          "Precipitation",
          "Transpiration",
          "Condensation",
          "Evaporation",
        ],
      },
    ],
    Photosynthesis: [
      {
        question: "What is the main product of photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Glucose", "Water"],
      },
      {
        question:
          "Which organelle is responsible for photosynthesis in plants?",
        options: ["Chloroplast", "Mitochondria", "Nucleus", "Vacuole"],
      },
    ],
    "World War II": [
      {
        question: "Who was the leader of Nazi Germany during World War II?",
        options: [
          "Adolf Hitler",
          "Winston Churchill",
          "Joseph Stalin",
          "Franklin D. Roosevelt",
        ],
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1941", "1950"],
      },
    ],
  };
  const videos = [
    { id: "libKVRa01L8", title: "The Solar System", topic: "Astronomy" },
    { id: "Z3Wvw6BivVI", title: "Ancient Egypt", topic: "History" },
    { id: "2DqxHRocZYs", title: "The Water Cycle", topic: "Earth Science" },
    { id: "y5GyZBEc2Yc", title: "Photosynthesis", topic: "Biology" },
    { id: "Hu9DlWc9cJQ", title: "World War II", topic: "History" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [quizLoad, setQuizLoad] = useState(false);

  const handleSelectionChange = (event) => {
    const selectedId = event.target.value;
    const video = videos.find((v) => v.id === selectedId);
    setSelectedVideo(video);
  };

  const handleQuizClick = () => {
    setQuizLoad(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Videos</h1>
      <div className="mb-4">
        <label htmlFor="videoSelect" className="block text-lg font-medium mb-2">
          Select a Video:
        </label>
        <select
          id="videoSelect"
          className="w-full p-2 border rounded"
          onChange={handleSelectionChange}
          value={selectedVideo.id}
        >
          {videos.map((video) => (
            <option key={video.id} value={video.id}>
              {video.title}
            </option>
          ))}
        </select>
      </div>
      <div className="video-container bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">{selectedVideo.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          Topic: {selectedVideo.topic}
        </p>
        <div className="video-frame">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="text-2xl mt-4">CHOOSE A GAME:</div>
      <button
        className="quiz mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={handleQuizClick}
      >
        Quiz
      </button>
      {quizLoad && (
        <div className="quiz-container mt-4 p-4 bg-green-100 rounded shadow">
          <h2 className="text-xl font-bold">Quiz Time!</h2>
          {quizData[selectedVideo.title] &&
            quizData[selectedVideo.title].map((q, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium">{q.question}</p>
                <ul className="mt-2">
                  {q.options.map((option, i) => (
                    <li key={i} className="mt-1">
                      <label>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Browse;

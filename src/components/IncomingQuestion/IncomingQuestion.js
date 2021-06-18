import "../../Assets/css/main.css";
import IncomingQuestionCard from "./IncomingQuestionCard";
import "./IncomingQuestions.css";

import { socket } from "../../apis/socket-connect";
import { useEffect } from "react";
import { useState } from "react";

const IncomingQuestion = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchIncomingQuestions();

    socket.on("new-incoming-question", (question) => {
      setQuestions((questions) => {
        return [...questions, question];
      });
    });
  }, []);

  const fetchIncomingQuestions = () => {
    socket.emit("all-incoming-questions", (data) => {
      if (data.length > 0) {
        setQuestions(data[0].questions);
      }
    });
  };

  return (
    <div style={{ marginLeft: 10, maxHeight: "70vh", overflow: "scroll" }}>
      <h2 className="incoming">Incoming Questions</h2>
      <div className="incoming-quesiton-panel">
        {questions.length === 0 && <NoQuestion />}

        {questions.map((question) => (
          <IncomingQuestionCard key={question._id} />
        ))}
      </div>
    </div>
  );
};

export default IncomingQuestion;

function NoQuestion() {
  return (
    <div className="no-question">
      <i class="far fa-hourglass"></i>
    </div>
  );
}

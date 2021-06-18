import "../../Assets/css/main.css";
import IncomingQuestionCard from "./IncomingQuestionCard";
import "./IncomingQuestions.css";

import { socket } from "../../apis/socket-connect";

const IncomingQuestion = () => {
  return (
    <div style={{ marginLeft: 10, maxHeight: "70vh", overflow: "scroll" }}>
      <h2 className="incoming">Incoming Questions</h2>
      <div className="incoming-quesiton-panel">
        <IncomingQuestionCard />
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

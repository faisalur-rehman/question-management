import "../../Assets/css/main.css";
import IncomingQuestionCard from "./IncomingQuestionCard";
import "./IncomingQuestions.css";

import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";

const IncomingQuestion = () => {
  const { questions, isLoading } = useFetchQuestions(
    "all-incoming-questions",
    "new-incoming-question"
  );

  if (isLoading) {
    return <AppLoading />;
  }

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

import "../../Assets/css/main.css";
import IncomingQuestionCard from "./IncomingQuestionCard";
import "./IncomingQuestions.css";
import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";

const IncomingQuestion = ({ moderatorPermissions }) => {
  const { questions, isLoading } = useFetchQuestions(
    "all-incoming-questions",
    "new-incoming-question",
    "updated-incoming-questions"
  );

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <div style={{ marginLeft: 10, maxHeight: "70vh" }}>
      <h2 className="incoming">Incoming Questions</h2>
      <div className="incoming-quesiton-panel">
        {questions.length === 0 && <NoQuestion />}

        {questions.map((question) => (
          <IncomingQuestionCard
            key={question._id}
            question={question}
            moderatorPermissions={moderatorPermissions}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomingQuestion;

function NoQuestion() {
  return (
    <div className="no-question">
      <i className="far fa-hourglass"></i>
    </div>
  );
}

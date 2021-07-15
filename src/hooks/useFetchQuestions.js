import { useEffect, useState } from "react";
import { socket } from "../apis/socket-connect";

export default function useFetchQuestions(
  fetchQuestionURL,
  onChangeQuestionURL,
  updatedURL
) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchQuestions();

    socket.on(onChangeQuestionURL, (question) => {
      setQuestions((_questions) => {
        return [..._questions, question];
      });
    });

    socket.on("on-question-update", (question) => {
      console.log("all questions", questions);
      setQuestions((prevQuestions) => {
        return prevQuestions.map((_question) => {
          if (_question._id === question._id) {
            return { ...question };
          }
          return _question;
        });
      });
    });

    socket.on(updatedURL, (question) => {
      console.log("deleted", question);
      setQuestions([...question[0].questions]);
    });

    //eslint-disable-next-line
  }, []);

  const fetchQuestions = () => {
    setIsLoading(true);

    socket.emit(fetchQuestionURL, (data) => {
      if (data.length > 0) {
        setQuestions(data[0].questions);
      }

      setIsLoading(false);
    });
  };

  return { questions, isLoading };
}

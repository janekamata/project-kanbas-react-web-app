import { useState } from "react";
import { FaPencil, FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import Editor from "react-simple-wysiwyg";
import DOMPurify from "isomorphic-dompurify";

interface Choice {
  _id: string;
  question: string;
  correct: boolean;
  answer: string;
  selected: boolean;
}

interface QuizQuestion {
  _id: string;
  quiz: string;
  title: string;
  type: string;
  points: number;
  question: string;
  choices: Choice[];
  edit: boolean;
}

export default function QuizQuestion({
  question,
  updateQuestion,
}: {
  question: QuizQuestion;
  updateQuestion: (updatedQuestion: QuizQuestion) => void;
}) {
  const [currentQuestion, setQuestion] = useState(question);
  const [presaveQuestion, setPresaveQuestion] = useState(question);
  const save = () => {
    const updatedQuestion = { ...currentQuestion, edit: false };
    setPresaveQuestion(updatedQuestion);
    setQuestion(updatedQuestion);
    updateQuestion(updatedQuestion);
  };

  return (
    <div>
      <form
        id="wd-assignments-editor"
        className="g-4 border rounded p-3 mt-4 bg-light"
      >
        <fieldset className="d-flex align-items-center">
          <div className="fs-5">{currentQuestion.title}</div>
          <div className="d-inline-flex align-items-center ms-auto">
            <label
              htmlFor={`question-points-${currentQuestion._id}`}
              className="fs-6 ms-auto"
            >
              pts:
            </label>

            <span className="fs-6">
              &nbsp;
              {currentQuestion.points}
            </span>
          </div>
          <hr />
        </fieldset>

        <div className="mt-2">
          {
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(question.question),
              }}
            />
          }
        </div>
        {currentQuestion.choices &&
          currentQuestion.choices.map((choice) => (
            <div>
              {currentQuestion.type !== "Fill In the Blank" && (
                <button
                  className={`border rounded mb-2 mt-2 p-2 ps-3 bg-white w-100 text-start ${
                    choice.selected && "fw-bolder text-success border-success"
                  }`}
                  onClick={(e) =>
                    setQuestion({
                      ...currentQuestion,
                      choices: currentQuestion.choices.map((c) =>
                        c._id === choice._id
                          ? { ...c, selected: !c.selected }
                          : { ...c, selected: false }
                      ),
                    })
                  }
                >
                  {choice.answer}
                </button>
              )}
            </div>
          ))}
        {currentQuestion.type === "Fill In the Blank" && (
          <div>
            <input
              className="form-control border rounded mb-2 mt-2 p-2 ps-3 bg-white w-50 text-start"
              type="text"
              placeholder="Type your answer here..."
            ></input>
          </div>
        )}
      </form>
    </div>
  );
}

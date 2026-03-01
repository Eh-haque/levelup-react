export default function Results({ score, questions, userAnswers, onRestart }) {
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body items-center text-center">
            <h1 className="text-5xl font-bold mb-2">Quiz Complete!</h1>

            <div className="stats shadow w-full my-8">
              <div className="stat">
                <div className="stat-value text-primary">{score}</div>
                <div className="stat-title">Correct</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">{percentage}%</div>
                <div className="stat-title">Score</div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-semibold mb-6 text-left">
                Your Answers
              </h2>
              {questions.map((q, i) => {
                const userAns = userAnswers[i];
                const isCorrect = userAns === q.answer;
                return (
                  <div
                    key={i}
                    className="mb-6 border border-base-300 rounded-2xl p-5"
                  >
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="badge badge-lg badge-info">
                          Your answer
                        </span>
                        <span
                          className={`font-semibold ${isCorrect ? "text-success" : "text-error"}`}
                        >
                          {userAns}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="flex items-center gap-3">
                          <span className="badge badge-lg badge-success">
                            Correct answer
                          </span>
                          <span className="font-semibold text-success">
                            {q.answer}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onRestart}
              className="btn btn-primary btn-block mt-8"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

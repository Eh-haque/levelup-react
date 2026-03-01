export default function Quiz({
  currentQuestion,
  currentIndex,
  totalQuestions,
  selected,
  onSelect,
  onNext,
}) {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl">
        <div className="card-body">
          {/* Progress */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="badge badge-primary badge-outline">
              {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={currentIndex + 1}
            max={totalQuestions}
          />

          {/* Question */}
          <h2 className="text-2xl font-bold mt-8 mb-8 leading-tight">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="grid gap-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(option)}
                className={`btn btn-lg justify-start text-left h-auto py-4 px-6 ${
                  selected === option ? "btn-primary" : "btn-outline"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={!selected}
            className="btn btn-primary btn-block mt-10 text-lg h-14"
          >
            {currentIndex === totalQuestions - 1
              ? "Finish Quiz"
              : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="text-8xl mb-6">🧠</div>
        <h1 className="text-6xl font-bold mb-2">QuizMaster</h1>
        <p className="text-xl text-base-content/70 mb-10">
          5 fun questions • Instant results
        </p>
        <button
          onClick={onStart}
          className="btn btn-primary btn-lg w-full text-xl"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

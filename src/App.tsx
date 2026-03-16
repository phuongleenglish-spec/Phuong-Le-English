import { BookOpen, CheckCircle, ChevronDown, ChevronRight, PenTool, XCircle } from 'lucide-react';
import { useState } from 'react';
import { exercisesData, theoryData } from './content';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'theory' | 'exercises'>('theory');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <BookOpen size={24} />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Ôn Thi Vào 10 - Tiếng Anh</h1>
            </div>
            <nav className="flex gap-4">
              <button
                onClick={() => setActiveTab('theory')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'theory'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Lý thuyết
              </button>
              <button
                onClick={() => setActiveTab('exercises')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'exercises'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Luyện tập
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'theory' ? <TheorySection /> : <ExerciseSection />}
      </main>
    </div>
  );
}

function TheorySection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Kho Lý Thuyết</h2>
        <p className="text-slate-600">Bấm vào các tiêu đề bên dưới để xem nội dung chi tiết (giống Notion).</p>
      </div>

      <div className="space-y-4">
        {theoryData.map((chapter, index) => (
          <TheoryChapter key={index} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}

function TheoryChapter({ chapter }: { chapter: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-slate-800">{chapter.title}</h3>
        {isOpen ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-slate-100 space-y-4">
              {chapter.items.map((item: any, idx: number) => (
                <TheoryItem key={idx} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TheoryItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-4 border-l-2 border-slate-200 pl-4 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-left hover:text-blue-600 transition-colors group"
      >
        <div className={`p-1 rounded transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50'}`}>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </div>
        <h4 className="font-medium text-slate-700 group-hover:text-blue-600">{item.subTitle}</h4>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div 
              className="mt-3 text-slate-600 prose prose-slate max-w-none prose-p:my-2 prose-headings:mb-2 prose-headings:mt-4 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExerciseSection() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  if (selectedTopic === null) {
    return (
      <div className="space-y-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Luyện Tập Trắc Nghiệm</h2>
          <p className="text-slate-600">Chọn một chủ đề bên dưới để bắt đầu làm bài. Đáp án và giải thích sẽ hiện ra ngay sau khi bạn chọn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercisesData.map((topic, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTopic(topic.id)}
              className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all text-left group"
            >
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <PenTool size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{topic.title}</h3>
                <p className="text-sm text-slate-500">{topic.questions.length} câu hỏi</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const topicData = exercisesData.find(t => t.id === selectedTopic);

  return (
    <div className="space-y-6">
      <button 
        onClick={() => setSelectedTopic(null)}
        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mb-4"
      >
        &larr; Quay lại danh sách chủ đề
      </button>
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">{topicData?.title}</h2>
      </div>

      <div className="space-y-8">
        {topicData?.questions.map((q, idx) => (
          <QuestionCard key={q.id} question={q} index={idx} />
        ))}
      </div>
    </div>
  );
}

function QuestionCard({ question, index }: { question: any, index: number }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correctAnswerIndex;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex gap-4 mb-4">
        <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
          {index + 1}
        </div>
        <h4 className="text-lg font-medium text-slate-800 pt-1">{question.text}</h4>
      </div>

      <div className="space-y-3 ml-12">
        {question.options.map((option: string, optIdx: number) => {
          let buttonClass = "w-full text-left p-4 rounded-lg border transition-all ";
          
          if (!isAnswered) {
            buttonClass += "border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700";
          } else {
            if (optIdx === question.correctAnswerIndex) {
              buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-800 font-medium";
            } else if (optIdx === selectedAnswer) {
              buttonClass += "border-rose-500 bg-rose-50 text-rose-800";
            } else {
              buttonClass += "border-slate-200 bg-slate-50 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={optIdx}
              disabled={isAnswered}
              onClick={() => setSelectedAnswer(optIdx)}
              className={buttonClass}
            >
              <div className="flex justify-between items-center">
                <span>{String.fromCharCode(65 + optIdx)}. {option}</span>
                {isAnswered && optIdx === question.correctAnswerIndex && <CheckCircle className="text-emerald-500" size={20} />}
                {isAnswered && optIdx === selectedAnswer && optIdx !== question.correctAnswerIndex && <XCircle className="text-rose-500" size={20} />}
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
            className="overflow-hidden ml-12"
          >
            <div className={`p-4 rounded-lg border ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'}`}>
              <h5 className={`font-semibold mb-1 ${isCorrect ? 'text-emerald-800' : 'text-amber-800'}`}>
                {isCorrect ? 'Chính xác!' : 'Chưa chính xác!'} Giải thích:
              </h5>
              <div 
                className="text-slate-700 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: question.explanation }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

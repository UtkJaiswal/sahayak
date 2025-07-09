"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload } from "lucide-react"
import { useState } from "react"

export function AnswerSheetUpload() {
  const [uploaded, setUploaded] = useState(false)

  const dummyEvaluation = {
    studentName: "Priya Sharma",
    subject: "Mathematics - Class 8",
    totalMarks: 100,
    scoredMarks: 78,
    questions: [
      {
        id: 1,
        question: "Question 1 (Remember)",
        marks: 5,
        scored: 5,
        feedback: "Perfect recall of basic concepts",
      },
      {
        id: 2,
        question: "Question 2 (Understand)",
        marks: 10,
        scored: 8,
        feedback: "Good comprehension with minor gaps",
      },
      {
        id: 3,
        question: "Question 3 (Apply)",
        marks: 10,
        scored: 6,
        feedback: "Needs more practice applying concepts",
      },
      {
        id: 4,
        question: "Question 4 (Analyze)",
        marks: 10,
        scored: 4,
        feedback: "Requires development of analytical skills",
      },
    ],
    aiFeedback:
      "Student shows strong foundational knowledge but needs practice with analytical thinking. Recommend more problem-solving exercises.",
    suggestions: [
      "Practice cause-and-effect analysis",
      "Review logical reasoning concepts",
      "Try more application-based problems",
    ],
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Answer Sheet Evaluator
          </CardTitle>
          <Badge className="bg-white/20 text-white">OCR + AI</Badge>
        </div>
        <p className="text-orange-100">Scan and evaluate handwritten answer sheets instantly</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center bg-orange-50">
              <FileText className="w-12 h-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">📝 Upload Student Answer Sheet</h3>
              <p className="text-gray-600 mb-4">
                Upload PDF or JPG of handwritten answer sheets for instant evaluation
              </p>
              <Button onClick={() => setUploaded(true)} className="bg-orange-600 hover:bg-orange-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload Answer Sheet
              </Button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                This agent uses OCR + Bloom's taxonomy to evaluate and provide feedback in seconds.
              </p>
            </div>
          </div>

          <div>
            {uploaded ? (
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Evaluation Results</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">
                        {dummyEvaluation.scoredMarks}/{dummyEvaluation.totalMarks}
                      </div>
                      <div className="text-sm text-gray-500">
                        {Math.round((dummyEvaluation.scoredMarks / dummyEvaluation.totalMarks) * 100)}%
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium">{dummyEvaluation.studentName}</p>
                    <p className="text-sm text-gray-600">{dummyEvaluation.subject}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {dummyEvaluation.questions.map((q) => (
                      <div key={q.id} className="border-l-4 border-l-orange-200 pl-4 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{q.question}</span>
                          <span className="text-sm font-medium">
                            {q.scored}/{q.marks}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{q.feedback}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">AI Feedback</h4>
                    <p className="text-sm text-gray-600 mb-4">{dummyEvaluation.aiFeedback}</p>

                    <h4 className="font-semibold text-gray-800 mb-2">Suggested Improvements</h4>
                    <ul className="space-y-1">
                      {dummyEvaluation.suggestions.map((suggestion, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">Upload answer sheet to see evaluation</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

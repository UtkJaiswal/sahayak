import { Badge } from "@/components/ui/badge"
import { ArUploadCloud } from "@/components/dummy-features/ar-upload"
import { AttendanceUpload } from "@/components/dummy-features/attendance-upload"
import { AnswerSheetUpload } from "@/components/dummy-features/answer-sheet-upload"

export function DummyFeatures() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 mb-4">🚀 Preview Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Next-Generation Teaching Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of classroom technology with these innovative AI-powered features.
          </p>
        </div>

        <div className="space-y-12">
          <ArUploadCloud />
          <AttendanceUpload />
          <AnswerSheetUpload />
        </div>
      </div>
    </section>
  )
}

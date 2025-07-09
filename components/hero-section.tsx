import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Sahayak – Your{" "}
          <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            AI Co-Teacher
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">Less admin. More teaching.</p>

        <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
          Reduce your workload with AI-powered agents that handle grading, lesson planning, student tracking, and
          personalized tutoring – designed specifically for Indian classrooms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
            Explore Agents
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
          >
            <Play className="mr-2" size={20} />
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600">40+</div>
                <div className="text-gray-600">Students per class</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">70%</div>
                <div className="text-gray-600">Time saved on admin</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-gray-600">AI Agents available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

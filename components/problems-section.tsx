import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, BookOpen, FileText } from "lucide-react"

export function ProblemsSection() {
  const problems = [
    {
      icon: Users,
      title: "Overloaded Classrooms",
      description: "Managing 40+ students with diverse learning needs and limited individual attention time",
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "Time-Consuming Admin",
      description: "Hours spent on grading, attendance, and progress tracking instead of actual teaching",
      color: "text-orange-600",
    },
    {
      icon: BookOpen,
      title: "Language & Content Barriers",
      description: "Difficulty adapting content for different languages and learning levels in the same class",
      color: "text-purple-600",
    },
    {
      icon: FileText,
      title: "Manual Assessment",
      description: "Tedious paper-based evaluations with inconsistent grading and delayed feedback",
      color: "text-green-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Real Challenges in Indian Classrooms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teachers face overwhelming administrative tasks that take away from what matters most – teaching and
            connecting with students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <problem.icon className={`w-12 h-12 ${problem.color} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

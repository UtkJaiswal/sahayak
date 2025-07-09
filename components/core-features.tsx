import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileCheck, BookOpen, UserCheck, Presentation, Volume2, Gamepad2 } from "lucide-react"

export function CoreFeatures() {
  const features = [
    {
      icon: Users,
      title: "Student Tracker Agent",
      description:
        "Monitor individual progress, attendance patterns, and learning gaps across all subjects with automated insights.",
      badge: "Core",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: FileCheck,
      title: "Assessment Generator + Evaluator",
      description:
        "Create custom tests, quizzes, and assignments. Auto-grade with detailed feedback and rubric alignment.",
      badge: "Popular",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: BookOpen,
      title: "Lesson Planning Agent",
      description:
        "Generate curriculum-aligned lesson plans with activities, resources, and differentiated instruction strategies.",
      badge: "Essential",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: UserCheck,
      title: "Personalized Tutor Agent",
      description: "Provide individualized learning paths and adaptive content based on each student's pace and style.",
      badge: "AI-Powered",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: Presentation,
      title: "Engagement & Visual Aid Agent",
      description:
        "Create interactive presentations, diagrams, and multimedia content to enhance classroom engagement.",
      badge: "Creative",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: Volume2,
      title: "Reading Fluency Evaluator",
      description: "Assess pronunciation, pace, and comprehension through voice analysis with multilingual support.",
      badge: "Language",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: Gamepad2,
      title: "Gamified Quiz Generator",
      description:
        "Transform learning into engaging games with points, badges, and competitive elements for better retention.",
      badge: "Fun",
      color: "bg-green-100 text-green-800",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">AI Agents That Work For You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each agent is designed to handle specific teaching tasks, working together as your intelligent co-teaching
            team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <feature.icon className="w-10 h-10 text-orange-600" />
                  <Badge className={feature.color}>{feature.badge}</Badge>
                </div>
                <CardTitle className="text-lg text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Link, Settings, Zap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Link,
      title: "Connect Your System",
      description: "Link your Google Classroom, school management system, or start fresh with our simple setup wizard.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: Settings,
      title: "Configure Context",
      description:
        "Add your students, subjects, curriculum goals, and teaching preferences to personalize the AI agents.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Zap,
      title: "Let Agents Assist",
      description:
        "Start your daily teaching routine while AI agents handle grading, planning, tracking, and personalization.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Sahayak Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and transform your teaching experience with AI-powered assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-1">Step {index + 1}</div>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Classroom?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of teachers who are already using Sahayak to reduce workload and improve student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

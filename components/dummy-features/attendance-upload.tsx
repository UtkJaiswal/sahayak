"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, Shield } from "lucide-react"
import { useState } from "react"

export function AttendanceUpload() {
  const [uploaded, setUploaded] = useState(false)

  const dummyStudents = [
    { name: "Aarav Sharma", status: "Present", confidence: "98%" },
    { name: "Priya Patel", status: "Present", confidence: "95%" },
    { name: "Rohan Kumar", status: "Absent", confidence: "-" },
    { name: "Ananya Singh", status: "Present", confidence: "97%" },
    { name: "Vikram Gupta", status: "Present", confidence: "92%" },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Camera className="w-6 h-6" />
            Smart Attendance Agent
          </CardTitle>
          <Badge className="bg-white/20 text-white">AI Vision</Badge>
        </div>
        <p className="text-green-100">Upload class photo → Mark attendance with face recognition</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center bg-green-50">
              <Camera className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">📸 Upload Class Photo</h3>
              <p className="text-gray-600 mb-4">
                Take a photo of your classroom and let AI mark attendance automatically
              </p>
              <Button onClick={() => setUploaded(true)} className="bg-green-600 hover:bg-green-700">
                <Upload className="w-4 h-4 mr-2" />
                Choose Photo
              </Button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium">Privacy Note</span>
              </div>
              <p className="text-xs text-gray-600">
                Face data is processed locally or anonymized via secure cloud. No biometric data is stored permanently.
              </p>
            </div>
          </div>

          <div>
            {uploaded ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Attendance Results</h3>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b">
                    <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-700">
                      <span>Student Name</span>
                      <span>Status</span>
                      <span>Confidence</span>
                    </div>
                  </div>
                  <div className="divide-y">
                    {dummyStudents.map((student, index) => (
                      <div key={index} className="px-4 py-3">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <span className="font-medium">{student.name}</span>
                          <span
                            className={`font-medium ${
                              student.status === "Present" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {student.status}
                          </span>
                          <span className="text-gray-500">{student.confidence}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Backed by Vision AI, this tool detects faces and syncs with Realtime DB.
                </p>
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">Upload a photo to see results</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

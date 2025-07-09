import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, QrCode, Eye } from "lucide-react"

export function ArUploadCloud() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Eye className="w-6 h-6" />
            AR Visualization Agent
          </CardTitle>
          <Badge className="bg-white/20 text-white">Preview</Badge>
        </div>
        <p className="text-purple-100">Visualize classroom topics in 3D and AR</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">Transform Learning with AR</h3>
            <p className="text-gray-600 mb-6">
              This agent turns textbook concepts into interactive AR models that students can explore and manipulate in
              real-time.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <QrCode className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Scan QR to place 3D models on any surface</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Works on any Android/iOS device</span>
              </div>
            </div>

            <Button className="mt-6 bg-purple-600 hover:bg-purple-700">Launch AR Demo</Button>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <Smartphone className="w-24 h-24 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-500 mb-4">{"Scan a QR to place a heart diagram on your table!"}</p>
              <div className="bg-white rounded-lg p-4 shadow-inner">
                <div className="w-full h-32 bg-gradient-to-br from-red-200 to-pink-200 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 font-semibold">3D Heart Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

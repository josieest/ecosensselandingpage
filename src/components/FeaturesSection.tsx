import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import fragmentedCare from "figma:asset/34c1487117905bca8fc0bc2d15ffdf51442897fc.png";
import greenGraphic from "figma:asset/985da475e8f6de52dad10ebf7098c09cf708b5de.png";
import orangeGraphic from "figma:asset/c07184d0dc99cb8893c030c46c977384219ec67c.png";
import emergencyCrisis from "figma:asset/baece3fcb77d42fc969f1226c9b4285f5fe93be7.png";

const features = [
  {
    type: "image",
    src: fragmentedCare,
    alt: "Fragmented Care - UK's Communication Breakdown"
  },
  {
    type: "image",
    src: greenGraphic,
    alt: "The Silver Tsunami - UK's Aging Population"
  },
  {
    type: "image",
    src: orangeGraphic,
    alt: "Chronic Staff Shortages in Care Sector"
  },
  {
    type: "image",
    src: emergencyCrisis,
    alt: "The Emergency Crisis - Falls and Response Times"
  }
];

export function FeaturesSection() {
  return (
    <section id="problem" className="py-20 bg-[#F7F7F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-[#0A2342]">
            The Problem
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#0A2342]/60">
            The current care system fails everyone involved—from overwhelmed agencies and anxious families 
            to isolated elderly individuals who deserve better coordinated, proactive care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            feature.type === "image" ? (
              <Card key={index} className="relative overflow-hidden p-0 border-none shadow-lg">
                <img 
                  src={feature.src} 
                  alt={feature.alt} 
                  className="w-full h-full object-cover"
                />
              </Card>
            ) : (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
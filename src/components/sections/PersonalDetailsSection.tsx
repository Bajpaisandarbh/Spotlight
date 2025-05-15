import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PersonalDetail } from "@/lib/types";
import {
  MapPin,
  Languages,
  Smile,
  Coffee,
  Music,
  BookOpen,
} from "lucide-react"; // Example icons

interface PersonalDetailsSectionProps {
  id: string;
}

const detailsData: PersonalDetail[] = [
  { label: "Location", value: "Jodhpur, India", icon: MapPin },
  {
    label: "Languages",
    value: "Hindi(Native) , English (Fluent), Japanese (Basic)",
    icon: Languages,
  },
  {
    label: "Interests",
    value: "Hiking, Photography, Sci-Fi Movies, Badminton, Valorant",
    icon: Smile,
  },
  { label: "Favorite Drink", value: "Coffee (Black), Water😂", icon: Coffee },
  {
    label: "Music Genre",
    value: "Indie Folk / Electronic, Instrumental",
    icon: Music,
  },
  {
    label: "Currently Reading",
    value: ".....",
    icon: BookOpen,
  },
];

export function PersonalDetailsSection({ id }: PersonalDetailsSectionProps) {
  return (
    <section id={id} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Personal Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailsData.map((detail, index) => (
            <div
              key={detail.label}
              className="fade-in-section"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-2 border-transparent hover:border-accent/50">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {detail.icon && (
                    <detail.icon className="h-8 w-8 text-accent" />
                  )}
                  <CardTitle className="text-xl text-primary">
                    {detail.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground/90">{detail.value}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

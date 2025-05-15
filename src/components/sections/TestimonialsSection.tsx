import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/lib/types";
import { Quote } from "lucide-react";

interface TestimonialsSectionProps {
  id: string;
}

const testimonialsData: (Testimonial & { certificateUrl: string })[] = [
  {
    id: "1",
    quote: "Secured 1st position at Cipherthon 2.0",
    author: "",
    company: "CipherSchools",
    avatarUrl: "https://i.ytimg.com/vi/E8GbCCmw3sU/hqdefault.jpg",
    certificateUrl: "/CipherThon2.pdf",
  },
  {
    id: "2",
    quote:
      "Secured 3rd position at Rajasthan Cyber Crime Awareness Mission Hackathon (RACCAM)",
    author: "",
    company: "Rajasthan Police",
    avatarUrl:
      "https://th.bing.com/th/id/OIP.9G5-YOQBpViFZqXpcaQQOgHaBh?cb=iwc2&rs=1&pid=ImgDetMa",
    certificateUrl: "/certificates/raccam.pdf",
  },
  {
    id: "3",
    quote:
      "Secured 1st position at Infineon Hackathon 2025 organized by Infineon Technologies",
    author: "",
    company: "Infineon Technologies",
    avatarUrl:
      "https://th.bing.com/th/id/OIP.HADGqanqi4q9wQ9C9v-uwgHaDU?cb=iwc2&rs=1&pid=ImgDetMain",
    certificateUrl: "/Infineon.pdf",
  },
];

export function TestimonialsSection({ id }: TestimonialsSectionProps) {
  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Achievements
        </h2>
        <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
          Here is what I have achieved so far...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="fade-in-section"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a
                href={testimonial.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
                title="View Certificate"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-2 border-transparent hover:border-accent/70 flex flex-col group-hover:scale-[1.03] group-hover:border-accent/80 transition-transform">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-foreground/80 italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-auto pt-4 border-t border-border">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={
                            testimonial.author ||
                            testimonial.company ||
                            "Achievement"
                          }
                          data-ai-hint="person face"
                        />
                        <AvatarFallback>
                          {testimonial.author
                            ? testimonial.author.substring(0, 2).toUpperCase()
                            : testimonial.company
                            ? testimonial.company.substring(0, 2).toUpperCase()
                            : "AC"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-primary">
                          {testimonial.author || testimonial.company}
                        </p>
                        {testimonial.company && testimonial.author && (
                          <p className="text-sm text-foreground/70">
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="inline-block mt-4 text-sm text-accent font-semibold underline opacity-80 group-hover:opacity-100 transition-opacity">
                      View Certificate
                    </span>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

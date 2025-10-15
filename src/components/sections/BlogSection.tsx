import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { format } from "date-fns";

interface BlogSectionProps {
  id: string;
}

const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Olake (Lakehouse)",
    slug: "https://dev.to/sandarbh_bajpai/olake-lakehouse-1670",
    date: "2025-04-09T00:00:00Z",
    excerpt: "A deep dive into Olake, exploring what it is and how it works.",
    imageUrl:
      "https://bryteflow.com/wp-content/uploads/2021/02/Data_Lake_Data_Warehouse.png",
    tags: ["devrel", "sql", "database", "opensource", "lakehouse"],
  },
  {
    id: "2",
    title: "GPMI (General Purpose Media Interface)",
    slug: "https://dev.to/sandarbh_bajpai/gpmi-general-purpose-media-interface-4kgj",
    date: "2025-04-09T00:00:00Z",
    excerpt:
      "A new era of wired interfaces is here! The General Purpose Media Interface (GPMI), developed by over 50 leading Chinese tech companies like Hisense, Skyworth, and TCL, is set to revolutionize how we connect our devices. This innovative standard might soon replace HDMI, DisplayPort, Thunderbolt, and USB.",
    imageUrl: "https://images.indianexpress.com/2025/04/GPMI-cable.png",
    tags: ["Future Challenge", "Connectivity", "Smartfuture"],
  },
  {
    id: "3",
    title: "India-Pakistan Cyber Warfare",
    slug: "https://dev.to/sandarbh_bajpai/india-pakistan-cyber-warfare-3kn",
    date: "2025-05-14T00:00:00Z",
    excerpt:
      "The India-Pakistan cyber conflict escalated dramatically alongside Operation Sindoor, with state-backed hackers and hacktivists from Pakistan, Turkey, Bangladesh, Malaysia, and Indonesia (with alleged Chinese support) launching coordinated attacks against Indian digital infrastructure. These cyber offensives targeted critical sectors including defense PSUs, ports, airports, power grids, transportation services, telecom providers, and financial systems.",
    imageUrl:
      "https://th.bing.com/th/id/OIF.AKPdctATCHSjn0d2pDzmaQ?cb=iwc2&rs=1&pid=ImgDetMain",
    tags: ["CyberNews", "Cyber Attacks"],
  },
];

export function BlogSection({ id }: BlogSectionProps) {
  return (
    <section id={id} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          My Thoughts & Stories
        </h2>
        <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
          Explore articles on web development, design, technology trends and
          latest news.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post, index) => (
            <div
              key={post.id}
              className="fade-in-section"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full rounded-xl border-2 border-transparent hover:border-accent/70">
                {post.imageUrl && (
                  <CardHeader className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint="technology blog"
                        unoptimized={post.imageUrl.startsWith('http')}
                      />
                    </div>
                  </CardHeader>
                )}
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-semibold mb-2 text-primary hover:text-accent transition-colors">
                    <a
                      href={post.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </CardTitle>
                  <div className="flex items-center text-xs text-foreground/70 mb-3">
                    <CalendarDays className="mr-1.5 h-4 w-4" />
                    <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                  </div>
                  <p className="text-foreground/80 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-accent/10 text-accent border-accent/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-accent p-0 h-auto hover:text-accent/80"
                  >
                    <a
                      href={post.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
          >
            <a
              href="https://dev.to/sandarbh_bajpai"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Posts
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

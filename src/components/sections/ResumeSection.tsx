import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ResumeSectionProps {
  id: string;
}

export function ResumeSection({ id }: ResumeSectionProps) {
  // This should now correctly point to the resume.pdf in the /public folder
  const resumePdfUrl =
    "https://raw.githubusercontent.com/Bajpaisandarbh/public/main/resume.pdf";

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Removed the FileText icon */}

        <h2 className="text-4xl font-bold mb-4 text-primary">My Resume</h2>
        <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
          Explore my professional journey, skills, and accomplishments. Download
          my resume for a detailed overview.
        </p>
        <Button
          asChild
          size="lg"
          className="orange-gradient-animated font-bold shadow-lg transform hover:scale-105 transition-transform"
        >
          <Link href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
            Download Resume (PDF)
          </Link>
        </Button>

        {/* Optional: A brief text summary of resume sections */}
        <div className="mt-16 max-w-3xl mx-auto text-left space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Experience
            </h3>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>
                Frontend Intern at Indibus Software Solutions pvt. ltd. (9th
                June 2024 - 9th July 2024 )
              </li>
              {/* <li>Software Engineer at Innovate Co. (2018 - 2020)</li>
              <li>Junior Developer at WebWorks LLC (2016 - 2018)</li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">
              Education
            </h3>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>
                B.Tech. in Computer Science - Lovely Professional University
                (2022 - Present)
              </li>
              <li>Class XII - (2020 - 2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

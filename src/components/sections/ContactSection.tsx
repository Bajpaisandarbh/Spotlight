"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  MapPin as LocationIcon,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  submitContactForm,
  type SubmitContactFormInput,
} from "@/app/actions/contactActions";

interface ContactSectionProps {
  id: string;
}

const socialLinks = [
  { Icon: Github, href: "https://github.com/Bajpaisandarbh", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/sandarbh-bajpai",
    label: "LinkedIn",
  },
  { Icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];

export function ContactSection({ id }: ContactSectionProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const contactData: SubmitContactFormInput = { name, email, message };

    try {
      const response = await submitContactForm(contactData);

      if (response.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error Sending Message",
          description:
            response.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id={id} className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Get In Touch
        </h2>
        <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to say hi? Feel free
          to reach out. I'm always open to discussing new opportunities and
          collaborations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-xl shadow-xl fade-in-section">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/90">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 bg-background placeholder:text-foreground/50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/90">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 bg-background placeholder:text-foreground/50"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/90">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 bg-background placeholder:text-foreground/50"
                  placeholder="Hi there, I'd like to discuss..."
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className="space-y-8 fade-in-section"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg shadow-md">
                <Mail className="h-8 w-8 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">Email</h4>
                  <a
                    href="mailto:youremail@example.com"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    bajpaisandarbh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg shadow-md">
                <Phone className="h-8 w-8 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    9352643208
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg shadow-md">
                <LocationIcon className="h-8 w-8 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">
                    Location
                  </h4>
                  <p className="text-foreground/80">Jodhpur, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 bg-secondary rounded-full shadow-md hover:bg-accent hover:text-accent-foreground text-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

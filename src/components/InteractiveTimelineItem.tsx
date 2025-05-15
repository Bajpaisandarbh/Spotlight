import type { TimelineEvent } from "@/lib/types";
import { CalendarDays } from "lucide-react";

interface InteractiveTimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

export function InteractiveTimelineItem({
  event,
  isLast,
}: InteractiveTimelineItemProps) {
  const IconComponent = event.icon || CalendarDays;

  return (
    <li className="relative flex gap-x-4">
      {!isLast && (
        <div className="absolute left-[11px] top-[28px] h-full w-0.5 bg-border -translate-x-1/2"></div>
      )}
      <div className="relative flex h-7 w-7 flex-none items-center justify-center bg-secondary rounded-full shadow-md">
        <IconComponent className="h-4 w-4 text-accent" />
      </div>
      <div className="pb-8 flex-grow">
        <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
        <time className="text-xs leading-5 text-foreground/70">
          {event.date}
        </time>
        <p className="mt-1 text-sm leading-6 text-foreground/90">
          {event.description}
        </p>
      </div>
    </li>
  );
}

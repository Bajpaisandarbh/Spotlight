import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/types";

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground flex items-center">
          {skill.icon && <skill.icon className="mr-2 h-5 w-5 text-accent" />}
          {skill.name}
        </span>
        <span className="text-sm font-medium text-accent">
          {skill.proficiency}%
        </span>
      </div>
      <Progress
        value={skill.proficiency}
        className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-teal-400"
      />
    </div>
  );
}

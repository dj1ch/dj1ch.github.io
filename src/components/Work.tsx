import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

const workExperience = [
  {
    title: "Intern",
    company: "theCoderSchool",
    duration: "June 2024 - August 2024",
    description: "Assisted in the teaching of Programming and Computer Science related concepts to young children.",
    icon: Lucide.IconNotebook,
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    duration: "September 2023 - Present",
    description: "Designed and implemented firmware for embedded devices; worked on websites for open source projects.",
    icon: Lucide.IconChip,
  },
];

export default () => {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {workExperience.map((experience) => (
          <li
            key={experience.title}
            className={cn(
              "group flex items-center justify-between px-4 py-3",
              "bg-neutral-2 hover:bg-neutral-3",
              "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
              "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
            )}
          >
            <div className="flex flex-row items-stretch gap-5 pl-2">
              <div className="flex items-center justify-center">
                <experience.icon
                  size={24}
                  className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                />
              </div>

              <div>
                <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                  {experience.title} - {experience.company}
                </h3>
                <div className="text-xs text-neutral-8">{experience.duration}</div>
                <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs mt-1">
                  {experience.description}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

// TODO : update projects
const projects = [
  {
    title: "minigotchi",
    description: "An even smaller Pwnagotchi. Participated in Hacktoberfest 2023",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/minigotchi",
  },
  {
    title: "minigotchi-ESP32",
    description: "Minigotchi ported to the ESP32",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/minigotchi-esp32",
  },
  {
    title: "ieee802154-sniffer",
    description: "and yet another proof of concept sniffer using the IEEE 802.15.4 standard",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/ieee802154-sniffer",
  },
  {
    title: "esp32c6-sniffer",
    description: "a proof of concept ESP32C6 sniffer",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/esp32c6-sniffer",
  },
  {
    title: "openhaystack-esp32",
    description: "Modified version of Openhaystack firmware for ESP-IDF v5.3",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/openhaystack-esp32",
  },
  {
    title: "esp32_nat_router_plus",
    description: "A simple NAT Router for the ESP32 with support for ESP-IDF 5.3.0",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/esp32_nat_router_plus",
  },
  {
    title: "docker-pwnagotchi",
    description: "Pwnagotchi on Docker with updated dependencies.",
    icon: Lucide.IconImage,
    url: "https://github.com/Pwnagotchi-Unofficial/docker-pwnagotchi",
  },
  {
    title: "pico-key",
    description: "A physical pentesting toolkit on a (regular) Raspberry Pi Pico",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/pico-key",
  },
  {
    title: "pico-honeypot",
    description: "A Raspberry Pi Pico honeypot that pretends to be a linux server.",
    icon: Lucide.IconImage,
    url: "https://github.com/dj1ch/pico-honeypot",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Projects</h2>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <project.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{project.title}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {project.description}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={project.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

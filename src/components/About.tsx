// TODO : update about

import { Avatar } from "./ui";
import { Lucide } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.png" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">dj1ch</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Embedded Developer</h2>
        </div>
      </div>

      <div>
        I'm a high school student with a passion for computer science, martial arts, and productivity. I consider myself a polymath.
      </div>
    </div>
  );
};

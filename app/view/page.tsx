import GetProjects from "@/components/projects"
import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"
function page() {
  return (
    <div className="flex text-white">
        <GetProjects/>
        <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10 opacity-30",
            )}
          />
    </div>
  )
}

export default page

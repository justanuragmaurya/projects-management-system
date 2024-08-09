import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[0e0e0e] text-white flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8 mt-32">
            {/* <span className="bg-gray-800 text-xs px-2 py-1 rounded-full">  */}
            <AnimatedGradientText className="bg-[0e0e0e]">
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#ff0000] to-[#ffc340] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Upload and Review Projects
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>
          <BlurFade delay={0.25} inView>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl text-center leading-tight">
              Hey , welcome to<span className="text-red-500"> 100xDevs </span>Projects , hope you have a great time. </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-gray-400 mb-8 max-w-3xl text-center">
              A platforms for cohort members to share there projects and review each other&apos;s projects.
            </p>
          </BlurFade>
          <Button className="px-6 py-3 text-lg bg-red-500 hover:bg-red-800">Get Started →</Button>
          {/* Placeholder for website screenshot */}
          <div className="mt-16 relative w-full max-w-4xl ">
            <div className="absolute inset-0 bg-red-800 opacity-10 blur-3xl transform scale-40 -z-10"></div>
            <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
              <p className="text-gray-400 text-lg">Your website screenshot here</p>
              <BorderBeam />
            </div>
          </div>
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
        </main>
      </div>
      <div className="flex flex-col gap-5 mt-8 items-center text-center justify-center">
        <h2 className="text-white mt-56">‎</h2>
      </div>
    </>
  );
}


import { RocketLogo } from "@/components/RocketLogo";
import { LaunchCard } from "@/components/LaunchCard";
import { LaunchList } from "@/components/LaunchList";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useLaunchData } from "@/hooks/useLaunchData";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { data, isLoading, error } = useLaunchData();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-black" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-black text-lg">Failed to load launch data</p>
          <p className="text-gray-600 text-sm mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="py-12 flex flex-col items-center">
        <RocketLogo />
        <div className="relative w-full mt-6">
          <h1 className="text-4xl font-light text-black text-center">
            <span className="inline-block w-[calc(50%-1.25rem)] text-end pr-2">Space</span>
            <span className="inline-block w-10 text-5xl font-semibold">X</span>
            <span className="inline-block w-[calc(50%-1.25rem)] text-start pl-2">Launches</span>
          </h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Launch Info Cards - Next first on mobile, Previous first on desktop */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Next Launch - shows first on mobile */}
            <div className="order-1 md:order-2">
              <LaunchCard 
                launch={data?.next} 
                type="next" 
                title="Next Launch"
              />
            </div>
            {/* Previous Launch - shows second on mobile */}
            <div className="order-2 md:order-1">
              <LaunchCard 
                launch={data?.previous} 
                type="previous" 
                title="Previous Launch"
              />
            </div>
          </div>
        </section>

        {/* Launch Lists - Upcoming first on mobile, Past first on desktop */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Upcoming Launches - shows first on mobile */}
          <div className="order-1 md:order-2">
            <LaunchList 
              launches={data?.upcoming || []} 
              title="Upcoming Launches"
              type="upcoming"
            />
          </div>
          {/* Past Launches - shows second on mobile */}
          <div className="order-2 md:order-1">
            <LaunchList 
              launches={data?.past || []} 
              title="Past Launches"
              type="past"
            />
          </div>
        </section>

        {/* Video Player */}
        {data?.previous?.links?.webcast && (
          <section>
            <VideoPlayer 
              webcastUrl={data.previous.links.webcast}
              launchName={data.previous.name}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
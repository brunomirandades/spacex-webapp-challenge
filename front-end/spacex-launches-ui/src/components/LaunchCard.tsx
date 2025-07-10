import { Launch } from "@/types/launch";
import { formatDate } from "@/utils/dateUtils";

interface LaunchCardProps {
  launch?: Launch;
  type: "previous" | "next";
  title: string;
}

const LaunchCard = ({ launch, type, title }: LaunchCardProps) => {
  if (!launch) {
    return (
      <div className="border border-gray-200 rounded-lg p-6 h-64 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-400">No {type} launch data available</p>
      </div>
    );
  }

  const getStatusBadge = () => {
    if (launch.upcoming) {
      return (
        <span className="inline-block px-3 py-1 text-xs border border-black text-black rounded-full">
          UPCOMING
        </span>
      );
    }
    
    if (launch.success === true) {
      return (
        <span className="inline-block px-3 py-1 text-xs bg-black text-white rounded-full">
          SUCCESS
        </span>
      );
    }
    
    if (launch.success === false) {
      return (
        <span className="inline-block px-3 py-1 text-xs border border-gray-400 text-gray-600 rounded-full">
          FAILED
        </span>
      );
    }
    
    return null;
  };

  // Generic placeholder badge when no mission patch is available
  const PlaceholderBadge = () => (
    <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-gray-400"
      >
        <path 
          d="M12 2L13.5 8.5L20 7L14 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L10 12L4 7L10.5 8.5L12 2Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );

  return (
    <div className="border border-gray-200 rounded-lg p-6 h-64 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <h2 className="text-lg font-medium mb-4 text-gray-600">{title}</h2>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{launch.name}</h3>
          <p className="text-gray-600 mb-2">{formatDate(launch.date_utc)}</p>
          <p className="text-sm text-gray-500 mb-3">Flight #{launch.flight_number}</p>
        </div>
        
        <div className="flex items-center justify-between">
          {getStatusBadge()}
          
          {launch.links?.patch?.small ? (
            <img 
              src={launch.links.patch.small} 
              alt={`${launch.name} patch`}
              className="w-12 h-12 object-contain"
            />
          ) : (
            <PlaceholderBadge />
          )}
        </div>
      </div>
    </div>
  );
};

export { LaunchCard };
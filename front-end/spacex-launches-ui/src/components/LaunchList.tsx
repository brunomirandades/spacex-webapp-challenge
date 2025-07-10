import { Launch } from "@/types/launch";
import { formatDate } from "@/utils/dateUtils";

interface LaunchListProps {
  launches: Launch[];
  title: string;
  type: "upcoming" | "past";
}

const LaunchList = ({ launches, title, type }: LaunchListProps) => {
  const getStatusIcon = (launch: Launch) => {
    if (launch.upcoming) {
      return <div className="w-2 h-2 bg-gray-400 rounded-full" />;
    }
    
    if (launch.success === true) {
      return <div className="w-2 h-2 bg-black rounded-full" />;
    }
    
    if (launch.success === false) {
      return <div className="w-2 h-2 bg-gray-300 rounded-full" />;
    }
    
    return <div className="w-2 h-2 bg-gray-200 rounded-full" />;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      
      {launches.length === 0 ? (
        <p className="text-gray-400">No {type} launches available</p>
      ) : (
        <div className="space-y-4">
          {launches.map((launch) => (
            <div 
              key={launch.id} 
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {getStatusIcon(launch)}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{launch.name}</h3>
                <p className="text-xs text-gray-500">{formatDate(launch.date_utc)}</p>
              </div>
              
              <div className="text-xs text-gray-400">
                #{launch.flight_number}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { LaunchList };
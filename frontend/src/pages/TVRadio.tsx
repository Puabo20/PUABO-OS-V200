
import { Radio, Tv, Calendar, PlayCircle } from 'lucide-react';

export function TVRadio() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Radio className="w-8 h-8 mr-3 text-puabo-primary" />
          TV & Radio
        </h1>
        <p className="text-gray-400">
          Manage your TV and radio programming, schedules, and broadcasts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Tv className="w-5 h-5 mr-2 text-puabo-primary" />
            Live Programs
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Morning Show</h3>
                <p className="text-gray-400 text-sm">Live • 2,345 viewers</p>
              </div>
              <PlayCircle className="w-6 h-6 text-puabo-primary" />
            </div>
            <div className="text-center py-8 text-gray-400">
              <p>No other programs currently live</p>
            </div>
          </div>
        </div>

        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-puabo-primary" />
            Program Schedule
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Evening News</h3>
                <p className="text-gray-400 text-sm">Today at 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Late Night Talk</h3>
                <p className="text-gray-400 text-sm">Today at 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-puabo-primary text-puabo-dark font-semibold py-3 px-6 rounded-lg hover:bg-puabo-secondary transition-colors">
          Create New Program
        </button>
      </div>
    </div>
  );
}
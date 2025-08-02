
import { Music, Video, Upload, Tag } from 'lucide-react';

export function MusicMedia() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Music className="w-8 h-8 mr-3 text-puabo-primary" />
          Music & Media
        </h1>
        <p className="text-gray-400">
          Upload, manage, and distribute your indie music and video content.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Upload className="w-5 h-5 mr-2 text-puabo-primary" />
            Upload Content
          </h2>
          <div className="space-y-4">
            <button className="w-full py-3 px-4 border-2 border-dashed border-puabo-accent rounded-lg text-gray-400 hover:border-puabo-primary hover:text-puabo-primary transition-colors">
              <Upload className="w-6 h-6 mx-auto mb-2" />
              Upload Music
            </button>
            <button className="w-full py-3 px-4 border-2 border-dashed border-puabo-accent rounded-lg text-gray-400 hover:border-puabo-primary hover:text-puabo-primary transition-colors">
              <Video className="w-6 h-6 mx-auto mb-2" />
              Upload Video
            </button>
          </div>
        </div>

        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Uploads</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Midnight Dreams</h3>
                <p className="text-gray-400 text-sm">Audio • 3.2MB</p>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="text-center py-8 text-gray-400">
              <p>No recent uploads</p>
            </div>
          </div>
        </div>

        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Tag className="w-5 h-5 mr-2 text-puabo-primary" />
            Playlists & Tags
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-puabo-accent rounded-lg">
              <span className="text-white">Chill Vibes</span>
              <span className="text-gray-400 text-sm">12 tracks</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-puabo-accent rounded-lg">
              <span className="text-white">Upbeat</span>
              <span className="text-gray-400 text-sm">8 tracks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
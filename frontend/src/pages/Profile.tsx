
import { User, Camera, Settings, Save } from 'lucide-react';

export function Profile() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <User className="w-8 h-8 mr-3 text-puabo-primary" />
          Profile
        </h1>
        <p className="text-gray-400">
          Manage your profile information, bio, and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Profile Picture</h2>
          <div className="text-center">
            <div className="w-32 h-32 bg-puabo-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-puabo-dark">JD</span>
            </div>
            <button className="flex items-center justify-center mx-auto px-4 py-2 border border-puabo-primary text-puabo-primary rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors">
              <Camera className="w-4 h-4 mr-2" />
              Change Photo
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Profile Information</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="john_doe"
                  className="w-full px-4 py-3 bg-puabo-accent border border-puabo-gray rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-puabo-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-3 bg-puabo-accent border border-puabo-gray rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-puabo-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                rows={4}
                defaultValue="Creative content creator specializing in music and digital art. Passionate about connecting with audiences through innovative storytelling."
                className="w-full px-4 py-3 bg-puabo-accent border border-puabo-gray rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-puabo-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="Los Angeles, CA"
                  className="w-full px-4 py-3 bg-puabo-accent border border-puabo-gray rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-puabo-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  defaultValue="https://johndoe.com"
                  className="w-full px-4 py-3 bg-puabo-accent border border-puabo-gray rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-puabo-primary"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 border border-puabo-primary text-puabo-primary rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors"
              >
                <Settings className="w-4 h-4 mr-2" />
                Advanced Settings
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-puabo-primary text-puabo-dark font-semibold rounded-lg hover:bg-puabo-secondary transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
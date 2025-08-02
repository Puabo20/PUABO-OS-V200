
import { Building2, FileText, Clock, CheckCircle } from 'lucide-react';

export function BLAC() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Building2 className="w-8 h-8 mr-3 text-puabo-primary" />
          BLAC (Alternative Lending)
        </h1>
        <p className="text-gray-400">
          Manage your alternative lending applications and request status.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Application Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Equipment Loan</h3>
                <p className="text-gray-400 text-sm">$15,000 requested</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-medium">Pending</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-puabo-accent rounded-lg">
              <div>
                <h3 className="text-white font-medium">Studio Upgrade</h3>
                <p className="text-gray-400 text-sm">$8,500 requested</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Approved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Quick Apply</h2>
          <div className="space-y-4">
            <div className="p-4 bg-puabo-accent rounded-lg">
              <h3 className="text-white font-medium mb-2">Creator Equipment Loan</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get funding for professional equipment to enhance your content creation.
              </p>
              <button className="w-full bg-puabo-primary text-puabo-dark font-semibold py-2 px-4 rounded-lg hover:bg-puabo-secondary transition-colors">
                Apply Now
              </button>
            </div>
            <div className="p-4 bg-puabo-accent rounded-lg">
              <h3 className="text-white font-medium mb-2">Business Expansion Loan</h3>
              <p className="text-gray-400 text-sm mb-4">
                Scale your creator business with flexible funding options.
              </p>
              <button className="w-full border border-puabo-primary text-puabo-primary font-semibold py-2 px-4 rounded-lg hover:bg-puabo-primary hover:text-puabo-dark transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-puabo-gray border border-puabo-accent rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-puabo-primary" />
          Required Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-puabo-accent rounded-lg text-center">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-white font-medium">Identity Verification</h3>
            <p className="text-gray-400 text-sm">Completed</p>
          </div>
          <div className="p-4 bg-puabo-accent rounded-lg text-center">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-white font-medium">Income Verification</h3>
            <p className="text-gray-400 text-sm">Completed</p>
          </div>
          <div className="p-4 bg-puabo-accent rounded-lg text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-white font-medium">Business Plan</h3>
            <p className="text-gray-400 text-sm">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
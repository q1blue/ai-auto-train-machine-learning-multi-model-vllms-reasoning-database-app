import React, { useState } from 'react';
import { MediaAsset } from '../../types/media';
import { Upload } from 'lucide-react';

export default function MediaUploader() {
  const [uploading, setUploading] = useState(false);
  const [assets, setAssets] = useState<MediaAsset[]>([]);

  const handleUpload = async (files: FileList) => {
    setUploading(true);
    // Upload logic would be implemented here
    setUploading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Media Assets</h2>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <label className="mt-4 block">
          <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Upload files
          </span>
          <input
            type="file"
            multiple
            className="sr-only"
            onChange={(e) => e.target.files && handleUpload(e.target.files)}
          />
        </label>
        <p className="mt-1 text-sm text-gray-500">
          Images, videos, trailers, or 3D models
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {assets.map(asset => (
          <div key={asset.id} className="relative">
            {asset.thumbnail && (
              <img 
                src={asset.thumbnail}
                alt={asset.metadata.title}
                className="rounded-lg shadow-sm"
              />
            )}
            {asset.metadata.verified && (
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                Verified
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
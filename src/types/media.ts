export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'trailer' | 'model';
  url: string;
  thumbnail?: string;
  metadata: {
    title: string;
    description: string;
    tags: string[];
    verified: boolean;
    dimensions?: {
      width: number;
      height: number;
    };
  };
}

export interface VerificationStatus {
  isVerified: boolean;
  verifiedBy: string;
  verifiedAt: Date;
  confidence: number;
}
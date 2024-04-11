interface SocialMedia {
  name: string;
  path: string;
  url: string;
}

export interface SocialMediaLinks {
  [key: string]: SocialMedia;
}
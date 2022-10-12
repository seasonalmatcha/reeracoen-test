export type Media = {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: boolean;
  'media-metadata': MediaMetadata[];
};

import { Media } from './Media';

export type Article = {
  url: string;
  adx_keywords: string;
  column: null;
  section: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  published_date: string;
  source: string;
  id: number;
  asset_id: number;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  uri: string;
};

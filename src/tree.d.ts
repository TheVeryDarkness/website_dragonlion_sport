interface videoInfo {
  frame?: string;
  from?: string;

  src?: string;

  range?: [string, string];

  origin?: string;
  comment?: [string, string][];
}
interface node {
  value: string;
  sub?: node[];

  range?: [string, string];
  src?: string;
  origin?: string;
  comment?: [string, string][];
}
export interface action extends videoInfo, node {
  value: string;
}
export interface team extends videoInfo, node {
  value: string;
  sub: action[];
}
export interface event extends videoInfo, node {
  value: string;
  sub: team[];
}
export interface year extends node {
  value: string;
  sub: event[];
}
export interface sport extends node {
  value: string;
  sub: year[];
}
export interface tree {
  root: node[];
}

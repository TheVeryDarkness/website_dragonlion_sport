type VideoInfo = {
  frame?: string;
  from?: string;

  src?: string;

  range?: string[]; //[string, string];

  origin?: string;
};
type NodeBasic = {
  value: string;
  sub: NodeBasic[];

  comment?: string[][]; //[string, string][];
  [key: string]: undefined | string | string[] | string[][] | NodeBasic[];
};
export interface Action extends VideoInfo, NodeBasic {
  value: string;
}
export interface Team extends VideoInfo, NodeBasic {
  value: string;
  sub: Action[];
}
export interface Group extends VideoInfo, NodeBasic {
  value: string;
  sub: Team[];
}
export interface Tournament extends VideoInfo, NodeBasic {
  value: string;
  sub: Group[];
}
export interface Year extends NodeBasic {
  value: string;
  sub: Tournament[];
}
export interface Sport extends NodeBasic {
  value: string;
  sub: Year[];
}
export interface TreeRoot {
  root: Sport[];
}

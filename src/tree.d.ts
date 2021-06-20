export interface treeNode {
  value: string;
  sub?: treeNode[];
  [key: string]: string | treeNode[] | string[] | undefined;
}

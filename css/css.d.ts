declare module "*/basic.css" {
  const content: string;
  export default content;
}
interface lazyModule {
  use: () => void;
  unuse: () => void;
}
declare module "*/light.css" {
  const content: lazyModule;
  export default content;
}
declare module "*/dark.css" {
  const content: lazyModule;
  export default content;
}

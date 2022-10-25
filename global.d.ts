declare module "*.svg" {
import dynamic from 'next/dynamic'
const React = dynamic(() => import ("react"));

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;

  export default ReactComponent;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.yml" {
  const value: any;
  export default value;
}

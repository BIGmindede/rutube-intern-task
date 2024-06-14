// <reference types="vite-plugin-svgr/client" />
declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
  }

declare module '*.svg?react' {
    import type React from 'react'

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}
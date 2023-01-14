import { type ReactNode } from "react"

export type GenericProps<T extends object> = {
  [K in keyof T]: T[K]
}

export type GenericComponent<T extends object> = React.FC<GenericProps<T>>

export type CustomComponent<
  ComponentProps extends object = unknown,
  DefineGenericProps extends object = unknown
> = GenericComponent<ComponentProps & DefineGenericProps>

export interface ApplicationGenericComponentProps {
  className?: string
  children?: ReactNode
}

export type ApplicationComponent<Props extends object = unknown> =
  CustomComponent<Props, ApplicationGenericComponentProps>

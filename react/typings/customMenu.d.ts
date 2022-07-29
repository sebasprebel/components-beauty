export type MenuDesktopProps = {
  departments: DepartmentsProps[]
}

export type DepartmentsProps = {
  categories: CategoriesProps[]
  banner: BannerProps
}

export type MenuItemProps = {
  name: string
  href: string
  id: number
  handleClick?: any
  isLinkItem?: boolean
  isHighlight?: boolean
  isActive?: boolean
}

export type SubCategoriesProps = {
  name: string
  children: any
  subMenuToShow: any
  href: string
  handleLeave: any
}

export type BannerProps = {
  name: string
  href: string
  image: string
}

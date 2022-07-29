export type DesktopMenuProps = {
  bannerImages: BannerProps[]
}
export type MenuItemProps = {
  name: string
  href: string
  id: number
  children?: any
  isLinkItem?: boolean
  isHighlight?: boolean
  showSubMenu?: boolean
  notCategorieItem?: boolean
  menuBanners?: any
}

export type SubMenuProps = {
  name: string
  href: string
  notCategoriesMenu?: boolean
  children?: any
}

export type SubSubMenuProps = {
  children: SubSubMenuItemProps[]
}

export type SubSubMenuItemProps = {
  name: string
  href: string
  id: number
}

/** Banner props */
export type BannerProps = {
  name: string
  href: string
  id: number
  image: string
}

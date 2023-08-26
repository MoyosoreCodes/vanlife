export interface VanProps {
  imageUrl: string;
  type: string;
  price: string;
  name: string;
  onClick?: () => void
}

export interface VanItem extends VanProps {
  id: string;
  hostId: string;
  description: string;
  onClick?: () => void
}

export interface VanFilterItem {
  label: string;
  value: string;
}

export const VanTypeColorMap = {
  "simple": "#E17654",
  "rugged": "#115E59",
  "luxury": "#161616"
}
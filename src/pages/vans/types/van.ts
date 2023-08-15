
export interface VanProps {
  imageUrl: string;
  type: string;
  price: string;
  name: string;
}

export interface VanItem extends VanProps {
  id: string
  hostId: string, 
  description: string;
}
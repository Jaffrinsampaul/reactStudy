export type pTag = {
  name: string,
  style?: string | undefined,
};

export type header = {
  menuOption: { name: string, url: string }[],
  handleMenu: Function,
  selectedMenu: number
};

export type customButton = {
  btnName: string,
  style: string,
  fun: Function,
};

export type CardType = {
  bg: string,
  title: string,
  description: string
};

export type OrderType = {
  container: any,
  order: any
};

export type InfoType = {
  pizza1: any,
  pizza2: any
};

export type PlayBackVideoType = {
  title: string,
  navigate: Function
};

export type hotMealMenuType = {
  dish: string,
  image: string,
  description: string,
  price: string
};

export type hotMealType = {
  navigate: Function,
  menu1: any,
  menu2: any
}
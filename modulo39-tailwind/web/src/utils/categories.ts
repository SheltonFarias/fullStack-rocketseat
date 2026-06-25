import foodSvg from "../assets/food.svg"
import othersSvg from "../assets/others.svg"
import serviceSvg from "../assets/service.svg"
import transportSvg from "../assets/transport.svg"
import accommodationSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg
  },

  others: {
    name: "outros",
    icon: othersSvg
  },

  services: {
    name: "serviços",
    icon: serviceSvg
  },

  transport: {
    name: "transporte",
    icon: transportSvg
  },

  accommodation: {
    name: "Acomodação",
    icon: accommodationSvg
  },

}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>

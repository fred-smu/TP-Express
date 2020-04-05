import Charmin12 from '../Style/charmin.jpg';
import Charmin24 from '../Style/charmin24.jpg';
import Scott12 from '../Style/scott12.jpg';
import Scott24 from '../Style/scott24.jpg';
import Cottonelle12 from '../Style/cottonelle12.jpg';
import Cottonelle24 from '../Style/cottonelle24.jpg';

var charmin12 = {
    brand: "Charmin",
    size: "12 rolls",
    image: Charmin12,
    walmart: {
        price: 1.11,
        availability: "yes"
    },
    target: {
        price: 2.22,
        availability: "yes"
    },
    amazon: {
        price: 1.21,
        availability: "no"
    }
};
var charmin24 = {
    brand: "Charmin",
    size: "24 rolls",
    image: Charmin24,
    walmart: {
        price: 12.99,
        availability: "no"
    },
    target: {
        price: 13.99,
        availability: "no"
    },
    amazon: {
        price: 11.10,
        availability: "no"
    }
};

var scott12 = {
    brand: "Scott",
    size: "12 rolls",
    image: Scott12,
    walmart: {
        price: 10.37,
        availability: "yes"
    },
    target: {
        price: 11.57,
        availability: "no"
    },
    amazon: {
        price: 8.99,
        availability: "yes"
    }
};

var scott24 = {
    brand: "Scott",
    size: "24 rolls",
    image: Scott24,
    walmart: {
        price: 9.99,
        availability: "yes"
    },
    target: {
        price: 10.99,
        availability: "yes"
    },
    amazon: {
        price: .99,
        availability: "no"
    }
};

var cottonelle12 = {
    brand: "Cottonelle",
    size: "12 rolls",
    image: Cottonelle12,
    walmart: {
        price: 9.99,
        availability: "no"
    },
    target: {
        price: 10.99,
        availability: "no"
    },
    amazon: {
        price: .99,
        availability: "no"
    }
};
var cottonelle24 = {
    brand: "Cottonelle",
    size: "24 rolls",
    image: Cottonelle24,
    walmart: {
        price: 9.99,
        availability: "yes"
    },
    target: {
        price: 10.99,
        availability: "no"
    },
    amazon: {
        price: .99,
        availability: "yes"
    }
};

export {
    charmin12,
    charmin24,
    scott12,
    scott24,
    cottonelle12,
    cottonelle24
};

// import {charmin12Pack} from './mockData';

// image = charmin12Pack.image;

// walmartPrice = charmin12Pack.walmart.price;
// walmartAvailability = charmin12Pack.walmart.availability;
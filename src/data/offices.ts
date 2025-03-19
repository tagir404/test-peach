type IDistrictValues =
    | 'moscow'
    | 'center'
    | 'northwest'
    | 'south'
    | 'volga'
    | 'ural'
    | 'sibir'
    | 'far_east'

interface IOffice {
    city: string
    pos: {
        x: number
        y: number
    }
    district: IDistrictValues
    textSize: number
    reverse?: boolean
}

const officesData: IOffice[] = [
    {
        city: 'Москва',
        pos: {
            x: 141.5,
            y: 223.9
        },
        district: 'moscow',
        textSize: 14
    },
    {
        city: 'Ярославль',
        pos: {
            x: 179,
            y: 196.9
        },
        district: 'center',
        textSize: 12
    },
    {
        city: 'Воронеж',
        pos: {
            x: 93.5,
            y: 245.91
        },
        district: 'center',
        textSize: 12
    },
    {
        city: 'Белгород',
        pos: {
            x: 90,
            y: 276.58
        },
        district: 'center',
        textSize: 12
    },
    {
        city: 'Калининград',
        pos: {
            x: 38.5,
            y: 123.58
        },
        district: 'northwest',
        textSize: 12
    },
    {
        city: 'Санкт-Петербург',
        pos: {
            x: 149.5,
            y: 130.68
        },
        district: 'northwest',
        textSize: 16
    },
    {
        city: 'Ростов-на-Дону',
        pos: {
            x: 81.38,
            y: 319.18
        },
        district: 'south',
        textSize: 14
    },
    {
        city: 'Волгоград',
        pos: {
            x: 108.5,
            y: 360.58
        },
        district: 'south',
        textSize: 12
    },
    {
        city: 'Краснодар',
        pos: {
            x: 49.88,
            y: 378.58
        },
        district: 'south',
        textSize: 14
    },
    {
        city: 'Н. Новгород',
        pos: {
            x: 192.17,
            y: 260
        },
        district: 'volga',
        textSize: 12
    },
    {
        city: 'Самара',
        pos: {
            x: 187.5,
            y: 306.18
        },
        district: 'volga',
        textSize: 12
    },
    {
        city: 'Казань',
        pos: {
            x: 249.67,
            y: 298.18
        },
        district: 'volga',
        textSize: 12
    },
    {
        city: 'Уфа',
        pos: {
            x: 253.67,
            y: 336.18
        },
        district: 'volga',
        textSize: 12
    },
    {
        city: 'Оренбург',
        pos: {
            x: 219.67,
            y: 364.58
        },
        district: 'volga',
        textSize: 12
    },
    {
        city: 'Ижевск',
        pos: {
            x: 326.4,
            y: 289.18
        },
        district: 'ural',
        textSize: 12
    },
    {
        city: 'Пермь',
        pos: {
            x: 379.5,
            y: 299.18
        },
        district: 'ural',
        textSize: 14
    },
    {
        city: 'Сургут',
        pos: {
            x: 433,
            y: 311.18
        },
        district: 'ural',
        textSize: 12
    },
    {
        city: 'Екатеринбург',
        pos: {
            x: 320.9,
            y: 328.18
        },
        district: 'ural',
        textSize: 12
    },
    {
        city: 'Челябинск',
        pos: {
            x: 318.5,
            y: 362.58
        },
        district: 'ural',
        textSize: 14
    },
    {
        city: 'Тюмень',
        pos: {
            x: 411.5,
            y: 362.58
        },
        district: 'ural',
        textSize: 14
    },
    {
        city: 'Омск',
        pos: {
            x: 458.5,
            y: 473.74
        },
        district: 'sibir',
        textSize: 14
    },
    {
        city: 'Новосибирск',
        pos: {
            x: 511,
            y: 453.74
        },
        district: 'sibir',
        textSize: 12
    },
    {
        city: 'Томск',
        pos: {
            x: 577.5,
            y: 457.74
        },
        district: 'sibir',
        textSize: 14,
        reverse: true
    },
    {
        city: 'Красноярск',
        pos: {
            x: 634.5,
            y: 455.74
        },
        district: 'sibir',
        textSize: 12
    },
    {
        city: 'Иркутск',
        pos: {
            x: 690.5,
            y: 488.74
        },
        district: 'sibir',
        textSize: 14
    },
    {
        city: 'Хабаровск',
        pos: {
            x: 984.5,
            y: 496.74
        },
        district: 'far_east',
        textSize: 16,
        reverse: true
    },
    {
        city: 'Владивосток',
        pos: {
            x: 971.63,
            y: 574
        },
        district: 'far_east',
        textSize: 16
    }
]

export { officesData, type IDistrictValues }

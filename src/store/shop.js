export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                descr: 'Nike Red Man by Nike is a Woody Spicy fragrance for men. Nike Red Man was launched in 2015. Top notes are Lime, Lemon and Marigold; middle notes are Cinnamon, Black Cardamom, Peru Balsam and Walnut; base notes are Palisander Rosewood, Patchouli and Ebony.',
                img: require('../assets/shop-img/1.png')
            },
            {
                id: 2,
                title: 'Nike Default',
                descr: 'Nike Red Man by Nike is a Woody Spicy fragrance for men. Nike Red Man was launched in 2015. Top notes are Lime, Lemon and Marigold; middle notes are Cinnamon, Black Cardamom, Peru Balsam and Walnut; base notes are Palisander Rosewood, Patchouli and Ebony.',
                img: require('../assets/shop-img/4.png')
            },
            {
                id: 3,
                title: 'Nike Green',
                descr: 'Nike Red Man by Nike is a Woody Spicy fragrance for men. Nike Red Man was launched in 2015. Top notes are Lime, Lemon and Marigold; middle notes are Cinnamon, Black Cardamom, Peru Balsam and Walnut; base notes are Palisander Rosewood, Patchouli and Ebony.',
                img: require('../assets/shop-img/7.png')
            },
            {
                id: 4,
                title: 'Nike Street',
                descr: 'Nike Red Man by Nike is a Woody Spicy fragrance for men. Nike Red Man was launched in 2015. Top notes are Lime, Lemon and Marigold; middle notes are Cinnamon, Black Cardamom, Peru Balsam and Walnut; base notes are Palisander Rosewood, Patchouli and Ebony.',
                img: require('../assets/shop-img/10.png')
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList (state) {
            return state.shopList
        }
    }
}
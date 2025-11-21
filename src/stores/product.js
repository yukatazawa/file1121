import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'リンゴ',
        price: 150,
        quantity: 0,
        description: '新鮮で甘い青森県産のリンゴです。',
        image: 'https://i.gyazo.com/33190ef83fbcba1a1adc62cf75a8c21a.png'
      },
      {
        id: 2,
        name: 'バナナ',
        price: 120,
        quantity: 0,
        description: '朝食やおやつにぴったりのバナナ。',
        image: 'https://i.gyazo.com/8bc6124e09555f55cf860cb5a57d36d9.png'
      },
      {
        id: 3,
        name: 'みかん',
        price: 100,
        quantity: 0,
        description: '冬といえばコタツにみかん！甘酸っぱさが特徴です。',
        image: 'https://i.gyazo.com/0ca2ff93417509680735f9a0a9ff7073.png'
      }
    ]
  })
})
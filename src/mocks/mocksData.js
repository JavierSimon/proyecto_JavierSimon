const productos = [
    {
        id: '01',
        name: 'random1',
        category: 'nuevos',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
        price: 75,
        img: 'https://picsum.photos/200',
        stock: 5,
    },
    { id: '02', name: 'random2', category: 'nuevos', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 70, img: 'https://picsum.photos/201', stock: 15 },
    { id: '03', name: 'random3', category: 'nuevos', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 100, img: 'https://picsum.photos/202', stock: 7 },
    { id: '04', name: 'random4', category: 'oferta', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 75, img: 'https://picsum.photos/203', stock: 3 },
    { id: '05', name: 'random5', category: 'oferta', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 90, img: 'https://picsum.photos/204', stock: 10 },
    { id: '06', name: 'random6', category: 'oferta', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 50, img: 'https://picsum.photos/205', stock: 4 },
    { id: '07', name: 'random7', category: 'vendidos', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 50, img: '/img/logo192.png', stock: 4 },
    { id: '08', name: 'random8', category: 'vendidos', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 50, img: 'https://i.postimg.cc/qvwMmrH0/6mhmii.jpg', stock: 4 },
    { id: '09', name: 'random9', category: 'vendidos', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", price: 50, img: '', stock: 4 },
]

 export const data = new Promise(((resolve, reject) => {
    let condition = true

    setTimeout(() => {
        if (condition) {
            resolve(productos)
        } else {
            reject('salio mal no hay sushi')
        }
    }, 3000)

}))
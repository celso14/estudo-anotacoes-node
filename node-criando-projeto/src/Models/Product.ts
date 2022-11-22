type Product = {
    title: string,
    price: number
}


const data: Product[] = [
    {title: 'produto X', price:10},
    {title: 'produto Y', price:15},
    {title: 'produto Z', price:20},
    {title: 'produto G', price:5},
];


export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => {
            if(item.price >= price ){
                return true;
            }
            else {
                return false;
            }
        });
    },
}

import items from '../Data/items.json';

export const calcTotal = (cartData: any) => {
    let total = 0;

    Object.keys(cartData).forEach((item) => {
        total += getTotalOfItem(item, cartData[item]);
    });

    return total;
};

const getTotalOfItem = (itemName: string, quantity: number) => {
    const itemInfo = items.items.find((item) => item.name === itemName);

    if (!itemInfo) {
        return 0;
    }

    switch (itemInfo.discount) {
        case 'Buy 2 for 100':
            return twoForHundred(itemInfo.price, quantity);
        case 'Buy 2 get 1 free':
            return twoGetOneFree(itemInfo.price, quantity);
        default:
            return itemInfo.price * quantity;
    }
};

const twoForHundred = (price: number, quantity: number) => {
    const pairs = Math.floor(quantity / 2);
    const pairPrice = pairs * 100;
    const singlePrice = (quantity % 2) * price;

    return pairPrice + singlePrice;
};

const twoGetOneFree = (price: number, quantity: number) => {
    let extra = Math.floor(quantity / 3)
    return (quantity - extra) * price
};
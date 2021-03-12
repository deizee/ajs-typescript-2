import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        return this._items.reduce((acc, prev) => acc += prev.price, 0);
    }

    totalDiscountPrice(discount: number): number {
        return this._items.reduce((acc, prev) => acc += prev.price, 0) * discount/100;
    }

    deleteItemById(id: number): void {
        const idx = this._items.findIndex((el) => el.id == id);
        this._items.splice(idx, 1);
    }
}

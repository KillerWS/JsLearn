interface Product {
    id: string;
    name: string;
    price: number;
}

interface CartItem extends Product {
    quantity: number;
}

interface ShoppingCart {
    items: CartItem[];
    addItem(item: CartItem): void;
    removeItem(itemId: string): void;
    getTotalPrice(): number;
}

class BasicShoppingCart implements ShoppingCart {
    items: CartItem[] = [];

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    removeItem(itemId: string): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

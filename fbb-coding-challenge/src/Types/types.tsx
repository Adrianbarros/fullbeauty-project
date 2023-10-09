export interface ItemType {
    name: string;
    price: number;
    quantity: number;
    discount?: string;

}

export interface CartItem {
    name?: string;
    quantity?: number;
}

export interface Props {
    items: ItemType[];
    add: any;
    next: any;
}

export interface ShippingInfo {
    name: string;
    address: string;
    email: string;
    phone: string;

}

export interface ShippingProps {
    data: ShippingInfo;
    handleChange: any;
    next: any;
}

export interface BillingInfo {
    name: string;
    cardNumber: string;
    address: string;
}

export interface BillingProps {
    data: BillingInfo;
    handleChange: any;
    next: any;
}
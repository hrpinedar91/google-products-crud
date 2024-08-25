import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from '@/components/ui/use-toast'; 
import { ProductType } from '@/types/product';

interface CartItem extends ProductType {
  quantity: number; // Agregamos la cantidad de productos
}

interface CartStore {
  items: CartItem[];
  addItem: (data: ProductType) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void; 
  removeAll: () => void;
  getTotalPrice: () => number;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.ID_producto === data.ID_producto);

        if (existingItem) {
            set({
                items: currentItems.map(item =>
                    item.ID_producto === data.ID_producto
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            });
            toast({
                title: "Cantidad aumentada 🛍️"
            });
        } else {
            set({
                items: [...get().items, { ...data, quantity: 1 }]
            });
            toast({
                title: "Producto añadido al carrito 🛍️"
            });
        }
    },
    increaseQuantity: (id: string) => {
        set({
            items: get().items.map(item =>
                item.ID_producto === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        });
    },
    decreaseQuantity: (id: string) => {
        set({
            items: get().items.map(item =>
                item.ID_producto === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        });
    },
    removeItem: (id: string) => {
        set({ items: get().items.filter(item => item.ID_producto !== id) });
        toast({
          title: "Producto eliminado del carrito 🗑️"
        });
    },
    removeAll: () => set({ items: [] }),

    getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (parseFloat(item.Precio) * item.quantity), 0);
    }
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}));

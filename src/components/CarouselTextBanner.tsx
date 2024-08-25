"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío en 24 a 48 horas",
        description: "Como cliente VIP, tus envios en 24 a 48 horas. Obtén más información y únete",
        link: "#!"
    },
    {
        id: 2,
        title: "Consigue hasta un -25% en compras superiores a 500 mil pesos",
        description: "−10 % en compras superiores a 100 mil pesos,. Obtén más información y únete",
        link: "#",
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Como cliente, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos. Obtén más información y únete",
        link: "#",
    },
    {
        id: 4,
        title: "Comprar novedades",
        description: "Todas las novedades al 50% de descuento",
        link: "#",
    },
    {
        id: 5,
        title: "Pago contra entrega",
        description: "Paga al recibir tu pedido",
        link: "#",
    }
]


const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary p-2.5">
            <Carousel className="w-full max-w-4xl mx-auto"
               plugins={[
                Autoplay({
                    delay: 4500
                })
            ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        // <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <CarouselItem key={id}>
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap font-bold    ">{title}</p>
                                        <p className="sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;
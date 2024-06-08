import { Lusitana, Nunito, Open_Sans} from "next/font/google";

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ["700", "400"]
})

export const nunito = Nunito({
    subsets : ["latin"],
    weight : ["500", "700", "900"]
})

export const opensans = Open_Sans({
    subsets : ["latin"],
    weight : ["400", "700", "800", "300"]
})
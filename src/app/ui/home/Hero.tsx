'use client';

import { Button } from "@/components/ui/button";
import Notes from "../../../../public/icons/musicalnotes.svg"
import { Amatic_SC, Cookie } from "next/font/google";


const amatic = Amatic_SC({
    subsets: ['latin'],
    weight: ['700'],
});

const cookie = Cookie({
    subsets: ['latin'],
    weight: ['400'],
})

const Hero = () => {
    return (

        <section className="flex flex-col gap-3 py-20">
            <section className="flex">
            <div>
                <span className={`${amatic.className} text-3xl text-primary`}>projeto <br /></span>
                <span className={`${amatic.className} text-4xl`}>melodias</span>
                <h1 className={`${amatic.className} text-6xl`}>DA INFANCIA</h1>
                <span> <br />👧👧🏿👦🏽👦🏽 🎶🎵</span>
            </div>

            </section>
         

            <div className="flex flex-col gap-4">
                <p className="font-bold">
                    Em um mundo onde as notas musicais ecoam como mensagens de esperança e expressão, nasce o projeto social "Melodias da Infância".
                </p>
            
                <Button >Saber mais</Button>
            </div>

        </section>

    );
}

export default Hero;
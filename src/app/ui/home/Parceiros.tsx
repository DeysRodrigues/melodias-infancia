import TitleH2 from "@/app/components/ui/titleH2";
import Image from "next/image";

const Parceiros = () => {
    return (

        <section>
            <TitleH2 title="Parceiros"></TitleH2>
            <div>
                <Image
                    src="/images/parceiros-jf.png"
                    alt="Logo da prefeitura de José de Freitas"
                    width={300}
                    height={300}
                    style={{ width: 'auto', height: '100%' }}
                    className="object-cover"
                />
            </div>
        </section>

    );
}

export default Parceiros;
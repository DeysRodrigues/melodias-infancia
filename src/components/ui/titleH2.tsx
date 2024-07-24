import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
    weight: ['400', '700'],
    subsets: ['latin'],
});

// Definindo a interface das props para o componente TitleH2
interface TitleH2Props {
    title: string;
}

const TitleH2: React.FC<TitleH2Props> = ({ title }) => {
    return (
        <div className={`${amatic.className} text-4xl font-bold w-full text-center`}>
            <h2>
                {title}
            </h2>
        </div>

    );
};

export default TitleH2;
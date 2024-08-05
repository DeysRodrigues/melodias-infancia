import Image from "next/image";
import { Amatic_SC } from "next/font/google";
import { Card, CardContent, CardHeader } from "./card";

const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
});


interface CardPessoaProps {
  linkPessoa: string;
  altPessoa: string;
  redeSocial: React.ReactNode;
  iconBonus: React.ReactNode;
  namePessoa: string;
  titlePessoa: string;
  descriptionPessoa: string;
}


const CardPessoa: React.FC<CardPessoaProps> = ({
  linkPessoa,
  altPessoa,
  redeSocial,
  iconBonus,
  namePessoa,
  titlePessoa,
  descriptionPessoa,
}) => {
  return (

    <Card className=" flex flex-col  text-center p-2 mb-4 md:w-[27rem] md:flex-wrap ">
      <div className="flex items-center justify-between px-4">
        <div className="w-36 h-36 rounded-full overflow-hidden relative">
          <Image
            src={linkPessoa}
            alt={altPessoa}
            fill
            sizes="(max-width: 144px) 100vw, 36px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
       
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            {redeSocial}
          </span>
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            {iconBonus}
          </span>

        </div>
      </div>
      <div className="flex flex-col">
        <CardHeader>
          <div className="text-start">
            <h3 className="text-[1.3rem] font-bold">
              {namePessoa}
            </h3>
            <span className="font-bold text-xl text-primary">{titlePessoa}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className={`${amatic.className} font-bold text-[1.2rem]  text-start`}>
            {descriptionPessoa}
          </p>
        </CardContent>
      </div>

    </Card>
  );
}

export default CardPessoa;
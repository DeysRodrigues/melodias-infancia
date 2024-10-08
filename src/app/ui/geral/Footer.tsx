import TitleH2 from "@/app/components/ui/titleH2";
import { url } from "inspector";
import Link from "next/link";

const Footer
    = () => {
        return (
            <section className="flex flex-col gap-6 p-7  bg-card rounded-2xl mb-2 ">
                <TitleH2 title="  Melodias da Infancia"></TitleH2>
                <div>

                    <address className="flex justify-between text-center">
                        <div className="text-start">
                            <span>Endereco</span> <br />
                            Rua José de Sampaio Almeida, 643<br />
                            Bairro Centro,    CEP: 12345-678<br />
                            José de Freitas<br />
                            Piauí<br />
                        </div>

                        <div>
                            <span>Contato</span> <br />
                            <a href="mailto:joao.silva@example.com">joao.silva@example.com</a><br />
                            <a href="tel:+5511123456789">+55 (11) 1234-5678</a> <br />

                        </div>

                    </address>

                </div>
                <div>
                    <div className="flex justify-between">
                        <ul>
                            <li>Parceiros</li>
                            <li>Sobre</li>
                            <li>Contato</li>
                        </ul>

                        <ul>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>LGPD</li>

                        </ul>

                        <ul>
                            <li>Política de Privacidade</li>
                            <li>Termos de Uso</li>
                            <li>Política de Cookies
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                 
                    <p>©️Todos os direitos reservados Fundação ProArte, 2024.</p>
                    <span className="text-sm"> <Link href="https://www.deys.space">Feito com ❤️ by <span className="text-primary">Deys Rodrigues</span> </Link>   </span>
                    </div>
            </section>
        );
    }

export default Footer
    ;
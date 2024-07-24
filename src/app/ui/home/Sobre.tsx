
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


const Sobre: React.FC = () => {
    return (
        <section className="bg-neutral-50 p-4 rounded-md">
            <Tabs defaultValue="sobre" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="sobre">Sobre</TabsTrigger>
                    <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
                </TabsList>
                <TabsContent value="sobre">
                    <div className="px-2">
                        <h2 className="text-2xl w-full text-center">Sobre </h2>
                        <p>
                            Melodias da Infância é um projeto inovador que busca transformar a realidade de crianças e adolescentes das escolas públicas de José de Freitas através da arte. Este projeto visa proporcionar uma experiência enriquecedora, promovendo a inclusão social e a diversidade cultural por meio de oficinas de artes integradas.
                        </p>
                    </div>
                </TabsContent>
                <TabsContent value="objetivos">
                    <div>
                        <h2 className="text-2xl w-full text-center">Objetivos </h2>
                        <p>
                            O principal objetivo do "Melodias da Infância" é promover a transformação através da arte, criando um ambiente onde os alunos possam expressar-se e descobrir novas habilidades. Ao construir pontes de diálogo entre diferentes expressões artísticas e culturais, o projeto visa resgatar e valorizar a cultura local, promovendo a inclusão e acessibilidade para todos os participantes.

                            Além disso, o projeto busca democratizar o acesso à arte, oferecendo oportunidades que muitas vezes não estão disponíveis para a comunidade escolar de José de Freitas. Com oficinas mediadas por profissionais capacitados, "Melodias da Infância" tem como metas estimular a criatividade, desenvolver competências artísticas e culturais, e contribuir para a formação de cidadãos críticos e conscientes.

                            O projeto também atua na esfera psicoeducativa através de um grupo dedicado a promover discussões e atividades sobre temas pertinentes à realidade dos alunos, abordando questões como inclusão, diversidade e cidadania. Este componente visa apoiar o desenvolvimento emocional e social dos participantes, fortalecendo a capacidade de enfrentamento de desafios pessoais e coletivos.

                            Junte-se a nós nessa jornada de transformação e descubra o poder da arte em mudar vidas! </p>
                    </div>
                </TabsContent>
            </Tabs>
        </section>);
}

export default Sobre;
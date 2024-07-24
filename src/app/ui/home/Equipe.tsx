"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardPessoa from "@/components/ui/cardPessoa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleH2 from "@/components/ui/titleH2";
import { Guitar, Handshake, Instagram, Linkedin, MessageCircleMore } from "lucide-react";
import { useState } from "react";
import { people } from '@/lib/data-pessoa'

const Equipe = () => {

    // const [codersData, setEquipeData] = useState([
    //     {
    //         id: 1,
    //         name: 'Deys Rodrigues 🪴🌵',
    //         title: 'Dev Front-end',
    //         description: ' "Programadora, Ilustradora e estudante de uix design , criadora do site do projeto e fã resoluta de piano classico e doce de leite." ',
    //         link: '/images/deys.jpg',
    //         alt: 'Foto de Deys Rodrigues',
    //         iconInstrumento: <Guitar color="#7B81D1" />,
    //         redeSocial: <Instagram color="#7B81D1" />,
    //         iconBonus: <Linkedin color="#7B81D1" />,
    //     },

    //     // Adicione mais dados fictícios aqui
    // ]);
    // const [professorData, setEquipeProfessor] = useState([
    //     {
    //         id: 1,
    //         name: 'Lucas Rafael 🎸🎸',
    //         title: 'Professor de música',
    //         description: ' "Artista, musico, gosto de jogos em geral, trabalho como luthier e professor de musica no projeto. Gosto de todo tipo de animal que nao queira um pedaco de mim kkkk" ',
    //         link: '/images/pessoas/lucas.jpg',
    //         alt: 'Foto de Lucas Rafael',
    //         iconInstrumento: <Guitar color="#7B81D1" />,
    //         redeSocial: <Instagram color="#7B81D1" />,
    //         iconBonus: <Linkedin color="#7B81D1" />,
    //     },
    //     {
    //         id: 1,
    //         name: 'Marcos Ribeiro 🎶🎸',
    //         title: 'Professor de música',
    //         description: ' "Sou apaixonado por música principalmente da década de 80, aficionado por cinema de quadrinhos e ficção científica, e botafoguense de alma e coração." ',
    //         link: '/images/pessoas/marcos.jpg',
    //         alt: 'Foto de Marcos Ribeiro',
    //         iconInstrumento: <Guitar color="#7B81D1" />,
    //         redeSocial: <Instagram color="#7B81D1" />,
    //         iconBonus: <Linkedin color="#7B81D1" />,
    //     },
    //     // Adicione mais dados fictícios aqui
    // ]);
    // const [gestaoData, setGestaoProfessor] = useState([
    //     {
    //         id: 1,
    //         name: 'Waldir Santos Neto ❤️🎶',
    //         title: 'Coordenador do projeto & professor de música voluntário.',
    //         description: 'Sou um multiartista licenciado em Música pela Universidade Federal do Piauí (UFPI). Apaixonado pela mobilização coletiva e social, acredito profundamente no poder transformador da arte para alterar e enriquecer a realidade em que está inserida. ',
    //         link: '/images/pessoas/waldir.jpg',
    //         alt: 'Foto de Waldir dos Santos',
    //         iconInstrumento: <Guitar color="#7B81D1" />,
    //         redeSocial: <Instagram color="#7B81D1" />,
    //         iconBonus: <Linkedin color="#7B81D1" />,
    //     },
    //     {
    //         id: 2,
    //         name: 'Francisco Carlos Santos (Mimi) 🎸👨🏾‍🏫',
    //         title: 'Diretor do projeto & professor de música volúntario.',
    //         description: 'Sou professor de música com mais de 30 anos de experiência em projetos sociais e atualmente presidente da Fundação Cultural Proarte, instituição responsável pelo nosso projeto. Como um grande mobilizador cultural na sociedade de José de Freitas, dedico minha vida a transformar a comunidade através da arte. ',
    //         link: '/images/pessoas/mimi.jpg',
    //         alt: 'Foto de Waldir dos Santos',
    //         iconInstrumento: <Guitar color="#7B81D1" />,
    //         redeSocial: <Instagram color="#7B81D1" />,
    //         iconBonus: <Linkedin color="#7B81D1" />,
    //     },
    //     // Adicione mais dados fictícios aqui
    // ]);
    const filterProf = people.filter(person => person.tags.includes('professor'));
    const filterGest = people.filter(person => person.tags.includes('gestao'));
    const filterDev = people.filter(person => person.tags.includes('dev'));
    const filterPsi = people.filter(person => person.tags.includes('psicologo'));

    return (
        <section className="flex flex-col gap-3">
            <TitleH2 title="Equipe"></TitleH2>
            <Tabs defaultValue="gestao" className="w-full">
                <TabsList className="w-full flex overflow-x-scroll whitespace-nowrap">
                    <TabsTrigger value="gestao">Gestão</TabsTrigger>
                    <TabsTrigger value="professores">Professores</TabsTrigger>
                    <TabsTrigger value="psicologos">Psicologos</TabsTrigger>
                    <TabsTrigger value="devs">Devs</TabsTrigger>
                </TabsList>
                <div>
                    <TabsContent value="gestao">
                    {filterGest.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}
                             
                             redeSocial={<Instagram/>}
                             iconBonus={<Linkedin />}
                         />
                        ))}
                    </TabsContent>
                    <TabsContent value="professores">
                    {filterProf.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}
                             redeSocial={<Linkedin />}
                             iconBonus={<Linkedin />}
                         />
                        ))}
                    </TabsContent>
                    <TabsContent value="psicologos">
                    {filterPsi.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}
                             
                             redeSocial={<Linkedin />}
                             iconBonus={<Linkedin />}
                         />
                        ))}
                    </TabsContent>
                    <TabsContent value="devs">
                    {filterDev.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}        
                             redeSocial={<Linkedin />}
                             iconBonus={<Linkedin />}
                         />
                        ))}
                    </TabsContent>

                </div>




            </Tabs>

        </section>
    );
}

export default Equipe;
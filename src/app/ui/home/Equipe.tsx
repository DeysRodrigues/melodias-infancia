"use client"

import CardPessoa from "@/app/components/ui/cardPessoa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import TitleH2 from "@/app/components/ui/titleH2";
import {Instagram, Linkedin,} from "lucide-react";
import { people } from '@/lib/data-pessoa'

const Equipe = () => {

    const filterProf = people.filter(person => person.tags.includes('professor'));
    const filterGest = people.filter(person => person.tags.includes('gestao'));
    const filterDev = people.filter(person => person.tags.includes('dev'));
    const filterPsi = people.filter(person => person.tags.includes('psicologo'));

    return (
        <section className="flex flex-col gap-3" id="equipe">
            <TitleH2 title="Equipe"></TitleH2>
            <Tabs defaultValue="gestao" className="w-full">
                <TabsList className="w-full flex overflow-x-scroll whitespace-nowrap md:overflow-auto">
                    <TabsTrigger value="gestao">Gestão</TabsTrigger>
                    <TabsTrigger value="professores">Professores</TabsTrigger>
                    <TabsTrigger value="psicologos">Psicologos</TabsTrigger>
                    <TabsTrigger value="devs">Devs</TabsTrigger>
                </TabsList>
                <div >
                    <TabsContent value="gestao" className="md:flex gap-3 flex-wrap justify-center">
                    {filterGest.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}
                             linkSocial={person.socialLink}
                             linkSocial2={person.socialLink2}
                            
                         />
                        ))}
                    </TabsContent>
                    <TabsContent value="professores" className="md:flex gap-3 flex-wrap justify-center">
                    {filterProf.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}
                             linkSocial={person.socialLink}
                             linkSocial2={person.socialLink2}
                            
                         />
                        ))}
                    </TabsContent>
                    <TabsContent value="psicologos" className="md:flex gap-3 flex-wrap justify-center">
                    {filterPsi.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}
                             
                             linkSocial={person.socialLink}
                             linkSocial2={person.socialLink2}
                            
                         />
                        ))}
                    </TabsContent>
                    <TabsContent value="devs" className="md:flex gap-3 flex-wrap justify-center">
                    {filterDev.map((person) => (
                             <CardPessoa
                             key={person.id}
                             namePessoa={person.name}
                             titlePessoa={person.role}
                             descriptionPessoa={person.bio}
                             linkPessoa={person.imageLink}
                             altPessoa={person.alt}        
                             linkSocial={person.socialLink}
                             linkSocial2={person.socialLink2}
                            
                         />
                        ))}
                    </TabsContent>

                </div>




            </Tabs>

        </section>
    );
}

export default Equipe;
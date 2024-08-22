import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/app/components/ui/menubar"
import ButtonTheme from "./buttonTheme";
import { Instagram } from "lucide-react";
import Link from "next/link";


const Header = () => {

    return (
        <header className=" flex justify-between p-3">

            <Menubar className="">
                <MenubarMenu>
                    <MenubarTrigger> <Link href="/#home">
                        Home</Link> </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger>
                        <Link href="/#sobre">
                            Sobre
                        </Link>
                    </MenubarTrigger>

                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger> <Link href="/#equipe">
                        Equipe
                    </Link></MenubarTrigger>

                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger>Mais</MenubarTrigger>
                    <MenubarContent>

                        <MenubarItem>Contato</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Endereço</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Galeria</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Creditos</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>


            </Menubar>
            <div className="flex flex-col gap-2">
                <ButtonTheme></ButtonTheme>
                <span className="rounded-full p-2 bg-white">
                    <Link href="https://www.instagram.com/melodiasdainfancia/">
                        <Instagram strokeWidth={1.25} className="text-primary" />
                    </Link>
                </span>

            </div>

        </header>

    );
}

export default Header;
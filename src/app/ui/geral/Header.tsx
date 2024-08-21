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


const Header = () => {

    return (
        <header className=" flex justify-between p-3">

            <Menubar className="">
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger>Sobre</MenubarTrigger>

                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger>Equipe</MenubarTrigger>

                </MenubarMenu>
                
                <MenubarMenu>
                    <MenubarTrigger>Mais</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>


            </Menubar>
            <div className="flex flex-col gap-2">
                <ButtonTheme></ButtonTheme>

                <span className="rounded-full p-2 bg-white">
                    
                    <Instagram strokeWidth={1.25} className="text-primary"/>
                </span>
            </div>



        </header>

    );
}

export default Header;
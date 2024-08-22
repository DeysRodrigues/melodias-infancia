"use client"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/app/components/ui/resizable"
import TitleH2 from "@/app/components/ui/titleH2";
import Image from "next/image";
import { useState } from "react";
import { Modal } from 'react-responsive-modal';

const Galeria: React.FC = () => {

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setScrollPosition(window.scrollY); // Armazena a posição atual da página
        setOpen(true);

    };

    const closeModal = () => {
        setOpen(false);
        setSelectedImage('');
        document.body.style.overflow = ''; // Permite a rolagem da página quando o modal é fechado
        window.scrollTo(0, scrollPosition); // Rola a página de volta para a posição armazenada
    };

    return (
        <section className="flex flex-col gap-3">

            <TitleH2 title="Galeria de fotos"></TitleH2>

            <ResizablePanelGroup direction="horizontal" className="rounded-lg border">

                <ResizablePanel defaultSize={50}>
                    <div className="relative w-full cursor-pointer h-[250px]" onClick={() => openModal('/images/projeto-01.jpg')}>
                        <Image
                            src="/images/projetos-galery/projeto-01.jpg"        
                            fill
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="seil"
                            priority
                            className="object-cover"
                        />
                    </div>

                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel defaultSize={25}>
                    <ResizablePanelGroup direction="vertical">

                        <ResizablePanel defaultSize={50}>
                            <div className="relative w-full h-full cursor-pointer" onClick={() => openModal('/images/projeto-02.jpg')}>
                                <Image
                                    src="/images/projetos-galery/projeto-02.jpg"
                                    fill
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt="seil"
                                    className="object-cover"
                                />
                            </div>
                        </ResizablePanel>

                        <ResizableHandle />

                        <ResizablePanel defaultSize={50}>
                            <div className="relative w-full h-full cursor-pointer" onClick={() => openModal('/images/projeto-03.jpg')}>
                                <div className="absolute inset-0">
                                    <Image
                                        src="/images/projetos-galery/projeto-03.jpg"
                                        fill
                                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt="seil"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </ResizablePanel>

                        <ResizableHandle />

                    </ResizablePanelGroup>
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel defaultSize={25}>
                    <ResizablePanelGroup direction="vertical">

                        <ResizablePanel defaultSize={50}>
                            <div className="relative w-full h-full cursor-pointer" onClick={() => openModal('/images/projetos-galery/projeto-04.jpg')}>
                                <Image
                                    src="/images/projetos-galery/projeto-04.jpg"
                                    fill
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt="seil"
                                    className="object-cover"
                                />
                            </div>
                        </ResizablePanel>

                        <ResizableHandle />

                        <ResizablePanel defaultSize={50}>
                            <div className="relative w-full h-full cursor-pointer" onClick={() => openModal('/images/projetos-galery/projeto-05.jpg')}>
                                <Image
                                    src="/images/projetos-galery/projeto-05.jpg"
                                    fill
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt="seil"
                                    className="object-cover"
                                />
                            </div>
                        </ResizablePanel>

                        <ResizableHandle />

                    </ResizablePanelGroup>
                </ResizablePanel>

            </ResizablePanelGroup>


            {selectedImage && (
                <Modal open={open} onClose={closeModal} center classNames={{ modal: 'modal-style' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-50"
                        >
                            X
                        </button>
                        <div className="w-full h-full bg-white">
                            <Image
                                src={selectedImage}
                                layout="fill"
                                objectFit="contain"
                                alt="Expanded view"
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </section>


    );
}

export default Galeria;

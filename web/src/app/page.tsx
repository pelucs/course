import { FAQ } from "./home/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "./home/Pricing";
import { Feedbacks } from "./home/Feedbacks";
import { BadgeCheck, BookText, Headphones, MonitorPlay, MoveRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import shopify from '../assets/shopify.svg';
import salesforce from '../assets/salesforce.svg';
import amazon from '../assets/amazon.svg';
import google from '../assets/google.svg';
import doodle from '../assets/doodle.svg';
import whatsapp from '../assets/whatsapp-logotipo.svg';
import whatsappLogo from '../assets/whatsapp-logo.svg';
import { RedirectClient } from "@/components/RedirectClient";
import { cookies } from "next/headers";

export default function Home() {

  const isAuthenticated = cookies().has('token');

  if(isAuthenticated){
    return <RedirectClient to="/app"/>
  }

  return (
    <main className="">
      <Header/>

      <Link href="/" className="w-12 h-12 rounded flex items-center justify-center bg-green-500 hover:bg-green-600
      transition-colors fixed bottom-5 right-5 z-10">
        <Image src={whatsappLogo} alt=""/>
      </Link>

      <div className="flex flex-col items-center">
        <div className="min-h-[80vh] flex items-center flex-col justify-center space-y-8 text-center">
          <h1 className="text-6xl font-bold">
            Construa uma carreira de sucesso <br/> em design e conquiste os <br/> melhores projetos.
          </h1>

          <p className="text-muted-foreground leading-tight">
            A plataforma completa pra você aprender design do zero e no <br/> 
            seu ritmo, com aulas super didáticas e suporte técnico para tirar suas dúvidas.
          </p>

          <Link href="/" className="py-3 px-4 flex items-center gap-2 rounded bg-violet-500 uppercase font-semibold">
            Quero assinar agora 

            <MoveRight className="w-4 h-4"/>
          </Link>
        </div>

        <iframe 
          width="880" 
          height="495" 
          allowFullScreen
          frameBorder="0" 
          title="YouTube video player" 
          src="https://www.youtube.com/embed/GPXwpSCU1n8?si=CBk74_aXymQlqK4V&amp;controls=0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        />

        <div className="py-32 flex flex-col items-center gap-20 border-b border-secondary/50">
          <span className="w-[2px] h-20 rounded-full bg-gradient-to-t from-transparent to-violet-500"/>
          
          <h1 className="text-5xl font-bold text-center">
            Por que escolher a <br/>
            DesignerPro?
          </h1>

          <div className="px-0 md:px-20 grid grid-cols-4 gap-14">
            <div className="flex flex-col items-start">
              <BadgeCheck absoluteStrokeWidth className="w-10 h-10 text-violet-500"/>

              <h1 className="mt-2 font-semibold text-2xl">Formação completa</h1>

              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis illo doloribus fugit.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <BookText absoluteStrokeWidth className="w-10 h-10 text-violet-500"/>

              <h1 className="mt-2 font-semibold text-2xl">Didática simples</h1>

              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis illo doloribus fugit.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <MonitorPlay absoluteStrokeWidth className="w-10 h-10 text-violet-500"/>

              <h1 className="mt-2 font-semibold text-2xl">Aulas avançadas</h1>

              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis illo doloribus fugit.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <Headphones absoluteStrokeWidth className="w-10 h-10 text-violet-500"/>

              <h1 className="mt-2 font-semibold text-2xl">Suporte técnico</h1>

              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum <br/>
                perspiciatis illo doloribus fugit.
              </p>
            </div>
          </div>
        </div>

        <div className="py-32 border-b border-secondary/50">
          <h1 className="text-5xl font-bold text-center">
            Empresas que contratam <br/> 
            nossos alunos
          </h1>

          <div className="mt-20 grid grid-cols-5 gap-10">
            <Image src={google} width={600} className="grayscale" alt=""/>
            <Image src={amazon} width={600} className="grayscale" alt=""/>
            <Image src={whatsapp} width={600} className="grayscale" alt=""/>
            <Image src={shopify} width={600} className="grayscale" alt=""/>
            <Image src={salesforce} width={600} className="grayscale" alt=""/>
          </div>
        </div>

        <Pricing/>

        <div className="w-full py-32 px-7 grid grid-cols-2 gap-10 border-b border-secondary/50">
          <div className="flex items-center justify-center">
            <Image src={doodle} width={600} alt=""/>
          </div>
          
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold">
              Mais de <span className="text-violet-500">14 mil</span> <br/>
              alunos conectados
            </h1>

            <p className="w-full max-w-lg mt-2 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dicta est, laboriosam nobis doloribus 
              eum odit veritatis quis quos nulla repellendus atque, unde nostrum temporibus commodi. 
              Voluptates corporis rem ducimus.
            </p>

            <Link href="/" className="w-fit mt-10 py-3 px-4 flex items-center gap-2 rounded bg-violet-500 uppercase font-semibold">
              Quero assinar agora 

              <MoveRight className="w-4 h-4"/>
            </Link>
          </div>
        </div>
          
        <Feedbacks/>
        <FAQ/>
      </div>

      <Footer/>
    </main>
  )
}
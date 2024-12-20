import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>YOSHIE!</title>
        <meta name="description" content="yoshie dvd yoshie dvd yoshie dvd yoshie dvd yoshie dvd" />
        <link rel="icon" href="/yoshie.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#4c418a] to-[#0534b7]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-2xl font-bold tracking-tighter text-[hsl(340,50%,91%)] sm:text-[5rem]">
            yoshie go boing boing
          </h1>
          <div className="bg-[hsl(0,0%,3%)] w-[48rem] h-[32rem] border-[hsl(0,0%,9%)] border-2">
            <motion.div
              className="bg-[hsl(0,0%,3%)] w-32 h-32 border-[hsl(0,0%,9%)] border-2"
              layoutId="yoshie"
              animate={{
                x: [0, 640, 0],
                y: [0, 384, 0],
               }}
              transition={{
                x: {duration: 5, repeat: Infinity, ease: "linear"},
                y: {duration: 7, repeat: Infinity, ease: "linear"}
              }}
              >
              <Image
                src="/static/img/yoshie.jpg"
                width={128}
                height={128}
                alt="yoshie"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

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
          <div className="bg-[hsl(0,0%,3%)] w-72 h-48 md:w-[48rem] md:h-[32rem] outline-[hsl(0,0%,32%)] outline outline-1">
            <motion.div
              className="bg-[hsl(0,0%,3%)] md:h-32 md:w-32 h-12 w-12 outline outline-[hsla(1,86%,49%,0.25)] outline-1"
              layoutId="yoshie"
              animate={{
                x: ["0%", "500%", "0%"],
                y: ["0%", "300%", "0%"],
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
                className="md:h-32 md:w-32 h-12 w-12"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

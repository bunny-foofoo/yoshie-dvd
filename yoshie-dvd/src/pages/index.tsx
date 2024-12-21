import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const funText = (boings: number) => {
  if (boings >= 100) {
    return "yoshie, blink if you need help";
  } else if (boings >= 50) {
    return "yoshie is godlike!";
  } else if (boings >= 35) {
    return "yoshie is unstoppable!";
  } else if (boings >= 25) {
    return "yoshie, dominating!";
  } else if (boings >= 15) {
    return "i wonder if she is tired?";
  } else if (boings >= 10) {
    return "wow! she's on a roll!";
  } else if (boings >= 5) {
    return "she's having fun!";
  } else if (boings >= 3) {
    return "good for her!";
  }
  return "";
}

export default function Home() {

  const [bounces, setBounces] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const addBounce = () => {
    setBounces(bounces + 1);
  };

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
          <p className="text-[hsl(340,50%,91%)] text-lg">
            {bounces === 0 && "yoshie has yet to hit a corner..."}
            {bounces > 0 ? "yoshie has hit a corner " : ""}
            {bounces === 1 && "once." || bounces > 1 && `${bounces} times. `}
            {funText(bounces)}
          </p>
          <div className="bg-[hsl(0,0%,3%)] w-72 h-48 md:w-[48rem] md:h-[32rem] outline-[hsl(0,0%,32%)] outline outline-1 overflow-hidden">
            <motion.div
              className="bg-[hsl(0,0%,3%)] md:h-32 md:w-32 h-12 w-12 outline outline-[hsla(1,86%,49%,0.25)] outline-1 shadow-2xl shadow-[hsla(1,86%,49%,0.05)]"
              layoutId="yoshie"
              animate={{
                x: ["0%", "500%", "0%"],
                y: ["0%", "300%", "0%"],
                rotate: isSpinning ? [360, 0] : 0
              }}
              onUpdate={
                (latest) => {
                  if ((latest.x === "0%" || latest.x === "500%") && (latest.y === "0%" || latest.y === "300%")) {
                    addBounce();

                    // unsure about this approach
                    setIsSpinning(true);
                    setTimeout(() => {
                      setIsSpinning(false);
                    }, 1500);
                  }
                }
              }
              transition={{
                x: {duration: 5, repeat: Infinity, ease: "linear"},
                y: {duration: 7, repeat: Infinity, ease: "linear"},
                rotate: {duration: 1.5, ease: "easeIn"}
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

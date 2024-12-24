import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {

  const [bounces, setBounces] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);

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
      <main className="min-h-screen bg-gradient-to-b from-[#4b8a41] to-[#076914]"
      onClick={(e) => {
        setClickX(e.clientX - 64);
        setClickY(e.clientY - 72);
      }}>
        <div className="container"

        >
          <motion.div
            className="bg-[hsla(0,0%,3%,0)] md:h-32 md:w-32 h-12 w-12 drop-shadow-2xl"
            layoutId="yoshie"
            animate={{
              x: [null, clickX],
              y: [null, clickY],
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
              x: {duration: 1.5, repeat: 0, ease: "linear"},
              y: {duration: 1.5, repeat: 0, ease: "linear"},
              rotate: {duration: 1.5, ease: "easeIn"}
            }}
            >
            <Image
              src="/static/img/yoshiewalk.gif"
              width={128}
              height={128}
              alt="yoshie"
              className="md:h-32 md:w-32 h-12 w-12"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}

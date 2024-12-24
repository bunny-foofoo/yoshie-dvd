import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { set } from "zod";

const randomizeBallPosition = (width: number, height: number) => {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  if (Math.random() > 0.5) {
    x = 0 + x;
  } else {
    x = width - x - 24;
  }

  if (Math.random() > 0.5) {
    y = 0 + y;
  } else {
    y = height - y - 24;
  }

  return [x, y];
}

export default function Home() {

  const [bounces, setBounces] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);

  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(0);

  const addBounce = () => {
    setBounces(bounces + 1);
  };

  return (
    <>
      <Head>
        <title>YOSHIE!</title>
        <meta name="description" content="yoshie go fetch! yoshie go walk walk!" />
        <link rel="icon" href="/yoshie.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b to-[#3d9146] from-[#07690f] overflow-hidden"
      onClick={(e) => {
        setClickX(e.clientX);
        setClickY(e.clientY);
        // random position for the ball up to the current window size
        const [width, height] = randomizeBallPosition(window.innerWidth, window.innerHeight);
        setBallX(width ?? 0);
        setBallY(height ?? 0);
      }}>
          <motion.div
            className="bg-rose-400 rounded-full h-3 w-3 md:h-6 md:w-6 -mx-1 -my-1 md:-mx-3 md:-my-3 absolute shadow-ball outline outline-[hsla(0,0%,10%,0.25)] outline-1"
            layoutId="ball"
            animate={{
              x: [ballX, clickX],
              y: [ballY, clickY]
            }}
            transition={{
              x: {duration: 0.2, repeat: 0, ease: "easeOut"},
              y: {duration: 0.2, repeat: 0, ease: "easeIn"},
            }}
          >
          </motion.div>

          <motion.div
            className="bg-[hsla(0,0%,3%,0)] md:h-32 md:w-32 h-12 w-12 -mx-6 -my-6 md:-mx-16 md:-my-16 drop-shadow-2xl"
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
      </main>
    </>
  );
}

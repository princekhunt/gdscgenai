import Image from 'next/image'
import Script from 'next/script';
import Link from 'next/link'
// import BadgeComponent from '../components/BadgeComponent';
import TableIndex from "@/components/Table.Index";
export default function Home() {
  
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js" strategy="beforeInteractive"></Script>
      <Script id="blast_effect">
        {
                `const duration = 15 * 350,
                animationEnd = Date.now() + duration,
                defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
              
              function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
              }
              
              const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();
              
                if (timeLeft <= 0) {
                  return clearInterval(interval);
                }
              
                const particleCount = 50 * (timeLeft / duration);
              
                // since particles fall down, start a bit higher than random
                confetti(
                  Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    colors: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"], // Google Colors
                    emojis: ["🔥", "🔥", "🔥", "🔥", "🔥", "🎖️", "🎖️", "🎖️"], // Fire Emojis and Medal Emojis
                  })
                );
                confetti(
                  Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    colors: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"], // Google Colors
                    emojis: ["🔥", "🔥", "🔥", "🔥", "🔥", "🎖️", "🎖️", "🎖️"], // Fire Emojis and Medal Emojis
                  })
                );
              }, 250);
                `
        }
      </Script>
      <nav className='w-full  shadow-md relative '>
        <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
          <div className=""><Image src="/assets/cloudLg.png" alt="me" width="40" height="40" /></div>
          <p className=''>
            PPSU - GenAI Study Jams
          </p>
        </div>

        <div className="p-3 flex mob:flex-col m-auto max-w-6xl justify-between items-center">
          <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
            <div className="img w-16 h-1w-16 rounded-full ">
              <Image src="/assets/gdsc-logo.png" alt="me" width="64" height="64" />
            </div>
            <div className="text flex flex-col justify-start items-start">
              <p className="text-base">Google Devloper Student Club</p>
              <p className="text-xs"> P P Savani University</p>

            </div>
          </div>
          <div className="links mob:py-3 flex justify-center items-center space-x-5">

            <Link href="https://www.linkedin.com/company/gdscppsu"><div className="cursor-pointer linkedin">
              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="#3b82f6" /></svg>
            </div></Link>
            <Link href="https://www.instagram.com/gdscppsu/"><div className="cursor-pointer insta">

              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#" /></svg>
            </div></Link>
          </div>
        </div>
      </nav>

      {/* <div className="bg-gray-100 min-h-screen">
      <BadgeComponent    />
    </div> */}

      <TableIndex />

    </>
  )
}

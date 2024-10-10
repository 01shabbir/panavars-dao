import { Button } from "@/components/ui/button"
import Wrapper from "@/components/shared/Wrapper"

import Heroposter from "@/assets/Images/Heroposter.jpg"
import Image from "next/image"
const Hero = () => {
  return (
    <section  >
      <Wrapper >
        <div className="flex items-center">
          {/* left side */}
          <div className="flex-1 ">
            <h4 className="text-teal-800 font-bold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-6xl font-bold text-gray-900 lg:text-red-500">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-6 text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet

              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
              <Button
               variant="outline" className="bg-blue-600 rounded-2xl text-white mt-6">Learn More</Button>

          </div>
          {/* right side */}
          <div className="flex-1" >
            <Image src={Heroposter} alt="heroposter" />
          </div>


        </div>

      </Wrapper>

    </section>

  )
}

export default Hero


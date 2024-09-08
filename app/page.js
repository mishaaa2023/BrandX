import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Planning from "./components/Planning/page";
import Services  from "./components/Services/page";
import Projects  from "./components/Projects/page";
import Contact  from "./components/Contact/page";
import Footer  from "./components/Footer/page";



export default function Home() {
  return (
    
  <>

<Navbar/>
<Hero/>
<br/>
<About/>
<br/>
<Planning/>
<br/>
<Services/>
<br/>
<Projects/>
<br/>
<Contact/>
<br/>
<Footer/>
    </>

  );
}

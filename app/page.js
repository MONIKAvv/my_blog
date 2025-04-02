
import PopularBlog from "@/components/PopularBlog";
import Testimonial from "@/components/Testimonial";
import Tophome from "@/components/Tophome";
import TopProject from "@/components/TopProject";

export default function Home() {
  return (
   <main>
   
      <Tophome/>
      <TopProject/>
      <Testimonial/>
      <PopularBlog/>
    
   </main>
  );
}

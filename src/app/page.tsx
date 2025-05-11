import Banner from "@/components/banner";
import Welcome from "@/components/welcome";

export default function Home() {

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Banner />
      <Welcome />
    </div>
  );
}

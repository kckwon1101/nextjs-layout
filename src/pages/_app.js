import '@/styles/globals.css'
import SideNavBar from "@/components/organisms/SideNavBar";
import Header from "@/components/organisms/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-LG-100">
      <div className="flex flex-col h-screen w-[1280px] bg-LG-100 m-auto">
        <Header />
        <div className="h-4" />
        <div className="flex grow">
          <SideNavBar />
          <div className="w-[1024px] px-4">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
    )
}

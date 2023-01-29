import {FaAngleDown, FaHome} from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/router";

export default function SideNavBar() {
  const router = useRouter();

  return (
    <div>
      <div className="w-64 h-full bg-LG-100 overscroll-y-contain border-r border-r-2 border-LG-200">
        <div className="px-6 pt-10">
          <input
            type="text"
            className="w-full rounded-full px-4 py-2.5 text-sm font-light text-LG-600 bg-LG-200 placeholder-LG-600 focus:outline-none focus:ring-1 focus:ring-LG-400 focus:bg-white focus:text-LG-600"
            placeholder="search"
          />
        </div>
        <div className="px-6 pt-8">
          <ul className="flex flex-col space-y-2">

            {/* 기본 메뉴 */}
            <li className="relative text-LG-500 font-light hover:text-LG-100 focus-within:text-LG-100 focus-within:font-bold focus-within:bg-LG-500">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <FaHome/>
              </div>
              <Link href="/"
                 className="inline-block w-full py-2 pl-8 pr-4 hover:bg-LG-300">Dashboard</Link>
            </li>

            {/* 하위 메뉴 */}
            <li>
              <div
                className="relative flex items-center justify-between text-LG-500"
              >
                <div className="flex items-center w-full font-light hover:text-LG-100 focus-within:text-LG-100 focus-within:font-bold focus-within:bg-LG-500">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <FaHome/>
                  </div>
                  <Link href="#"
                     className="inline-block w-full py-2 pl-8 pr-4 hover:bg-LG-300">Content</Link>
                </div>
                <button
                  className="absolute right-1 flex items-center p-1 border border-LG-500 rounded"
                  tabIndex="-1">
                  <FaAngleDown/>
                </button>
              </div>
              <div className="pt-2 pl-4">
                <ul className="flex flex-col pl2 text-LG-500">
                  <li className=" border-l border-LG-300 hover:text-LG-100 font-light focus-within:text-LG-100 focus-within:font-bold focus-within:bg-LG-500">
                    <Link href="#"
                       className="inline-block w-full px-4 py-2 hover:bg-LG-300">Course</Link>
                  </li>
                  <li className=" border-l border-LG-300 hover:text-LG-100 font-light focus-within:text-LG-100 focus-within:font-bold focus-within:bg-LG-500">
                    <Link href="#"
                       className="inline-block w-full px-4 py-2 hover:bg-LG-300">Category</Link>
                  </li>
                  <li className=" border-l border-LG-300 hover:text-LG-100 font-light focus-within:text-LG-100 focus-within:font-bold focus-within:bg-LG-500">
                    <Link href="#"
                       className="inline-block w-full px-4 py-2 hover:bg-LG-300">Library</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 기본 메뉴 */}
            <li className="relative text-LG-500 font-light hover:text-LG-100 focus-within:text-LG-100 focus-within:font-bold focus-within:bg-LG-500">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <FaHome/>
              </div>
              <Link href="/"
                    className="inline-block w-full py-2 pl-8 pr-4 hover:bg-LG-300">Sample</Link>
            </li>
          </ul>
        </div>
      </div>


      {/*<Link href={item.url} key={index}>*/}
      {/*  <div*/}
      {/*    className={`w-24 h-24 text-center border-b-2 border-secondary-500  mt-3 cursor-pointer  ${*/}
      {/*      router.asPath === item.url ? "text-primary-500" : "text-secondary-300"}*/}
      {/*    `}*/}
      {/*  >*/}
      {/*    <div className=" hover:text-primary-500 w-10 mx-auto pb-2">*/}
      {/*      {item.icon}*/}
      {/*    </div>*/}

      {/*    <p className="text-secondary-300">{item.label}</p>*/}
      {/*  </div>*/}
      {/*</Link>*/}

      {/*router.pathname === "/" ? */}
    </div>
  )
}

import Link from 'next/link'
import navPageButtons from '../temp/buttons/navPageButtons'

export default function Nav({ selectedPageIndex }) {
  let renderedPageButtons = navPageButtons.map((item, index) => {
    return (
      <Link href={item.link} passHref>
        <div
          key={'navPageButton' + index}
          className={
            index === selectedPageIndex
              ? 'navPageButton navPageButton_selected'
              : 'navPageButton'
          }
        >
          <div className="inline-block navPageButtonText">{item.name}</div>
          <div className="hidden bottom-0 w-full h-2 border-b-2 border-yellow-600"></div>
        </div>
      </Link>
    )
  })

  return (
    <nav className="fixed z-50 top-0 left-0 h-14 w-full bg-white border-b bg_custom_color_1F">
      <div className="absolute left-0 right-0 px-6 mx-auto w-full h-full page_max_width">
        {/* ====================================================================== */}
        <div className="relative flex px-4F left-0 right-0 h-12 page_max_widthF mx-0 border-bF mx-autoF hiddenF bg-gray-300F justify-between">
          <Link href="/" passHref>
            <div className="inline-block text-xl text-gray-600 font-semibold z-80 mt-2.5 bottom-0 ml-5F my-auto w-72 h-9 bg-pink-200F border border-transparent NOTrounded">
              {/* <div className="h-full bg-yellow-400F w-40 cursor-pointer">
                <img
                  className="w-full h-full object-contain object-left py-0 pr-1F"
                  src="/audioboox2.svg"
                  src="/musixmatch.svg"
                  src="/audioboox.svg"
                  alt="logo"
                />
              </div> */}
              Firebase 9 tutorial
            </div>
          </Link>

          <div className="top-2.5 mt-2.5 w-72 h-9 borderF border-gray-200  bg-gray-100 rounded-md mx-auto left-0 right-0 cursor-pointer overflow-hidden">
            <img
              className="inline-block w-3.5 h-3.5 top-2.5 left-4 ml-4"
              src="./icons/ui/search.svg"
              alt=""
            />
            <div className="inline-block ml-5 mt-1.5 text-sm text-gray-500 tracking-wide cursor-text">
              Search books
            </div>
          </div>

          <div className="mt-2.5 mr-5F top-2 right-5 w-60F bg-yellow-400F w-72 flex justify-end bg-yellow-400F">
            <div className="inline-block right-32F mr-3 bg-gray-100 w-32 text-center leading-9 h-9 box_radius rounded-md font-semibold text-sm cursor-pointer select-none">
              {/* <img
              className="absolute inline-block w-4 h-4 mt-2.5 ml-3 hidden"
              src="/icons/ui/person-fill.svg"
              alt=""
            /> */}
              Sign up
              {/* <div className="inline-block ml-10">James Brown</div> */}
            </div>
            <div className="inline-block hiddenF h-9 w-28 rounded-md bg_accent_colorF bg-yellow-600 text-sm text-white text-center font-semibold align-middle leading-9 cursor-pointer">
              Login
            </div>
          </div>

          {/* <div className="absolute right-16 top-3 bg-gray-100 w-10 h-10 box_radius rounded-fullF font-semibold text-sm fill-white cursor-pointer">
        </div> */}
          {/* <div className="absolute right-4 top-3 bg-gray-200F w-10 h-10 box_radius font-semibold text-sm fill-white cursor-pointer">
          <img
            className="absolute w-5 h-5 mt-2.5 ml-2.5"
            src="/icons/ui/list.svg"
            alt=""
          />
        </div> */}
          {/* <div className="absolute w-full text-center right-0 top-2.5 font-semibold text-regular text-white">
          {renderedPageButtons}
        </div> */}

          {/* ====================================================================== */}
        </div>
        {/* ====================================================================== */}
      </div>
    </nav>
  )
}

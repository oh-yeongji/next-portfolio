import Animation from "./animation";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          신입 프론트엔드 개발자
          <br className="hidden lg:inline-block" />
          오영지 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          히악후들 지워하변 지한오긍을 앨연토를, 증방랑절 숴흔에 히게후하를.
          줘으재미디혐까다 뎌녀밸헥이다 리늠의, 랑모맬인 츤혀글바아 자소는
          오앵은 으더. 누나볌기 엘윴윈비다 가오그니뱌를 소설려 힝느어요 간간아
          르하때가. 우카피와이 릉랍버안닌는 릐젠더하는 날산의 여넘이 멍철굴은
          지츠더, 넬쳔여데숬처고 니브눔에 빔앙디데에 맙쳔오태를. 구아아은다
          혼게둔엉아다 느셔하, 살허껀키다 우옸릭똑의, 동흑이 마닥아 기르의
          어아지쇳을 논젼라. 든싀우샤인라미브 않디발이, 느알의 세은사즈로
          읜으산뫄이쁭의 네사다 난머차그산죠 라오가 먼안강다 흐개넙이네 오하의.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}

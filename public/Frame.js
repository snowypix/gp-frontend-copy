const Frame = () => {
  return (
    <div className="relative w-full h-[1600px] text-left text-13xl text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1536px] h-[1600px] overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1540px] h-[1421px]">
        <div className="absolute top-[0px] left-[0px] bg-black w-[1540px] overflow-hidden flex flex-row items-center justify-start py-[11px] px-[39px] box-border gap-[780px]">
          <div className="relative">Forum name</div>
          <div className="relative w-[473px] h-[63px] shrink-0">
            <img
              className="absolute top-[1px] left-[213px] w-12 h-[61.6px] shrink-0 object-cover"
              alt=""
              src="/frame-6@2x.png"
            />
            <img
              className="absolute top-[0px] left-[300px] w-[101.14px] h-[63px] shrink-0 object-cover"
              alt=""
              src="/frame-5@2x.png"
            />
            <div className="absolute top-[16px] left-[401px] shrink-0 flex flex-col items-start justify-start gap-[15px]">
              <img
                className="relative max-h-full w-[49px] object-cover z-[0]"
                alt=""
                src="/line-1@2x.png"
              />
              <img
                className="relative max-h-full w-[49px] object-cover z-[1]"
                alt=""
                src="/line-1@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[31px] left-[0px] max-h-full w-[49px] object-cover z-[2]"
                alt=""
                src="/line-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[138px] left-[52px] rounded-sm bg-brown box-border w-[1434px] h-[110px] overflow-hidden border-[1px] border-solid border-gray-200">
          <img
            className="absolute top-[33px] left-[533px] rounded-[23px] w-[297px] h-11 object-cover"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <img
            className="absolute top-[42px] left-[544px] w-[27px] h-[27px] overflow-hidden object-cover"
            alt=""
            src="/magnifyingglass-1@2x.png"
          />
          <div className="absolute top-[35px] left-[399px] inline-block w-[204px] h-10">
            Search
          </div>
        </div>
        <div className="absolute top-[154px] left-[95px] rounded-4xs-5 bg-black w-[204px] h-[71px] flex flex-row items-center justify-start p-[25.5px] box-border text-center">
          <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
            Rédiger
          </div>
        </div>
        <div className="absolute top-[280px] left-[79px] bg-black w-[1381px] h-[174px]" />
        <div className="absolute top-[293px] left-[154px] text-41xl whitespace-pre-wrap inline-block w-[425px] h-[73px]">{`Titre du post  `}</div>
        <div className="absolute top-[367px] left-[1226px] rounded-4xs-5 bg-black w-[204px] h-[71px] flex flex-row items-center justify-start p-[25.5px] box-border text-center">
          <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
            Consulter
          </div>
        </div>
        <div className="absolute top-[1293px] left-[489px] w-[536px] h-32 flex flex-row items-center justify-center gap-[11px] text-center text-21xl text-dark-grey-400">
          <img
            className="relative rounded w-8 h-8 object-cover opacity-[0.5]"
            alt=""
            src="/page@2x.png"
          />
          <div className="relative rounded bg-white box-border w-[68px] h-[73px] border-[1px] border-solid border-gainsboro">
            <b className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block">
              <p className="m-0">&nbsp;</p>
              <p className="m-0">1</p>
            </b>
          </div>
          <div className="relative rounded bg-white box-border w-[68px] h-[73px] border-[1px] border-solid border-gainsboro">
            <b className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block">
              <p className="m-0">&nbsp;</p>
              <p className="m-0">2</p>
            </b>
          </div>
          <div className="relative rounded bg-white box-border w-[68px] h-[73px] border-[1px] border-solid border-gainsboro">
            <b className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block">
              <p className="m-0">&nbsp;</p>
              <p className="m-0">...</p>
            </b>
          </div>
          <div className="relative rounded bg-white box-border w-[68px] h-[73px] border-[1px] border-solid border-gainsboro">
            <b className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block">
              <p className="m-0">&nbsp;</p>
              <p className="m-0">9</p>
            </b>
          </div>
          <div className="relative rounded bg-white box-border w-[68px] h-[73px] border-[1px] border-solid border-gainsboro">
            <b className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block">
              <p className="m-0">&nbsp;</p>
              <p className="m-0">10</p>
            </b>
          </div>
          <img
            className="relative rounded w-8 h-8 object-cover"
            alt=""
            src="/page@2x.png"
          />
        </div>
        <div className="absolute top-[378px] left-[315px] inline-block w-[79px] h-[39px]">
          Date
        </div>
        <div className="absolute top-[378px] left-[167px] inline-block w-[145px] h-[42px]">
          Créateur
        </div>
        <div className="absolute top-[314px] left-[672px] text-center inline-block w-[170px] h-[41px]">
          Réponses
        </div>
        <div className="absolute top-[314px] left-[955px] inline-block w-[156px] h-[46px]">
          Catégorie
        </div>
        <div className="absolute top-[780px] left-[79px] bg-black w-[1381px] h-[174px]" />
        <div className="absolute top-[793px] left-[154px] text-41xl whitespace-pre-wrap inline-block w-[425px] h-[73px]">{`Titre du post  `}</div>
        <div className="absolute top-[867px] left-[1226px] rounded-4xs-5 bg-black w-[204px] h-[71px] flex flex-row items-center justify-start p-[25.5px] box-border text-center">
          <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
            Consulter
          </div>
        </div>
        <div className="absolute top-[878px] left-[315px] inline-block w-[79px] h-[39px]">
          Date
        </div>
        <div className="absolute top-[878px] left-[167px] inline-block w-[145px] h-[42px]">
          Créateur
        </div>
        <div className="absolute top-[814px] left-[672px] text-center inline-block w-[170px] h-[41px]">
          Réponses
        </div>
        <div className="absolute top-[814px] left-[955px] inline-block w-[156px] h-[46px]">
          Catégorie
        </div>
        <div className="absolute top-[1038px] left-[79px] bg-black w-[1381px] h-[174px]" />
        <div className="absolute top-[1051px] left-[154px] text-41xl whitespace-pre-wrap inline-block w-[425px] h-[73px]">{`Titre du post  `}</div>
        <div className="absolute top-[1125px] left-[1226px] rounded-4xs-5 bg-black w-[204px] h-[71px] flex flex-row items-center justify-start p-[25.5px] box-border text-center">
          <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
            Consulter
          </div>
        </div>
        <div className="absolute top-[1136px] left-[315px] inline-block w-[79px] h-[39px]">
          Date
        </div>
        <div className="absolute top-[1136px] left-[167px] inline-block w-[145px] h-[42px]">
          Créateur
        </div>
        <div className="absolute top-[1072px] left-[672px] text-center inline-block w-[170px] h-[41px]">
          Réponses
        </div>
        <div className="absolute top-[1072px] left-[955px] inline-block w-[156px] h-[46px]">
          Catégorie
        </div>
        <div className="absolute top-[522px] left-[79px] bg-black w-[1381px] h-[174px]" />
        <div className="absolute top-[535px] left-[154px] text-41xl whitespace-pre-wrap inline-block w-[425px] h-[73px]">{`Titre du post  `}</div>
        <div className="absolute top-[609px] left-[1226px] rounded-4xs-5 bg-black w-[204px] h-[71px] flex flex-row items-center justify-start p-[25.5px] box-border text-center">
          <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
            Consulter
          </div>
        </div>
        <div className="absolute top-[620px] left-[315px] inline-block w-[79px] h-[39px]">
          Date
        </div>
        <div className="absolute top-[620px] left-[167px] inline-block w-[145px] h-[42px]">
          Créateur
        </div>
        <div className="absolute top-[556px] left-[672px] text-center inline-block w-[170px] h-[41px]">
          Réponses
        </div>
        <div className="absolute top-[556px] left-[955px] inline-block w-[156px] h-[46px]">
          Catégorie
        </div>
      </div>
    </div>
  );
};

export default Frame;

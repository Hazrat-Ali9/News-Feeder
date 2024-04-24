import { useContext, useEffect, useState } from "react";
import { NewsContext, SearchText } from "../../Context/context";
import useNewsFind from "../../Hooks/useNewsFind";

const Main = () => {
  const [data,setData] = useState([]);
  const{searchText} = useContext(SearchText);

  const { newsData } = useContext(NewsContext);
  const {foundedData} = useNewsFind();

  useEffect(()=>{
    if(searchText){
      setData(foundedData);
    }else{
      setData(newsData);
    }
  },[foundedData, newsData, searchText]);

  const array1 = data.slice(0, data.length / 2);
  const array2 = data.slice(data.length / 2, data.length);

  return (
    <>
      <main className="my-10 lg:my-14">
        <div className={`container mx-auto ${searchText === '' ? 'grid grid-cols-12 gap-8' : ''} `}>
          {/* <!-- left --> */}
          <div  className={`${searchText==='' ? 'col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8' : ''}`}>
            {/* <!-- news item --> */}
            {array1.slice(0,8).map((item) => (
              <>
                <div  key={item?.source?.id} className="col-span-12 grid grid-cols-12 gap-4">
                  {/* <!-- info --> */}
                  <div className="col-span-12 lg:col-span-4">
                    <a href="#">
                      <h3 key={item?.source?.id} className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                       {item?.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#5C5955]">
                    {item?.description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">{item?.publishedAt}</p>
                  </div>
                  {/* <!-- thumb --> */}
                  <div className="col-span-12 lg:col-span-8">
                    <img
                      className="w-full"
                      src={item?.urlToImage}
                      alt="thumb"
                    />
                    <p className="mt-5 text-base text-[#5C5955]">
                      Illustration: {item?.author}
                    </p>
                  </div>
                </div>
              </>
            ))}
            {/* <!-- news item ends --> */}
          </div>

          {/* <!-- right --> */}
          <div className={`${searchText === '' ? 'col-span-12 self-start xl:col-span-4' : ''}`}>
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* <!-- news item --> */}
              {array2.slice(0,6).map((item) =>(
                <>
                  <div key={item?.source?.id} className="col-span-12 mb-6 md:col-span-8">
                    <img
                      className="w-full"
                      src={item?.urlToImage}
                      alt="thumb"
                    />
                    {/* <!-- info --> */}
                    <div className="col-span-12 mt-6 md:col-span-4">
                      <a href="#">
                        <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                          {item?.title}
                        </h3>
                      </a>
                      <p className="text-base text-[#292219]">
                        {item?.content}
                      </p>
                      <p className="mt-5 text-base text-[#94908C]">
                      {item?.publishedAt}
                      </p>
                    </div>
                  </div>
                </>
              ))}
              {/* <!-- news item ends --> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

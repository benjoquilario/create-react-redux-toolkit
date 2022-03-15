import React from 'react';
import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';

const SearchResults = ({ data, type }) => {
   return (
      <section className="mt-8 grid grid-cols-fill-mobile md:grid-cols-fill-20 gap-3 justify-center overflow-hidden">
         {Object.keys(data).length === 0 ? (
            Array.from(Array(25), (_, i) => <Skeleton key={i} />)
         ) : (
            <>
               {data.data.map((result, index) => {
                  return <Card data={result} key={index} type={type} />;
               })}
            </>
         )}
      </section>
   );
};

export default SearchResults;

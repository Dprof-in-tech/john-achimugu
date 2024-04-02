// import { usecases } from "../../../../data";

// export async function getStaticPaths() {
//     const paths = usecases.map((work) => ({
//         params: { slug: work.title}, 
//     }));

//     return { paths, fallback: false };
// }


// export async function getStaticProps({ params }: { params: any }) {
//     const item = usecases.find((work) => work.title === params.slug);
//     return { props: { item } };
// }




// export default function Postpage({params} : {params: any}) {


//   return (
//     <article className="text-black">
//       <h1>Attend.{params.slug}</h1>
//     </article>
//   );
// };


import { usecases } from '../../../../data';

export default function MyDynamicRoutePage({ params }: {params: any}) {
const filteredData = usecases.filter((usecase) => usecase.title.toLowerCase().replace(' ', '-') === params.slug);

  return (
    <div className='text-black'>
      <p>Current Slug: {params.slug}</p>
      {filteredData.length > 0 ? (
        filteredData.map((usecase, index) => (
          <div className='text-black' 
            key={index}>
            <h2>Selected usecase:</h2>
            <p>{usecase.title}</p>
            <p>Type: {usecase.tags}</p>
          </div>
        ))
      ) : (
        <p>No usecase found with ID: {params.slug}</p>
      )}
    </div>
  );
}


  
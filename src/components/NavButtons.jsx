export default function NavButton({page, setPage}) {

  const accu = () => {setPage(page+1);}
  const decc = () => {setPage(page-1);}

  return (
    <>
      {page<10 && <button type="submit" className ="buttons" onClick={accu}>next</button>}
        <p>{page}</p>
      {page>1 && <button type="submit" className ="buttons" onClick={decc}>prev</button>}
    </>
  );
}
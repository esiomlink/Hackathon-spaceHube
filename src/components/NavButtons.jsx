export default function NavButton({page, setPage}) {

  const accu = () => {
    if(page<9)setPage(page+1);}

  const decc = () => {
    if(page>1)setPage(page-1);}

  
  return (
    <>
      <button type="submit" className ="buttons" onClick={accu}>next</button>
        <p>{page}</p>
      <button type="submit" className ="buttons" onClick={decc}>prev</button>
    </>
  );
}
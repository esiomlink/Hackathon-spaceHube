export default function NavButton({page, setPage}) {

  const accu = () => {
    if(page<9)setPage(page+1);}

  const decc = () => {
    if(page>1)setPage(page-1);}

  
  return (
    <>
      <div>
        <button type='submit' className='buttons' onClick={decc}>
          prev
        </button>
      </div>
      <p className="count">{page}</p>
      <div>
        <button type='submit' className='buttons' onClick={accu}>
          next
        </button>
      </div>
    </>
  );
}

export default function NavButton({ page, setPage }) {
  const accu = () => {
    setPage(page + 1);
  };
  const decc = () => {
    setPage(page - 1);
  };

  return (
    <>
      <div>
        <button type='submit' className='buttons' onClick={decc}>
          prev
        </button>
      </div>
      <p>{page}</p>
      <div>
        <button type='submit' className='buttons' onClick={accu}>
          next
        </button>
      </div>
    </>
  );
}

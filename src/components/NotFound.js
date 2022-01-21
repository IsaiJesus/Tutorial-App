const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center py-9 px-6">
      <h1 className="font-bold text-3xl text-center">No results found for your search.</h1>
      <h3 className="font-semibold text-2xl text-center">Try another search</h3>
      <img src="/images/notFound.png" alt="Not Found" width="420"/>
    </section>
  )
}

export default NotFound;


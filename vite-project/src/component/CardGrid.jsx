import Card from "./Card"
const CardGrid = ({feature}) => {
  return ( // <--- Tambahkan return di sini
    <section className="py-16 px-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-black-900">Mengapa Brandku?</h2>

      <div className="grid grid-cols-3 gap-4 text-center items-center justify-center">
        {feature.map(items => (
          <Card key={items.id} title={items.title} description={items.description} />
        ))}
      </div>
    </section>
  )
}

export default CardGrid;
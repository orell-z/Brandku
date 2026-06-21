// Tambahkan { children } di sini agar komponen ini bisa menjadi wadah
const Beranda = ({ children }) => {
  return (
    <>
      <main>
        <section className="h-auto bg-blue-200 pb-12">
          <h1 className="m-1 text-3xl font-bold text-center items-center pt-11">
            Solusi terbaik untuk bisnis
          </h1>
          <p className="flex items-center justify-center rounded-lg text-gray-500 ">
            platfrom all in one untuk managemen, pemasaran, dan pertumbuhan bisnis kecil.
          </p>
          {children}
          
        </section>
      </main>
    </>
  );
};

export default Beranda;
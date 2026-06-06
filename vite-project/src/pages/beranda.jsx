import CtaButton from "../component/CTabutton";
const Beranda = () => {
    return (
       <>
       <main>
        <section class="h-56 bg-blue-200 ">
            <h1 class="m-1 text-3xl font-bold text-center items-center pt-11">Solusi terbaik untuk bisnis</h1>
            <p class="flex items-center justify-center rounded-lg text-gray-500 ">
                platfrom all in one untuk managemen, pemasaran, dan pertumbuhan bisnis kecil.
            </p>
            <div class="text-center pt-7">
                <p id="cta-feedback" class="mt-4 text-blue-600 font-medium hidden"></p>
            </div>
            <CtaButton/>
        </section>


        <section class="py-16 px-10">
            <h2 class="text-3xl font-bold text-center mb-12 text-black-900">Mengapa Brandku?</h2>
            
            <div class="grid grid-cols-3 gap-4 text-center items-center justify-center">

                <article class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden p-5 ">
                    <h3 class="font-bold">mudah di gunakan</h3>
                    <p>tidak perlu keahlian teknis, setup dalam 5 menit</p>
                </article>

                <article class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden p-5">
                    <h3 class="font-bold">Serba otomatis</h3>
                    <p>cepat di gunakan, karena di bantu dengan ai.</p>
                </article>

                <article class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden p-5">
                    <h3 class="font-bold">Laporan real time</h3>
                    <p>bisa melihat semua laporan.</p>
                </article>
 
            </div>
        </section>
    </main>

    <script src="index.js">
    </script>
       </> 
    );
};
export default Beranda
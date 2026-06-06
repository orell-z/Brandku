const Header = () => {
    return (
        <header className="flex items-center justify-between py-4 px-8">
        <h1 className="text-3xl font-bold text-blue-600 text-clifford">Brandku</h1>
        <nav className="flex items-center gap-8">
            <a href="">Beranda</a>
            <a href="/produk.html">produk</a>
            <a href="">harga</a>
        </nav>
    </header>
    )
}
export default Header;
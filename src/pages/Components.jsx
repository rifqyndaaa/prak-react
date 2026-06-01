import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Table from "../components/Table";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function Components() {
  const headers = [
    "No",
    "Nama Produk",
    "Kategori",
    "Harga",
  ];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  return (
    <>
      <Container>
        <h1 className="text-3xl font-bold mb-8">
          Components Playground
        </h1>

        {/* 1. BASIC COMPONENT */}
        <h2 className="text-2xl font-bold mb-4">
          1. Basic Component
        </h2>

        {/* Button */}
        <Card>
          <h3 className="text-lg font-semibold mb-4">
            Button Component
          </h3>

          <div className="flex gap-3 flex-wrap">
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            <Button type="secondary">Secondary</Button>
          </div>
        </Card>

        {/* Badge */}
        <div className="mt-6">
          <Card>
            <h3 className="text-lg font-semibold mb-4">
              Badge Component
            </h3>

            <div className="flex gap-3 flex-wrap">
              <Badge type="success">Aktif</Badge>
              <Badge type="warning">Pending</Badge>
              <Badge type="danger">Ditolak</Badge>
              <Badge type="primary">Baru</Badge>
            </div>
          </Card>
        </div>

        {/* Avatar */}
        <div className="mt-6">
          <Card>
            <h3 className="text-lg font-semibold mb-4">
              Avatar Component
            </h3>

            <div className="flex gap-4">
              <Avatar name="Budi" />
              <Avatar name="Siti" />
              <Avatar name="Rifqi" />
            </div>
          </Card>
        </div>

        {/* 2. LAYOUT COMPONENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          2. Layout Component
        </h2>

        <Card>
          <h3 className="text-lg font-semibold mb-2">
            Container & Footer
          </h3>

          <p className="text-gray-500">
            Container digunakan sebagai pembungkus halaman,
            sedangkan Footer digunakan sebagai bagian bawah halaman.
          </p>
        </Card>

        {/* 3. DATA DISPLAY COMPONENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          3. Data Display Component
        </h2>

        {/* Card */}
        <Card>
          <h3 className="text-lg font-semibold">
            Card Component
          </h3>

          <p className="text-gray-500 mt-2">
            Ini contoh penggunaan Card Component untuk
            menampilkan informasi.
          </p>
        </Card>

        {/* Table */}
        <div className="mt-6">
          <Card>
            <h3 className="text-lg font-semibold mb-4">
              Table Component
            </h3>

            <Table headers={headers}>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50"
                >
                  <td className="border px-4 py-3">
                    {index + 1}
                  </td>

                  <td className="border px-4 py-3">
                    {product.name}
                  </td>

                  <td className="border px-4 py-3">
                    {product.category}
                  </td>

                  <td className="border px-4 py-3">
                    {product.price}
                  </td>
                </tr>
              ))}
            </Table>
          </Card>
        </div>

        {/* Placeholder kategori selanjutnya */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          4. Form Component
        </h2>

        <Card>
          <p className="text-gray-500">
            InputField, TextArea, dan SelectField akan ditambahkan pada materi berikutnya.
          </p>
        </Card>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          5. Feedback Component
        </h2>

        <Card>
          <p className="text-gray-500">
            Alert, Modal, dan Loading akan ditambahkan pada materi berikutnya.
          </p>
        </Card>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          6. Section Component
        </h2>

        <Card>
          <p className="text-gray-500">
            HeroSection, FeatureSection, dan ProductSection akan ditambahkan pada materi berikutnya.
          </p>
        </Card>
      </Container>

      <Footer />
    </>
  );
}
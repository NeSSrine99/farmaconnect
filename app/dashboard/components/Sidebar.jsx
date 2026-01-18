import Image from "next/image";
import Link from "next/link";

const menu = [
  { name: "Overview", href: "/dashboard" },
  { name: "Prescriptions", href: "/dashboard/prescriptions" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen px-4 py-6">
      {/* Logo */}
      <a href="/" className="flex items-end">
        <Image
          src="FarmaconnectLogo.svg"
          alt="logo"
          className="mb-2 w-10 h-12"
          width={40}
          height={40}
        />
        <span className="text-center justify-center text-2xl font-normal font-['Poltawski_Nowy'] bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_#26ECF6_0deg,_#18959C_189deg,_#0D5356_360deg)] bg-cover bg-clip-text text-transparent">
          Farmaconnect
        </span>
      </a>

      {/* Menu */}
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

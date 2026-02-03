'use client'

export default function DropdownSubCategory({ subcategories }) {
  return (
    <div className="flex flex-col pl-4 mt-1">
      {subcategories.map((item, index) => (
        <a key={index} href="#" className="py-1 text-textLight hover:bg-gray-100">
          {item}
        </a>
      ))}
    </div>
  );
}

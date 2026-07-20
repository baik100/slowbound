const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Review', href: '#review' },
  { label: 'Service', href: '#service' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-300"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00C457')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

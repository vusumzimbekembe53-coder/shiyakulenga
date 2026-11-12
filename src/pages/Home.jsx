
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import pro1Img from '../assets/pro1.jpg'

const Home = () => {
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    alert(`${product.name} has been added to your bag!`)
  }

  const categories = [
    {
      number: '01',
      name: 'HEADWEAR',
      description: 'Caps and hats that complete your everyday look.',
      color: 'text-[#00F0FF]',
    },
    {
      number: '02',
      name: 'HOODIES',
      description: 'Comfortable layers with bold streetwear energy.',
      color: 'text-[#FF5500]',
    },
    {
      number: '03',
      name: 'TEES & SETS',
      description: 'Everyday essentials made for your own expression.',
      color: 'text-[#CCFF00]',
    },
    {
      number: '04',
      name: 'TRACKSUITS',
      description: 'Street-ready outfits for every mood and movement.',
      color: 'text-[#D8B4FE]',
    },
  ]

  return (
    <main className="bg-[#0B0C10] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/hero-image.jpg"
            alt="Shiya Kulenga streetwear collection"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 py-24">
          <p className="text-[#00F0FF] text-sm font-bold tracking-[5px] mb-6">
            STYLE FOR EVERY YOU
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight max-w-4xl">
            OWN YOUR SHIFT.
            <span className="block text-[#00F0FF]">
              STYLE FOR EVERY YOU.
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-xl mt-8">
            From the heart of Germiston to the streets everywhere. High-energy
            caps, graphic drop hoodies, and everyday street fits built for bold
            self-expression without breaking the bank.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#featured-products"
              className="bg-[#00F0FF] text-[#0B0C10] px-8 py-4 font-black text-xs tracking-widest hover:bg-white transition"
            >
              SHOP THE LATEST DROP
            </a>

            <a
              href="#categories"
              className="border border-white/40 text-white px-8 py-4 font-black text-xs tracking-widest hover:border-[#00F0FF] hover:text-[#00F0FF] transition"
            >
              EXPLORE HEADWEAR
            </a>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          <div className="relative">
            <img
              src={pro1Img}
              alt="Shiya Kulenga brand story"
              className="w-full h-[350px] md:h-[480px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#00F0FF] text-[#0B0C10] p-6 rounded-xl hidden sm:block">
              <p className="text-3xl font-black">SK.</p>
              <p className="text-xs font-bold tracking-widest">
                BORN IN GERMISTON
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#FF5500] text-xs font-black tracking-[5px] mb-5">
              MORE THAN JUST CLOTHING
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              OUR
              <span className="text-[#00F0FF]"> STORY.</span>
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Born from the vibrant pulse of Germiston and deeply rooted in
              KwaZulu-Natal culture, Shiya Kulenga is more than an apparel
              line. It is an open canvas for self-expression.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              Founded on the belief that fashion should flex with your mood
              and energy, we create high-impact street style designed for the
              movers, creators, and trendsetters shaping South African youth
              culture today.
            </p>

            <p className="text-gray-300 leading-8">
              From custom embroidered local caps to bold graphic hoodies and
              everyday outfits, every piece blends expressive style, comfort,
              and affordability. Whether you are keeping it low-key or making
              an unapologetic statement, Shiya Kulenga delivers Style for Every
              You. Wear your story loud.
            </p>

            <Link
              to="/"
              className="inline-block mt-9 text-[#00F0FF] text-xs font-black tracking-widest border-b border-[#00F0FF] pb-2 hover:text-white hover:border-white transition"
            >
              DISCOVER SHIYA KULENGA
            </Link>
          </div>

        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="py-24 px-6 md:px-10 bg-[#181A20]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-[#FF5500] text-xs font-black tracking-[5px] mb-4">
              FIND YOUR STYLE
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              SHOP BY
              <span className="text-[#00F0FF]"> CATEGORY.</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-xl leading-7">
              Whatever your mood, whatever your energy, find something that
              speaks to your style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category) => (
              <a
                key={category.number}
                href="#featured-products"
                className="group bg-[#0B0C10] border border-white/10 p-8 min-h-[230px] flex flex-col justify-between hover:border-[#00F0FF] hover:-translate-y-2 transition duration-300 rounded-xl"
              >
                <span className={`text-sm font-black ${category.color}`}>
                  {category.number}
                </span>

                <div>
                  <h3 className="text-2xl font-black mb-3 group-hover:text-[#00F0FF] transition">
                    {category.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    {category.description}
                  </p>

                  <span className="inline-block mt-6 text-[#00F0FF] text-xs font-bold tracking-widest">
                    EXPLORE →
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section id="featured-products" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[#FF5500] text-xs font-black tracking-[5px] mb-4">
                THE LATEST COLLECTION
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                LATEST
                <span className="text-[#00F0FF]"> DROPS.</span>
              </h2>

              <p className="text-gray-400 mt-5">
                Fresh styles. Bold energy. Made for every you.
              </p>
            </div>

            <Link
              to="/cart"
              className="text-[#00F0FF] text-xs font-black tracking-widest hover:text-white transition"
            >
              VIEW YOUR BAG →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-[#181A20] rounded-xl overflow-hidden border border-white/5 hover:border-[#00F0FF]/50 transition"
              >
                <div className="relative overflow-hidden h-[320px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-[#00F0FF] text-[#0B0C10] px-3 py-2 text-[10px] font-black tracking-widest">
                    LATEST DROP
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-[#00F0FF] text-xs font-bold tracking-widest mb-2">
                    {product.category}
                  </p>

                  <h3 className="text-xl font-black mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 min-h-[48px]">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 gap-3">
                    <span className="text-xl font-black">
                      R{Number(product.price).toFixed(2)}
                    </span>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#00F0FF] text-[#0B0C10] px-4 py-3 text-[10px] font-black tracking-widest hover:bg-white transition"
                    >
                      ADD TO BAG +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BRAND PROMO SECTION */}
      <section className="py-24 px-6 md:px-10 bg-[#00F0FF] text-[#0B0C10]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-black tracking-[5px] mb-5">
            THIS IS YOUR STYLE. YOUR STORY.
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight">
            WEAR YOUR
            <span className="block">STORY LOUD.</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-7 leading-7">
            Express yourself without limits. Find your next favourite piece
            and make every outfit your own.
          </p>

          <a
            href="#featured-products"
            className="inline-block mt-9 bg-[#0B0C10] text-white px-9 py-4 text-xs font-black tracking-widest hover:bg-[#181A20] transition"
          >
            SHOP NOW
          </a>
        </div>
      </section>

      {/* WHY SHOP WITH US */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[#FF5500] text-xs font-black tracking-[5px] mb-4">
              THE SHIYA EXPERIENCE
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              WHY SHOP
              <span className="text-[#00F0FF]"> WITH US?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🚚',
                title: 'NATIONWIDE DELIVERY',
                description: 'Get your favourite styles delivered across South Africa.',
              },
              {
                icon: '✦',
                title: 'LOCAL CULTURE',
                description: 'Inspired by our roots and made for our streets.',
              },
              {
                icon: '💬',
                title: 'PERSONAL SUPPORT',
                description: 'Get in touch with us when you need assistance.',
              },
              {
                icon: '⚡',
                title: 'EVERYDAY STYLE',
                description: 'Expressive streetwear at accessible prices.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-7 border border-white/10 rounded-xl bg-[#181A20]"
              >
                <span className="text-4xl">{item.icon}</span>

                <h3 className="text-sm font-black tracking-widest mt-5 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 px-6 md:px-10 bg-[#181A20]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#00F0FF] text-xs font-black tracking-[5px] mb-4">
            STAY IN THE LOOP
          </p>

          <h2 className="text-3xl md:text-5xl font-black">
            NEVER MISS A
            <span className="text-[#00F0FF]"> DROP.</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Follow our journey and stay updated on new collections, fresh
            releases, and everything Shiya Kulenga.
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-[#00F0FF] text-[#0B0C10] px-8 py-4 text-xs font-black tracking-widest hover:bg-white transition"
          >
            FOLLOW OUR JOURNEY
          </a>
        </div>
      </section>

    </main>
  )
}

export default Home

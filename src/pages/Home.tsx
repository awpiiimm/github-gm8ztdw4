import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Play, ExternalLink } from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-radial from-orange-400/30 via-orange-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-white/5 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-[500px] h-[500px] -m-[52px] border border-white/5 rounded-full animate-spin-slower"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] -m-[102px] border border-white/5 rounded-full animate-spin-slowest"></div>

          <div
            className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400/60 rounded-full animate-spin-slow"
            style={{ transformOrigin: '0 192px' }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-2 h-2 bg-orange-400/60 rounded-full animate-spin-slower"
            style={{ transformOrigin: '250px 0' }}
          ></div>
          <div
            className="absolute bottom-0 right-1/2 w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-spin-slowest"
            style={{ transformOrigin: '0 -300px' }}
          ></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
          <div className="absolute top-[25%] right-[25%] w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-white/35 rounded-full animate-twinkle"></div>
          <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-white/40 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[20%] right-[35%] w-1 h-1 bg-white/30 rounded-full animate-twinkle"></div>
          <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-white/35 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[50%] right-[10%] w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
          <div className="absolute top-[70%] left-[40%] w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-[10%] right-[40%] w-0.5 h-0.5 bg-white/25 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-[60%] left-[60%] w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-[80%] right-[50%] w-0.5 h-0.5 bg-white/25 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-[10%] left-[45%] w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle-delayed"></div>
        </div>
      </div>

        {/* Logo */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <img
            src="/logosolar.png"
            alt="Solar Music Group Logo"
            className="w-48 sm:w-56 md:w-64 mx-auto drop-shadow-[0_0_15px_rgba(255,140,0,0.4)]"
          />
        </div>
      </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1500 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#FFD166] drop-shadow-[0_0_18px_rgba(255,200,60,0.7)] leading-tight max-w-4xl">
            Independent record label &<br />
            distributor.
          </h1>

          <p className="text-lg md:text-xl text-[#FFE29A] drop-shadow-[0_0_10px_rgba(255,200,60,0.5)] mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Solar Music Group uncovers hidden potential in music, turning legal
            <br className="hidden md:block" />
            challenges into opportunities for both artists and brands. Join our team
            <br className="hidden md:block" />
            of 30+ talented artists today!
          </p>

          <p className="text-sm text-[#FFD166] drop-shadow-[0_0_8px_rgba(255,200,60,0.6)] mb-10 tracking-wide">
            Established 2024 · London
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-gray-900 bg-[#FFD166] rounded-lg
                       shadow-[0_0_20px_rgba(255,200,60,0.8)] hover:shadow-[0_0_35px_rgba(255,200,60,1)]
                       hover:scale-105 transition-all duration-300"
          >
            Submit Your Music
          </Link>
        </div>

          {/* Footer */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-6 transition-all duration-1500 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-center text-xs text-[#FFD166]/70 drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]">
              © 2025 Solar Music Group All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* New Releases Section */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFD166] drop-shadow-[0_0_18px_rgba(255,200,60,0.7)] mb-4">
              New Releases
            </h2>
            <p className="text-lg text-[#FFE29A]/80">
              Check out the latest tracks from our talented artists
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Song 1 */}
            <div
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#FFD166]/20 rounded-xl overflow-hidden hover:border-[#FFD166]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,200,60,0.3)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#FFD166]/10 backdrop-blur-sm border-2 border-[#FFD166]/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD166]/20 transition-all duration-300 cursor-pointer">
                    <Play className="w-10 h-10 text-[#FFD166] fill-[#FFD166]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FFD166] mb-2 drop-shadow-[0_0_10px_rgba(255,200,60,0.5)]">
                  Midnight Dreams
                </h3>
                <p className="text-[#FFE29A]/80 mb-4">by Luna Eclipse</p>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  A mesmerizing blend of electronic beats and ethereal vocals that transports you to another dimension.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FFD166]/10 hover:bg-[#FFD166]/20 border border-[#FFD166]/30 hover:border-[#FFD166]/60 text-[#FFD166] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,60,0.4)]"
                  >
                    <Play className="w-4 h-4" />
                    Listen Now
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2.5 bg-[#FFD166]/10 hover:bg-[#FFD166]/20 border border-[#FFD166]/30 hover:border-[#FFD166]/60 text-[#FFD166] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,60,0.4)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Song 2 */}
            <div
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#FFD166]/20 rounded-xl overflow-hidden hover:border-[#FFD166]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,200,60,0.3)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#FFD166]/10 backdrop-blur-sm border-2 border-[#FFD166]/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD166]/20 transition-all duration-300 cursor-pointer">
                    <Play className="w-10 h-10 text-[#FFD166] fill-[#FFD166]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FFD166] mb-2 drop-shadow-[0_0_10px_rgba(255,200,60,0.5)]">
                  City Lights
                </h3>
                <p className="text-[#FFE29A]/80 mb-4">by Neon Wave</p>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  An upbeat synth-pop anthem capturing the energy and excitement of urban nightlife.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FFD166]/10 hover:bg-[#FFD166]/20 border border-[#FFD166]/30 hover:border-[#FFD166]/60 text-[#FFD166] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,60,0.4)]"
                  >
                    <Play className="w-4 h-4" />
                    Listen Now
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2.5 bg-[#FFD166]/10 hover:bg-[#FFD166]/20 border border-[#FFD166]/30 hover:border-[#FFD166]/60 text-[#FFD166] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,60,0.4)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative py-8 px-6 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD166]/60 hover:text-[#FFD166] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,200,60,0.8)]"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="text-center text-xs text-[#FFD166]/70 drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]">
            © 2025 Solar Music Group All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo y descripción */}
          <div className="sm:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Node Solutions
            </h3>
            <p className="text-sm sm:text-base text-white/60 mb-4 max-w-md">
              Implementando IA de verdad a empresas reales. Transformamos
              negocios con soluciones de inteligencia artificial a medida.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-sm sm:text-base text-white/60 hover:text-node-blue transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-sm sm:text-base text-white/60 hover:text-node-blue transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm sm:text-base text-white/60 hover:text-node-blue transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-white/60 break-all">contacto@nodesolutions.es</li>
              <li className="text-sm sm:text-base text-white/60">+34 600 000 000</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Node Solutions. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-xs sm:text-sm text-white/40 hover:text-node-blue transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-white/40 hover:text-node-blue transition-colors"
              >
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



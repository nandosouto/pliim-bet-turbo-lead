
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-yellow-gradient py-3 px-4">
        <div className="container mx-auto">
          <p className="text-black text-center font-bold md:text-lg text-sm">
            ⚠️ ÚLTIMAS VAGAS! SE FECHAR, PERDE O CUPOM EXCLUSIVO!
          </p>
          <p className="text-black text-center md:text-sm text-xs">
            100% Pagando, com Cashback e Rodadas Grátis!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

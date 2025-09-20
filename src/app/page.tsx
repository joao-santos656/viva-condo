"use client";

type Morador = {
  primeiroNome: string;
  sobreNome: string;
};

export default function Home() {
  function formatarNomeMorador(morador: Morador) {
    return morador.primeiroNome + " " + morador.sobreNome;
  }

  function obterSaudacao(morador: null | Morador) {
    if (morador) {
      return <span>Olá, {formatarNomeMorador(morador)}!</span>;
    }
    return <span>Olá, Estranho!!!</span>;
  }

  const morador = {
    primeiroNome: "Sandro",
    sobreNome: "Pereira",
  };

  return (
    <div id="principal" className="min-h-screen flex items-center justify-center bg-black">
      <div id="componente-azul"className="card-azul">
        <h1 id = "name" className="text-2xl font-semibold">{obterSaudacao(null)}</h1>
      </div>
    </div>
  );
}

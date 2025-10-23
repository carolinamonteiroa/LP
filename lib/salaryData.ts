export type UF = 'AC'|'AL'|'AP'|'AM'|'BA'|'CE'|'DF'|'ES'|'GO'|'MA'|'MT'|'MS'|'MG'|'PA'|'PB'|'PR'|'PE'|'PI'|'RJ'|'RN'|'RO'|'RS'|'RR'|'SC'|'SE'|'SP'|'TO';

export const STATES: Record<UF, string> = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RO: 'Rondônia',
  RS: 'Rio Grande do Sul',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SE: 'Sergipe',
  SP: 'São Paulo',
  TO: 'Tocantins'
};

export const SALARIOS: {
  advogado: Partial<Record<UF, number>>;
  estagiario: Partial<Record<UF, number>>;
  fallback: { advogado: number; estagiario: number; };
} = {
  // Valores para ADVOGADOS JÚNIORES/INICIANTES (2024-2025)
  // Considerando posições entry-level e mercado real de início de carreira
  advogado: {
    // Capitais e mercados principais (júnior)
    DF: 4500,  // Mercado aquecido, mas júnior
    SP: 4000,  // Próximo ao piso legal, júnior
    RJ: 3800,  // Júnior em mercado competitivo
    PR: 3500,  // Próximo ao piso legal júnior
    RS: 3300,
    SC: 3200,
    MG: 3200,
    ES: 3000,
    GO: 2900,
    MT: 2800,
    MS: 2800,  // Júnior considerando piso
    BA: 2800,
    PE: 2700,
    CE: 2600,
    PA: 2600,
    PB: 2500,
    RN: 2500,
    SE: 2400,
    PI: 2300,
    MA: 2300,
    AL: 2200,
    RO: 2500,
    TO: 2400,
    AC: 2300,
    AM: 2600,
    AP: 2400,
    RR: 2500,
  },
  estagiario: {
    // Baseado em médias de mercado privado e público
    SP: 1200,  // Indeed: R$ 1.807 (reduzido para média mais realista)
    RJ: 1000,  // Órgãos públicos: ~R$ 870 + privado
    DF: 1100,
    MG: 950,
    RS: 900,   // Órgãos públicos: R$ 833
    SC: 900,   // Órgãos públicos: R$ 850
    PR: 950,
    ES: 900,
    GO: 900,
    MT: 850,
    MS: 850,
    BA: 850,
    PE: 850,
    CE: 800,
    PA: 800,
    PB: 750,
    RN: 750,
    SE: 750,
    PI: 750,
    MA: 750,
    AL: 750,
    RO: 800,
    TO: 750,
    AC: 750,
    AM: 800,
    AP: 750,
    RR: 800,
  },
  // Fallbacks nacionais (júnior/iniciante)
  fallback: {
    advogado: 3000,  // Média para advogados júniores
    estagiario: 1133.67  // Catho 2025
  }
};

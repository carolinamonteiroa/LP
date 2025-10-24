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
  advogado: Partial<Record<UF, { min: number; max: number }>>;
  estagiario: Partial<Record<UF, { min: number; max: number }>>;
  fallback: { advogado: { min: number; max: number }; estagiario: { min: number; max: number }; };
} = {
  // Faixas salariais para ADVOGADOS JÚNIORES/INICIANTES (2024-2025)
  // Considerando posições entry-level e mercado real de início de carreira
  advogado: {
    // Capitais e mercados principais (júnior)
    DF: { min: 4000, max: 5000 },  // Mercado aquecido, mas júnior
    SP: { min: 3500, max: 4500 },  // Próximo ao piso legal, júnior
    RJ: { min: 3300, max: 4300 },  // Júnior em mercado competitivo
    PR: { min: 3000, max: 4000 },  // Próximo ao piso legal júnior
    RS: { min: 2800, max: 3800 },
    SC: { min: 2700, max: 3700 },
    MG: { min: 2700, max: 3700 },
    ES: { min: 2500, max: 3500 },
    GO: { min: 2400, max: 3400 },
    MT: { min: 2300, max: 3300 },
    MS: { min: 2300, max: 3300 },
    BA: { min: 2300, max: 3300 },
    PE: { min: 2200, max: 3200 },
    CE: { min: 2100, max: 3100 },
    PA: { min: 2100, max: 3100 },
    PB: { min: 2000, max: 3000 },
    RN: { min: 2000, max: 3000 },
    SE: { min: 1900, max: 2900 },
    PI: { min: 1800, max: 2800 },
    MA: { min: 1800, max: 2800 },
    AL: { min: 1700, max: 2700 },
    RO: { min: 2000, max: 3000 },
    TO: { min: 1900, max: 2900 },
    AC: { min: 1800, max: 2800 },
    AM: { min: 2100, max: 3100 },
    AP: { min: 1900, max: 2900 },
    RR: { min: 2000, max: 3000 },
  },
  estagiario: {
    // Baseado em médias de mercado privado e público
    SP: { min: 1000, max: 1400 },  // Indeed: R$ 1.807 (reduzido para média mais realista)
    RJ: { min: 800, max: 1200 },   // Órgãos públicos: ~R$ 870 + privado
    DF: { min: 900, max: 1300 },
    MG: { min: 750, max: 1150 },
    RS: { min: 700, max: 1100 },   // Órgãos públicos: R$ 833
    SC: { min: 700, max: 1100 },   // Órgãos públicos: R$ 850
    PR: { min: 750, max: 1150 },
    ES: { min: 700, max: 1100 },
    GO: { min: 700, max: 1100 },
    MT: { min: 650, max: 1050 },
    MS: { min: 650, max: 1050 },
    BA: { min: 650, max: 1050 },
    PE: { min: 650, max: 1050 },
    CE: { min: 600, max: 1000 },
    PA: { min: 600, max: 1000 },
    PB: { min: 550, max: 950 },
    RN: { min: 550, max: 950 },
    SE: { min: 550, max: 950 },
    PI: { min: 550, max: 950 },
    MA: { min: 550, max: 950 },
    AL: { min: 550, max: 950 },
    RO: { min: 600, max: 1000 },
    TO: { min: 550, max: 950 },
    AC: { min: 550, max: 950 },
    AM: { min: 600, max: 1000 },
    AP: { min: 550, max: 950 },
    RR: { min: 600, max: 1000 },
  },
  // Fallbacks nacionais (júnior/iniciante)
  fallback: {
    advogado: { min: 2500, max: 3500 },  // Faixa para advogados júniores
    estagiario: { min: 900, max: 1367 }  // Baseado em Catho 2025
  }
};

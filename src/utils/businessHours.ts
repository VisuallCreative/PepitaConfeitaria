export interface BakeryScheduleInfo {
  isOpen: boolean;
  statusLabel: string;
  nextOpenLabel: string;
  todayHoursText: string;
}

export const OFFICIAL_SCHEDULE = [
  { day: 'Segunda-feira', hours: '08h às 18h', openHour: 8, closeHour: 18, isClosed: false },
  { day: 'Terça-feira', hours: '08h às 18h', openHour: 8, closeHour: 18, isClosed: false },
  { day: 'Quarta-feira', hours: '08h às 18h', openHour: 8, closeHour: 18, isClosed: false },
  { day: 'Quinta-feira', hours: '08h às 18h', openHour: 8, closeHour: 18, isClosed: false },
  { day: 'Sexta-feira', hours: '08h às 18h', openHour: 8, closeHour: 18, isClosed: false },
  { day: 'Sábado', hours: '08h às 11h', openHour: 8, closeHour: 11, isClosed: false },
  { day: 'Domingo', hours: 'Fechado', openHour: 0, closeHour: 0, isClosed: true },
];

/**
 * Checks if Pepitas Confeitaria is currently open based on Ourinhos / Brazil time
 */
export function getBakeryScheduleInfo(dateInput?: Date): BakeryScheduleInfo {
  const now = dateInput || new Date();
  // Get day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeDec = currentHour + currentMinutes / 60;

  // Sunday = 0
  if (dayOfWeek === 0) {
    return {
      isOpen: false,
      statusLabel: 'Fechado aos Domingos',
      nextOpenLabel: 'Abre Segunda-feira às 08h',
      todayHoursText: 'Fechado hoje',
    };
  }

  // Saturday = 6
  if (dayOfWeek === 6) {
    const isOpenSaturday = currentTimeDec >= 8 && currentTimeDec < 11;
    if (isOpenSaturday) {
      return {
        isOpen: true,
        statusLabel: 'Aberto agora (até 11h)',
        nextOpenLabel: 'Fecha às 11h de hoje',
        todayHoursText: 'Hoje: 08h às 11h',
      };
    } else if (currentTimeDec < 8) {
      return {
        isOpen: false,
        statusLabel: 'Fechado no momento',
        nextOpenLabel: 'Abre hoje às 08h',
        todayHoursText: 'Hoje: 08h às 11h',
      };
    } else {
      return {
        isOpen: false,
        statusLabel: 'Fechado por hoje',
        nextOpenLabel: 'Abre Segunda-feira às 08h',
        todayHoursText: 'Hoje: 08h às 11h',
      };
    }
  }

  // Monday - Friday (1 to 5)
  const isOpenWeekday = currentTimeDec >= 8 && currentTimeDec < 18;
  if (isOpenWeekday) {
    return {
      isOpen: true,
      statusLabel: 'Aberto agora (até 18h)',
      nextOpenLabel: 'Fecha às 18h de hoje',
      todayHoursText: 'Hoje: 08h às 18h',
    };
  } else if (currentTimeDec < 8) {
    return {
      isOpen: false,
      statusLabel: 'Fechado no momento',
      nextOpenLabel: 'Abre hoje às 08h',
      todayHoursText: 'Hoje: 08h às 18h',
    };
  } else {
    // After 18h
    const nextDayLabel = dayOfWeek === 5 ? 'Abre Sábado às 08h' : 'Abre amanhã às 08h';
    return {
      isOpen: false,
      statusLabel: 'Fechado no momento',
      nextOpenLabel: nextDayLabel,
      todayHoursText: 'Hoje: 08h às 18h',
    };
  }
}

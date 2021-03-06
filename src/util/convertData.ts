export function formatStringDate(date: string) {
    const [day, month, year] = date.split("/")
    return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export function date(timestamp: Date) {
    const date = new Date(timestamp)
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    return {
        day,
        month,
        year,
        iso: `${year}-${month}-${day}`,
        birthDay: `${day}/${month}`,
        format: `${day}/${month}/${year}`,
    };
}

export function age(timestamp: Date) {
    const today = new Date();
    const birthDate = new Date(timestamp);
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const month = today.getMonth() - birthDate.getMonth();
  
    if(month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) 
      age -= 1
  
  return age;
  }

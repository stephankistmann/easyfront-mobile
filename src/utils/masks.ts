const maskCpf = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");

  return value;
};

const maskPhone = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");

  return value;
};

export { maskCpf, maskPhone };

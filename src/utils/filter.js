
const filterByValues = (input = '', select = '', array = []) => {
  const lowercasedFilter = input ? input.toLowerCase() : select.toLowerCase();
  return [...array]?.filter(c =>  
    c.fields?.Nombre?.toLowerCase().includes(lowercasedFilter.toLowerCase()) ||
    c.fields?.Provincia?.toLowerCase().includes(lowercasedFilter.toLowerCase()) ||
    c.fields?.Corporación?.toLowerCase().includes(lowercasedFilter.toLowerCase()) ||
    c.fields?.Partido_politico?.toLowerCase().includes(lowercasedFilter.toLowerCase())
  )
}

export {filterByValues}

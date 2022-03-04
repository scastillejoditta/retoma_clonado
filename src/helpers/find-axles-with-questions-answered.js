const findAxlesWithQuestionsAnswered = (axles = [], newCandidate = {}) => {
  const axlesCopy = [...axles]
  const candidatesCopy = {...newCandidate}
  const axlesWihQuestionsAnswered = axlesCopy.map(ax => {
    const answers = [];
    candidatesCopy?.questions?.map(cn => {
      if(ax?.fields?.Pregunta_front?.includes(cn.question)) {
        answers.push(cn)
      }
    })
    return {
      ...ax,
      answers: [...answers]
    }
  })
  .filter(awqa => awqa.answers.length !== 0)
  .map((q) => ({
    value: q?.id,
    label: q?.fields.Ejes,
    name: q?.fields.Ejes,
  }))
  return axlesWihQuestionsAnswered
}
  
  export {findAxlesWithQuestionsAnswered}
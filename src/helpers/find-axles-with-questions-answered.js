const findAxlesWithQuestionsAnswered = (axles = [], newCandidate = {}) => {
  const axlesCopy = [...axles]
    const candidatesCopy = {...newCandidate}
    const axlesWihQuestionsAnswered = axlesCopy.map(ax => {
      const answers = [];
      candidatesCopy?.questions?.map(cn => {
        if(ax.fields.Pregunta_front.includes(cn.question)) {
          answers.push(cn)
        }
      })
      return {
        ...ax,
        answers: [...answers]
      }
    })
    return axlesWihQuestionsAnswered
  }
  
  export {findAxlesWithQuestionsAnswered}